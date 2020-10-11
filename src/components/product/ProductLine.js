import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";
import { Favorite } from "@material-ui/icons";

const StyledProductLine = styled.div`
  display: flex;
  cursor: ${(props) => props.onClick ? "pointer" : "auto"};
  align-items: center;

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

const StyledFavorite = styled(Favorite)`
  color: ${props => props.theme.colors.red};
`;

/** @return {null} */
function ProductLine(props) {
  const { product, toggle, isFavorite } = props;
  if (!product.name) return null;
  return (
    <>
      <StyledProductLine onClick={toggle}>
        <StyledProductName>
          {product.name}{" "}
          {product.size && <StyledSizeSpan>-{product.size}CL</StyledSizeSpan>}
          {product.percentage && <StyledSizeSpan> {product.percentage}%</StyledSizeSpan>}
        </StyledProductName>
        <StyledProductPrice>
          {product.price.toFixed(2)}&euro;
        </StyledProductPrice>
        {isFavorite && <StyledFavorite/>}
      </StyledProductLine>
      {product.note && (
        <StyledProductNote className="note productNote" note={product.note} />
      )}
    </>
  );
}

export default ProductLine;
