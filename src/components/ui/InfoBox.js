import React from "react";
import styled from "@emotion/styled";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { useActiveProductContext } from "../contexts/ActiveProductProvider";
import { FLAT_PRODUCT_DATA } from "../../utilities/flat_product_data";

const StyledInfoBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 0;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  padding: 2rem;
  width: 100vw;
  height: 80vh;
  margin-top: 1rem;
  transform: ${(props) =>
    props.visible ? "translateY(0%)" : "translateY(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 3rem;
  top: 4.5rem;

  &:hover {
    color: red;
    transition: color 0.3s ease-in-out;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 10vh;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: ${(props) => (props.isInfoBoxOpen ? "block" : "none")};
`;

const StyledNavigateButtons = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 7.5%;

  & > * {
    cursor: pointer;
  }

  & > *:hover {
    color: grey;
  }
`;

function InfoBox(props) {
  const { isInfoBoxOpen, closeInfoBox } = props;
  const { activeProduct, setActiveProduct } = useActiveProductContext();
  const nextProduct = (activeProduct) => {
    let i = 0;
    FLAT_PRODUCT_DATA.forEach((p, index) => {
      if (p.id === activeProduct.id) i = index;
    });
    return FLAT_PRODUCT_DATA[i + 1];
  };

  const previousProduct = (activeProduct) => {
    let i = 0;
    FLAT_PRODUCT_DATA.forEach((p, index) => {
      if (p.id === activeProduct.id) i = index;
    });
    return FLAT_PRODUCT_DATA[i - 1];
  };

  let icon = "x";

  return (
    <>
      <StyledOverlay isInfoBoxOpen={isInfoBoxOpen} onClick={closeInfoBox} />
      <StyledInfoBox visible={isInfoBoxOpen}>
        <StyledNavigateButtons>
          <NavigateBefore
            onClick={() => setActiveProduct(previousProduct(activeProduct))}
          />
          <NavigateNext
            onClick={() => setActiveProduct(nextProduct(activeProduct))}
          />
        </StyledNavigateButtons>
        <StyledButton onClick={closeInfoBox}>{icon}</StyledButton>
        {props.children}
      </StyledInfoBox>
    </>
  );
}

export default InfoBox;
