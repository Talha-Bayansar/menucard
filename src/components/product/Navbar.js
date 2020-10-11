import React, { useState } from "react";
import styled from "@emotion/styled";
import { Favorite, Menu } from "@material-ui/icons";
import Sidebar from "./Sidebar";

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 1.5rem;
`;

const StyledName = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;

const StyledButton = styled.button`
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

const StyledMenu = styled(Menu)`
  justify-content: flex-start;
  cursor: pointer;

  &:hover{
    color: grey;
  }
`;

function Navbar(props) {
  const { setIsFavoritesInfoBoxOpen, PRODUCTS_DATA } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledNavbar className={props.className}>
      <Sidebar PRODUCTS_DATA={PRODUCTS_DATA} isActive={isActive} setIsActive={setIsActive} />
      <StyledMenu onClick={() => setIsActive(!isActive)} />
      <StyledName href="#">{props.name}</StyledName>
      <StyledButton onClick={() => setIsFavoritesInfoBoxOpen(true)}>
        <Favorite />
      </StyledButton>
    </StyledNavbar>
  );
}

export default Navbar;
