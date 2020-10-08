import React from "react";
import styled from "@emotion/styled";
import { Favorite } from "@material-ui/icons";

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.primaryLight};
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

const StyledButton = styled.button`
  position: absolute;
  right: 2rem;
  color: white;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  &:hover {
    color: red;
    transition: color 0.3s ease-in-out;
  }
`;

function Navbar(props) {
  const { setIsFavoritesInfoBoxOpen } = props;
  return (
    <StyledNavbar className={props.className}>
      <StyledName href="#">{props.name}</StyledName>
      <StyledButton onClick={() => setIsFavoritesInfoBoxOpen(true)}>
        <Favorite />
      </StyledButton>
    </StyledNavbar>
  );
}

export default Navbar;
