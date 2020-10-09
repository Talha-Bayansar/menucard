import React from 'react'
import ProductLine from "./ProductLine";
import InfoBox from "../ui/InfoBox";

function ProductInfoBox(props) {
    const {isInfoBoxOpen, closeInfoBox, activeProduct} = props;
    return (
        <>
        <InfoBox isInfoBoxOpen={isInfoBoxOpen} closeInfoBox={closeInfoBox} >
          <h2>Info Box</h2>
          {activeProduct ? <ProductLine product={activeProduct} /> : "null"}
          {activeProduct ? <p>{activeProduct.info}</p> : null}
        </InfoBox>
        </>
    )
}

export default ProductInfoBox
