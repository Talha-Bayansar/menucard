import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import Category from "./components/Category";
import { PRODUCTS_DATA } from "./data/products_data";
import Subcategory from "./components/Subcategory";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import ProductLine from "./components/ProductLine";
import InfoBox from "./components/InfoBox";

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
      <InfoBox>
        <h2>Je favorieten</h2>
        <div>
          {favorites.length !== 0
            ? favorites.map((f) => <ProductLine key={f.id} product={f} />)
            : "Je hebt nog geen favorieten."}
        </div>
      </InfoBox>
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
