import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import { PRODUCTS_DATA } from "./data/products_data";
import Navbar from "./components/product/Navbar";
import styled from "@emotion/styled";
import ProductLine from "./components/product/ProductLine";
import MenuCardPage from "./components/product/MenuCardPage";
import FavoritesInfoBox from "./components/product/FavoritesInfoBox";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function App() {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);

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
    <ThemeProvider theme={theme}>
      <StyledApp className="app">
        <Navbar
          setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
          name="Menu"
        />
        <FavoritesInfoBox
          isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
          setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
        >
          <div>
            <h2>Je favorieten</h2>
            <div>
              {favorites.length !== 0
                ? favorites.map((f) => <ProductLine key={f.id} product={f} />)
                : "Je hebt nog geen favorieten."}
            </div>
          </div>
        </FavoritesInfoBox>
        <MenuCardPage
          PRODUCTS_DATA={PRODUCTS_DATA}
          toggleProductIsFavorite={toggleProductIsFavorite}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
