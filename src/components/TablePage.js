import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrderListContext } from "./contexts/OrderListProvider";

function TablePage() {
  const { tableNumberFromUrl } = useParams();
  const { tableNumber, setTableNumber } = useOrderListContext();
  useEffect(() => {
    setTableNumber(tableNumberFromUrl);
  }, [tableNumberFromUrl, setTableNumber]);
  return <div>Welkom bij tafel {tableNumber}!</div>;
}

export default TablePage;
