import React, { createContext, useMemo, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const api = useMemo(
    () => ({
      favorites,
      setFavorites,
    }),
    [favorites, setFavorites]
  );
  return (
    <FavoritesContext.Provider value={api}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => useContext(FavoritesContext);
