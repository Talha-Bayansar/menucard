import React from 'react'
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: ${props => props.visible ? "flex" : "none"};
    background-color: black;
    width: 50vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    & a {
        text-decoration: none;
        color: white;
        margin-top: 3rem;
    }

    & a:hover{
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

    &:hover{
        color: grey;
    }
`;

function Sidebar(props) {

    const {isActive, setIsActive} = props;

    return (
        <StyledSidebar visible={isActive}>
            <StyledButton onClick={() => setIsActive(!isActive)}>x</StyledButton>
            <a href="#">category1</a>
            <a href="#">category2</a>
            <a href="#">category3</a>
        </StyledSidebar>
    )
}

export default Sidebar
