import React from "react";
import InfoBox from "../ui/InfoBox";

function FavoritesInfoBox(props) {
  const { isFavoritesInfoBoxOpen, setFavoritesIsInfoBoxOpen } = props;

  return (
    <InfoBox
      isInfoBoxOpen={isFavoritesInfoBoxOpen}
      setIsInfoBoxOpen={setFavoritesIsInfoBoxOpen}
    >
      {props.children}
    </InfoBox>
  );
}

export default FavoritesInfoBox;
