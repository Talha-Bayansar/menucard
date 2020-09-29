import React from "react";
import styled from "@emotion/styled";

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const StyledName = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;

function Navbar(props) {
  return (
    <StyledNavbar className={props.className}>
      <StyledName href="#">{props.name}</StyledName>
    </StyledNavbar>
  );
}

export default Navbar;
