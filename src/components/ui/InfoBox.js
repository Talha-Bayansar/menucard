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
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
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
  const { isInfoBoxOpen, setIsInfoBoxOpen } = props;
  let icon = "x";
  return (
    <>
      <StyledOverlay
        isInfoBoxOpen={isInfoBoxOpen}
        onClick={() => setIsInfoBoxOpen(false)}
      />
      <StyledInfoBox visible={isInfoBoxOpen}>
        {props.children}
        <StyledButton
          onClick={() => {
            setIsInfoBoxOpen(!isInfoBoxOpen);
          }}
        >
          {icon}
        </StyledButton>
      </StyledInfoBox>
    </>
  );
}

export default InfoBox;
