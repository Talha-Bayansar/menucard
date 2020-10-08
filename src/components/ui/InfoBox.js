import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledInfoBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 0;
  border-radius: 1rem;
  padding: 2rem;
  width: 100vw;
  height: 90vh;
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
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: ${(props) => (props.isInfoBoxOpen ? "block" : "none")};
`;

function InfoBox(props) {
  const { isInfoBoxOpen, closeInfoBox } = props;
  let icon = "x";
  return (
    <>
      <StyledOverlay isInfoBoxOpen={isInfoBoxOpen} onClick={closeInfoBox} />
      <StyledInfoBox visible={isInfoBoxOpen}>
        {props.children}
        <StyledButton onClick={closeInfoBox}>{icon}</StyledButton>
      </StyledInfoBox>
    </>
  );
}

export default InfoBox;
