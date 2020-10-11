import React from 'react'
import ProductLine from "./ProductLine";
import InfoBox from "../ui/InfoBox";
import styled from "@emotion/styled";
import { Favorite } from "@material-ui/icons";

const StyledButton = styled.button`
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  border: none;
  color: ${props => props.isFavorite ? props.theme.colors.red : props.theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);

  &:hover{
    color: ${(props) => props.theme.colors.red};
    transition: color 0.3s ease-in-out;
  }
`;

const StyledDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function ProductInfoBox(props) {
    const {isInfoBoxOpen, closeInfoBox, activeProduct, toggleProductIsFavorite, isFavorite} = props;
    return (
        <>
        <InfoBox isInfoBoxOpen={isInfoBoxOpen} closeInfoBox={closeInfoBox} >
          <h2>Info Box</h2>
          {activeProduct ? <ProductLine product={activeProduct} /> : "null"}
          {activeProduct ? <p>{activeProduct.info}</p> : null}
          <StyledDivButtons>
            <StyledButton isFavorite={isFavorite(activeProduct)} onClick={() => toggleProductIsFavorite(activeProduct)}><Favorite/></StyledButton>
          </StyledDivButtons>
        </InfoBox>
        </>
    )
}

export default ProductInfoBox
