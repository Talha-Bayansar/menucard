import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledInfoBox = styled.div`
  background-color: pink;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

function InfoBox(props) {
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(true);
  let icon = "+";
  if (isInfoBoxOpen) {
    icon = "x";
  } else {
    icon = "+";
  }
  return (
    <>
      <button>{icon}</button>
      <StyledInfoBox visible={isInfoBoxOpen}>{props.children}</StyledInfoBox>
    </>
  );
}

export default InfoBox;
