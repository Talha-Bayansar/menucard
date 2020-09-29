import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;

  & div {
    flex: 1;
  }
`;

const StyledSizeSpan = styled.span`
  font-size: 0.6em;
`;

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
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
          {product.size && <StyledSizeSpan>-{product.size}CL</StyledSizeSpan>}
        </div>
        <div>{product.price}&euro;</div>
      </StyledProductLine>
      {product.note && (
        <StyledProductNote className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
