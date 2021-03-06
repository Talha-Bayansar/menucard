import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as FirestoreService from "../../services/firestore";
import { FLAT_PRODUCT_DATA } from "../../utilities/flat_product_data";

/** saved in localStorage: array of objects: { id, amount}
 *  used in program: array of objects: {product, amount}
 */
function convertOrderListFromStorage(preloadedStateWithProductIds) {
  return preloadedStateWithProductIds.map((o) => {
    return {
      product: FLAT_PRODUCT_DATA.find((p) => p.id === o.id),
      amount: o.amount,
    };
  });
}

const OrderListContext = createContext();

export function OrderListProvider(props) {
  const [tableNumber, setTableNumber] = useState(
    process.env.REACT_APP_INITIAL_TABLE
  );
  //refers to id in database
  const [orderId, setOrderId] = useState();
  //from database
  const [orderList, setOrderList] = useState([]);

  //tableNumber effect: called when tableNumber changes
  //when tableNumber changes we check for order in db and set the orderId
  useEffect(() => {
    async function getOrderRefForTable() {
      try {
        const orderId = await FirestoreService.getOrderListIdForTable(
          tableNumber
        );
        if (orderId) {
          console.log(
            `tableNumber effect: table ${tableNumber} order ${orderId}`
          );
          setOrderId(orderId);
        } else {
          FirestoreService.createOrderListForTable(tableNumber);
          setOrderId(orderId);
        }
      } catch (e) {
        console.log(`ERROR ${JSON.stringify(e)}`);
      }
    }

    console.log(`tableNumber effect: table ${tableNumber}`);
    if (tableNumber) getOrderRefForTable();
  }, [tableNumber, setTableNumber, setOrderId]);

  //orderId effect: called when orderId changes
  //if orderId changes we subcribe on changes in for the data for that orderId
  //   this means:when the data in the db changes the observer-function is called
  useEffect(() => {
    console.log(`orderId effect: orderId ${orderId}`);
    if (orderId) {
      console.log(`orderId effect: subscribe to order ${orderId}...`);
      FirestoreService.streamOrder(orderId, {
        next: (querySnapshot) => {
          console.log(`streamOrder observer called for ${orderId}`);
          const converted = convertOrderListFromStorage(
            querySnapshot.data().orders
          );
          setOrderList(converted);
        },
        error: (e) => {
          console.log(`ERROR get order failed. Error=${e}`);
        },
      });
    }
  }, [orderId, setOrderList]);

  // useCallback(() => {
  //   async function incrementProductInOrderList(product) {}
  // }, [input]);

  const api = useMemo(
    () => ({
      tableNumber,
      setTableNumber,
      orderList,
      orderId,
    }),
    [tableNumber, setTableNumber, orderList, orderId]
  );

  const orderListToPrint = orderList.map(
    (o) => ` ${o.product.id}: ${o.amount}`
  );
  console.log(`OrderListProvider: tableNumber=${tableNumber},`);
  console.log(`                   orderId=${orderId},`);
  console.log(`                   orderList=[${orderListToPrint}]`);
  return (
    <OrderListContext.Provider value={api}>
      {props.children}
    </OrderListContext.Provider>
  );
}

export const useOrderListContext = () => useContext(OrderListContext);
