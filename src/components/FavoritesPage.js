import React from "react";
import { useFavoritesContext } from "./contexts/FavoritesProvider";
import ProductLine from "./product/ProductLine";

function FavoritesPage(props) {
  const { favorites } = useFavoritesContext();

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
