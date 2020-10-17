import React, { createContext, useMemo, useContext, useCallback } from "react";
import { useLocalStorage } from "../../utilities/localstorage";
import { FLAT_PRODUCT_DATA } from "../../utilities/flat_product_data";

const FavoritesContext = createContext();

const idToProduct = (array) => {
  return array.map((id) => FLAT_PRODUCT_DATA.find((p) => id === p.id));
};

const productToId = (array) => {
  return array.map((p) => p.id);
};

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useLocalStorage(
    "favorites",
    [],
    idToProduct,
    productToId
  );

  const isFavorite = useCallback(
    (product) => {
      return product && favorites.find((f) => f.id === product.id);
    },
    [favorites]
  );

  const toggleProductIsFavorite = useCallback(
    (product) => {
      let newArray = favorites;
      if (isFavorite(product)) {
        newArray = newArray.filter((e) => e.id !== product.id);
      } else {
        newArray = [...favorites, product];
      }
      setFavorites(newArray);
    },
    [favorites, isFavorite, setFavorites]
  );

  const api = useMemo(
    () => ({
      favorites,
      isFavorite,
      toggleProductIsFavorite,
    }),
    [favorites, isFavorite, toggleProductIsFavorite]
  );
  return (
    <FavoritesContext.Provider value={api}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => useContext(FavoritesContext);
