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
import { FavoritesProvider } from "./components/contexts/FavoritesProvider";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function ProvidedApp() {
  const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);

  return (
    <StyledApp className="app">
      <Message />
      <Navbar
        setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
        name="Menu"
        PRODUCTS_DATA={PRODUCTS_DATA}
      />
      <FavoritesInfoBox
        isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
        setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
      />
      <ProductInfoBox />
      <MenuCardPage PRODUCTS_DATA={PRODUCTS_DATA} />
    </StyledApp>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        <ActiveProductProvider>
          <FavoritesProvider>
            <ProvidedApp />
          </FavoritesProvider>
        </ActiveProductProvider>
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App;
