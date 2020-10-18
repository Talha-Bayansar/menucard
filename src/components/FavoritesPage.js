import React, { useEffect } from "react";
import { useActiveProductContext } from "./contexts/ActiveProductProvider";
import { useFavoritesContext } from "./contexts/FavoritesProvider";
import ProductLine from "./product/ProductLine";

function FavoritesPage(props) {
  const { favorites } = useFavoritesContext();

  const { setFlatProductList } = useActiveProductContext();

  useEffect(() => {
    setFlatProductList(favorites);
  }, setFlatProductList);

  return (
    <div>
      <h2>Je favorieten</h2>
      <div>
        {favorites.length !== 0
          ? favorites.map((f) => <ProductLine key={f.id} product={f} />)
          : "Je hebt nog geen favorieten."}
      </div>
    </div>
  );
}

export default FavoritesPage;
