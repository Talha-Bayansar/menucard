import React from "react";

function ProductLine(props) {
  const { product } = props;
  return (
    <div className="productLine">
      {product.name}: {product.price}
    </div>
  );
}

export default ProductLine;
