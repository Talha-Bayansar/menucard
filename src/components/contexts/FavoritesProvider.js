import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useCallback,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);

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
    [favorites, isFavorite]
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
