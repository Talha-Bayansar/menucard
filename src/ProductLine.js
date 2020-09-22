import React from "react";

function ProductLine(props) {
  const { product } = props;
  const { price } = props;
  return (
    <div className="productLine">
      {product}: {price}
    </div>
  );
}

export default ProductLine;
