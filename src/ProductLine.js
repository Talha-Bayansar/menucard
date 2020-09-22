import React from "react";

function ProductLine(props) {
  const { product } = props;
  return (
    <div className="productLine">
      <div>{product.name}</div>
      <div>{product.price}&euro;</div>
    </div>
  );
}

export default ProductLine;
