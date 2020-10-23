import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FLAT_PRODUCT_DATA } from "../utilities/flat_product_data";
import { useActiveProductContext } from "./contexts/ActiveProductProvider";
import { useOrderListContext } from "./contexts/OrderListProvider";
import ProductLine from "./product/ProductLine";

function OrderListPage() {
  const { tableNumber, orderList } = useOrderListContext();
  const { setFlatProductList } = useActiveProductContext();

  useEffect(() => {
    setFlatProductList(orderList.map((p) => p.product));
  }, [setFlatProductList, orderList]);

  const findProduct = (id) => {
    return FLAT_PRODUCT_DATA.find((p) => p.id === id && p);
  };
  return (
    <div>
      {tableNumber === "" ? (
        <span>
          De bestelling is nog leeg. Maak je keuze in het{" "}
          <Link to={"/"}>Menu</Link>
        </span>
      ) : (
        <>
          <span>table number {tableNumber}:</span>
          <br />
          <br />
          {orderList.length === 0 ? (
            <span>Scan de QR code op je tafel om te bestellen.</span>
          ) : (
            orderList.map((e) => (
              <div key={e.product.id}>
                <div>
                  <ProductLine product={findProduct(e.product.id)} />
                  <br />
                  <span>aantal: {e.amount}</span>
                </div>
                <br />
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default OrderListPage;
