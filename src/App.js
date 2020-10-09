import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import { PRODUCTS_DATA } from "./data/products_data";
import Navbar from "./components/product/Navbar";
import styled from "@emotion/styled";
import MenuCardPage from "./components/product/MenuCardPage";
import FavoritesInfoBox from "./components/product/FavoritesInfoBox";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import ProductInfoBox from "./components/product/ProductInfoBox";


const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function App() {
  const [favorites, setFavorites] = useState([PRODUCTS_DATA[0].subcategories[0].products[0]]);
  const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

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
          favorites={favorites}
          isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
          setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
          setActiveProduct={setActiveProduct}
        />
        <ProductInfoBox activeProduct={activeProduct} isInfoBoxOpen={activeProduct!=null} closeInfoBox={() => setActiveProduct(null)} />
        <MenuCardPage
          PRODUCTS_DATA={PRODUCTS_DATA}
          toggleProductIsFavorite={toggleProductIsFavorite}
          setActiveProduct={setActiveProduct}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
