import React from "react";
import ProductLine from "./ProductLine";
import InfoBox from "../ui/InfoBox";
import styled from "@emotion/styled";
import { Favorite, Chat } from "@material-ui/icons";
import { useMessageContext } from "../contexts/MessageProvider";
import { useActiveProductContext } from "../contexts/ActiveProductProvider";

const StyledButton = styled.button`
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  border: none;
  color: ${(props) =>
    props.isFavorite
      ? props.theme.colors.red
      : props.theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    color: ${(props) => props.theme.colors.red};
    transition: color 0.3s ease-in-out;
  }
`;

const StyledButtonMessage = styled.button`
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  border: none;
  color: ${(props) =>
    props.isFavorite
      ? props.theme.colors.red
      : props.theme.colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  margin-right: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.grey};
    transition: color 0.3s ease-in-out;
  }
`;

const StyledDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function ProductInfoBox(props) {
  const { setMessage } = useMessageContext();
  const { activeProduct, setActiveProduct } = useActiveProductContext();
  const { toggleProductIsFavorite, isFavorite } = props;
  return (
    <>
      <InfoBox
        isInfoBoxOpen={activeProduct !== null}
        closeInfoBox={() => setActiveProduct(null)}
      >
        <h2>Info Box</h2>
        {activeProduct && (
          <ProductLine product={activeProduct} isNotClickable={true} />
        )}
        {activeProduct ? <p>{activeProduct.info}</p> : null}
        <StyledDivButtons>
          <StyledButtonMessage
            onClick={() =>
              setMessage(`Dit is een message over ${activeProduct.name}!`)
            }
          >
            <Chat />
          </StyledButtonMessage>
          <StyledButton
            isFavorite={isFavorite(activeProduct)}
            onClick={() => toggleProductIsFavorite(activeProduct)}
          >
            <Favorite />
          </StyledButton>
        </StyledDivButtons>
      </InfoBox>
    </>
  );
}

export default ProductInfoBox;
