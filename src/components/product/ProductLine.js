import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;
  cursor: pointer;

  & div {
    flex: 2;
  }
`;

const StyledProductPrice = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledProductName = styled.div`
  flex: 6;
`;

const StyledSizeSpan = styled.span`
  font-size: 0.6em;
`;

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
`;

/** @return {null} */
function ProductLine(props) {
  const { product, toggle } = props;
  if (!product.name) return null;
  return (
    <>
      <StyledProductLine onClick={toggle}>
        <StyledProductName>
          {product.name}{" "}
          {product.size && <StyledSizeSpan>-{product.size}CL</StyledSizeSpan>}
        </StyledProductName>
        <StyledProductPrice>
          {product.price.toFixed(2)}&euro;
        </StyledProductPrice>
      </StyledProductLine>
      {product.note && (
        <StyledProductNote className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
