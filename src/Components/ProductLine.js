import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;
  color: ${(props) => (props.isActive ? "green" : "black")};
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
  color: ${(props) => (props.isFavorite ? "red" : "black")};
`;

const StyledSizeSpan = styled.span`
  font-size: 0.6em;
`;

const StyledProductNote = styled(Note)`
  padding: 0 1.5em 0.5em 0;
`;

function isActive(product) {}

/** @return {null} */
function ProductLine(props) {
  const { product, isFavorite, toggle } = props;
  product.price = (Math.round(product.price * 100) / 100).toFixed(2);
  if (!product.name) return null;
  return (
    <>
      <StyledProductLine onClick={toggle} isActive={isActive(product)}>
        <StyledProductName isFavorite={isFavorite}>
          {product.name}{" "}
          {product.size && <StyledSizeSpan>-{product.size}CL</StyledSizeSpan>}
        </StyledProductName>
        <StyledProductPrice>{product.price}&euro;</StyledProductPrice>
      </StyledProductLine>
      {product.note && (
        <StyledProductNote className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
