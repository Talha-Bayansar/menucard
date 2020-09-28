import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;

  & div {
    flex: 1;
  }
`;

/** @return {null} */
function ProductLine(props) {
  const { product } = props;
  if (!product.name) return null;
  return (
    <>
      <StyledProductLine className="productLine">
        <div>
          {product.name}{" "}
          {product.size && (
            <span className="productSize">-{product.size}CL</span>
          )}
        </div>
        <div>{product.price}&euro;</div>
      </StyledProductLine>
      {product.note && (
        <Note className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
