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
  const [counter, setCounter] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (product) => {
    let bool = false;
    favorites.forEach((f) => {
      if (f.id === product.id) bool = true;
    });
    return bool;
  };

  const toggleProductIsFavorite = (product) => {
    let newArray = favorites;
    if (isFavorite(product)) {
      newArray = newArray.filter((e) => e.id !== product.id);
    } else {
      newArray = [...favorites, product];
    }
    console.log(newArray);
    console.log(isFavorite(product));
    setFavorites(newArray);
  };

  return (
    <StyledApp className="app">
      <Navbar name="Menu" />
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
          toggleProductIsFavorite(PRODUCTS_DATA[0].subcategories[0].products[0])
        }
      >
        Toggle Favorite
      </button>
      {PRODUCTS_DATA.map((category) => (
        <Category key={category.name} category={category}>
          {category.subcategories.map((sc) => (
            <Subcategory key={sc.name} subCategory={sc}>
              {sc.products.map((p) => (
                <ProductLine
                  key={p.id}
                  product={p}
                  isFavorite={isFavorite(p)}
                  toggle={() => toggleProductIsFavorite(p)}
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
