import React from "react";
import { useFavoritesContext } from "./contexts/FavoritesProvider";
import InfoBox from "./ui/InfoBox";
import ProductLine from "./product/ProductLine";

function FavoritesPage(props) {
  const { isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen } = props;

  const { favorites } = useFavoritesContext();

  return (
    <InfoBox
      isInfoBoxOpen={isFavoritesInfoBoxOpen}
      closeInfoBox={() => setIsFavoritesInfoBoxOpen(false)}
    >
      <div>
        <h2>Je favorieten</h2>
        <div>
          {favorites.length !== 0
            ? favorites.map((f) => <ProductLine key={f.id} product={f} />)
            : "Je hebt nog geen favorieten."}
        </div>
      </div>
    </InfoBox>
  );
}

export default FavoritesPage;
