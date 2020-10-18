import React from "react";
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  transform: ${(props) =>
    props.visible ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  background-color: black;
  width: 40vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  & a {
    text-decoration: none;
    color: white;
    margin-top: 3rem;
  }

  & a:hover {
    color: grey;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    color: grey;
  }
`;

function Sidebar(props) {
  const { isActive, setIsActive, PRODUCTS_DATA } = props;

  return (
    <StyledSidebar visible={isActive}>
      <StyledButton onClick={() => setIsActive(!isActive)}>x</StyledButton>
      {PRODUCTS_DATA.map((c) => (
        <a key={c.name} href="/">
          {c.name}
        </a>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
