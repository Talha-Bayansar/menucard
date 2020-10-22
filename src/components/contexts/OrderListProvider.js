import React, { createContext, useContext, useMemo, useState } from "react";

const OrderListContext = createContext();

export function OrderListProvider(props) {
  const [tableNumber, setTableNumber] = useState(1);
  const api = useMemo(
    () => ({
      tableNumber,
      setTableNumber,
    }),
    [tableNumber, setTableNumber]
  );
  return (
    <OrderListContext.Provider value={api}>
      {props.children}
    </OrderListContext.Provider>
  );
}

export const useOrderListContext = () => useContext(OrderListContext);
