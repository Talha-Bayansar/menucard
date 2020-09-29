import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledProductLine = styled.div`
  display: flex;
  color: ${(props) => (props.isActive ? "green" : "black")};

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

function isActive() {}

/** @return {null} */
function ProductLine(props) {
  const { product } = props;
  product.price = (Math.round(product.price * 100) / 100).toFixed(2);
  if (!product.name) return null;
  return (
    <>
      <StyledProductLine isActive={isActive(product)}>
        <StyledProductName>
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
