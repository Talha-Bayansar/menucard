import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import { PRODUCTS_DATA } from "./data/products_data";
import Navbar from "./components/product/Navbar";
import styled from "@emotion/styled";
import MenuCardPage from "./components/product/MenuCardPage";
import FavoritesPage from "./components/FavoritesPage";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import ProductInfoBox from "./components/product/ProductInfoBox";
import { MessageProvider } from "./components/contexts/MessageProvider";
import { ActiveProductProvider } from "./components/contexts/ActiveProductProvider";
import { Message } from "./components/ui/Message";
import { FavoritesProvider } from "./components/contexts/FavoritesProvider";
import { Switch, Route, HashRouter } from "react-router-dom";
import TablePage from "./components/TablePage";
import { OrderListProvider } from "./components/contexts/OrderListProvider";
import OrderListPage from "./components/OrderListPage";

const StyledApp = styled.div`
  padding: 7rem 2rem;
`;

function ProvidedApp() {
  const [isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen] = useState(false);

  return (
    <HashRouter basename="/">
      <StyledApp className="app">
        <Message />
        <Navbar
          setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
          name="Menu"
          PRODUCTS_DATA={PRODUCTS_DATA}
        />

        <Switch>
          <Route path={["/table/:tableNumberFromUrl"]}>
            <TablePage />
          </Route>

          <Route path="/favorites">
            <FavoritesPage
              isFavoritesInfoBoxOpen={isFavoritesInfoBoxOpen}
              setIsFavoritesInfoBoxOpen={setIsFavoritesInfoBoxOpen}
            />
          </Route>

          <Route path={["/ordered"]}>
            <OrderListPage />
          </Route>

          <Route path={["/", "/menucard", "/menu"]}>
            <MenuCardPage PRODUCTS_DATA={PRODUCTS_DATA} />
          </Route>
        </Switch>
        <ProductInfoBox />
      </StyledApp>
    </HashRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        <ActiveProductProvider>
          <FavoritesProvider>
            <OrderListProvider>
              <ProvidedApp />
            </OrderListProvider>
          </FavoritesProvider>
        </ActiveProductProvider>
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App;
