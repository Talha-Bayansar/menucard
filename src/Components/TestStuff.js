import React, { useState } from "react";
import { PRODUCTS_DATA } from "../data/products_data";
import styled from "@emotion/styled";

const StyledTestStuff = styled.div`
  background-color: grey;
  padding: 1rem;
  color: white;
`;

const StyledVisibility = styled.div`
  display: ${(props) => (props.visibility ? "block" : "none")};
`;

const StyledButtonOpen = styled.button`
  display: ${(props) => (!props.visibility ? "block" : "none")};
`;

const StyledButtonClose = styled.button`
  display: ${(props) => (props.visibility ? "block" : "none")};
`;

function TestStuff(props) {
  const [counter, setCounter] = useState(0);
  const { setFavorites, toggleProductIsFavorite } = props;

  const [visible, setVisible] = useState(true);

  return (
    <StyledTestStuff>
      <StyledButtonOpen
        visibility={visible}
        onClick={() => setVisible(!visible)}
      >
        TestStuff
      </StyledButtonOpen>
      <StyledButtonClose
        visibility={visible}
        onClick={() => setVisible(!visible)}
      >
        Close
      </StyledButtonClose>
      <StyledVisibility visibility={visible}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        {counter}
        <hr />
        <button
          onClick={() => {
            setFavorites([PRODUCTS_DATA[0].subcategories[0].products[0]]);
          }}
        >
          Favorite
        </button>
        <button
          onClick={() =>
            toggleProductIsFavorite(
              PRODUCTS_DATA[0].subcategories[0].products[0]
            )
          }
        >
          Toggle Favorite
        </button>
      </StyledVisibility>
    </StyledTestStuff>
  );
}

export default TestStuff;
