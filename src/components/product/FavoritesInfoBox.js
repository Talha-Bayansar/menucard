import React from "react";
import InfoBox from "../ui/InfoBox";
import ProductLine from "./ProductLine";

function FavoritesInfoBox(props) {
  const { favorites, isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen, setActiveProduct } = props;

  return (
    <InfoBox
      isInfoBoxOpen={isFavoritesInfoBoxOpen}
      closeInfoBox={() => setIsFavoritesInfoBoxOpen(false)}
    >
      <div>
            <h2>Je favorieten</h2>
            <div>
              {favorites.length !== 0
                ? favorites.map((f) => <ProductLine key={f.id} product={f} toggle={() => setActiveProduct(f)} />)
                : "Je hebt nog geen favorieten."}
            </div>
          </div>
    </InfoBox>
  );
}

export default FavoritesInfoBox;
