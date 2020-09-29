import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import Category from "./Components/Category";
import { PRODUCTS_DATA } from "./data/products_data";
import Subcategory from "./Components/Subcategory";
import Navbar from "./Components/Navbar";
import styled from "@emotion/styled";
import ProductLine from "./Components/ProductLine";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function App() {
  const favorites = [
    PRODUCTS_DATA[0].subcategories[0].products[0],
    PRODUCTS_DATA[0].subcategories[0].products[1],
  ];

  const isFavorite = (product) => {
    let bool = false;
    favorites.forEach((f) => {
      if (f.id === product.id) bool = true;
    });
    return bool;
  };

  const [counter, setCounter] = useState(0);

  return (
    <StyledApp className="app">
      <Navbar name="Menu" />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      {counter}
      {PRODUCTS_DATA.map((category) => (
        <Category key={category.name} category={category}>
          {category.subcategories.map((sc) => (
            <Subcategory key={sc.name} subCategory={sc}>
              {sc.products.map((p) => (
                <ProductLine
                  key={p.id}
                  product={p}
                  isFavorite={isFavorite(p)}
                />
              ))}
            </Subcategory>
          ))}
        </Category>
      ))}
    </StyledApp>
  );
}

export default App;
