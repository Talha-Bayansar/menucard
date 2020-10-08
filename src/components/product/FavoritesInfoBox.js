import React from "react";
import InfoBox from "../ui/InfoBox";

function FavoritesInfoBox(props) {
  const { isFavoritesInfoBoxOpen, setIsFavoritesInfoBoxOpen } = props;

  return (
    <InfoBox
      isInfoBoxOpen={isFavoritesInfoBoxOpen}
      closeInfoBox={() => setIsFavoritesInfoBoxOpen(false)}
    >
      {props.children}
    </InfoBox>
  );
}

export default FavoritesInfoBox;
