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
import { MessageProvider } from "./components/contexts/MessageProvider";
import { ActiveProductProvider } from "./components/contexts/ActiveProductProvider";
import { Message } from "./components/ui/Message";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function ProvidedApp() {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);

  const isFavorite = (product) => {
    return product && favorites.find((f) => f.id === product.id);
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
      <Message />
      <Navbar
        setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
        name="Menu"
        PRODUCTS_DATA={PRODUCTS_DATA}
      />
      <FavoritesInfoBox
        favorites={favorites}
        isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
        setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
      />
      <ProductInfoBox
        isFavorite={isFavorite}
        toggleProductIsFavorite={toggleProductIsFavorite}
      />
      <MenuCardPage PRODUCTS_DATA={PRODUCTS_DATA} isFavorite={isFavorite} />
    </StyledApp>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        <ActiveProductProvider>
          <ProvidedApp />
        </ActiveProductProvider>
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App;
