import React, { useState } from "react";
import styled from "@emotion/styled";
import { Favorite, Menu } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

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
  z-index: 500;
`;

const StyledName = styled.span`
  color: white;

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

  &:hover {
    color: grey;
  }
`;

function Navbar(props) {
  const { PRODUCTS_DATA } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledNavbar className={props.className}>
      <Sidebar
        PRODUCTS_DATA={PRODUCTS_DATA}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <StyledMenu onClick={() => setIsActive(!isActive)} />
      <Link to="/">
        <StyledName>{props.name}</StyledName>
      </Link>
      <Link to="favorites">
        <StyledButton>
          <Favorite />
        </StyledButton>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
