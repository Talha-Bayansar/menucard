import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import Category from "./components/Category";
import { PRODUCTS_DATA } from "./data/products_data";
import Subcategory from "./components/Subcategory";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import ProductLine from "./components/ProductLine";
import TestStuff from "./components/TestStuff";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function App() {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (product) => {
    return favorites.find((f) => f.id === product.id);
  };

  const toggleProductIsFavorite = (product) => {
    let newArray = favorites;
    if (isFavorite(product)) {
      newArray = newArray.filter((e) => e.id !== product.id);
    } else {
      newArray = [...favorites, product];
    }
    setFavorites(newArray);
  };

  return (
    <StyledApp className="app">
      <Navbar name="Menu" />
      <TestStuff
        toggleProductIsFavorite={toggleProductIsFavorite}
        setFavorites={setFavorites}
      />
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
