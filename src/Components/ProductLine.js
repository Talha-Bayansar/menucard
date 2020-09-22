import React from "react";
import Note from "./Note";

/** @return {null} */
function ProductLine(props) {
  const { product } = props;
  if (!product.name) return null;
  return (
    <>
      <div className="productLine">
        <div>
          {product.name}{" "}
          {product.size && (
            <span className="productSize">-{product.size}CL</span>
          )}
        </div>
        <div>{product.price}&euro;</div>
      </div>
      {product.note && (
        <Note className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
