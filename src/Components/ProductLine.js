import React from "react";

/** @return {null} */
function ProductLine(props) {
  const { product } = props;
  if (!product.name) return null;
  return (
    <>
      <div className="productLine">
        <div>
          {product.name}{" "}
          {product.size && <span className="productSize">{product.size}</span>}
        </div>
        <div>{product.price}&euro;</div>
      </div>
      {product.note && <div className="note productNote">{product.note}</div>}
    </>
  );
}

export default ProductLine;
