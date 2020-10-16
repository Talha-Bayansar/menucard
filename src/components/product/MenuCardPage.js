import React from "react";
import ProductLine from "./ProductLine";
import Category from "./Category";
import Subcategory from "./Subcategory";

function MenuCardPage(props) {
  const { PRODUCTS_DATA, isFavorite } = props;
  return (
    <>
      {PRODUCTS_DATA.map((category) => (
        <Category key={category.name} category={category}>
          {category.subcategories.map((sc) => (
            <Subcategory key={sc.name} subCategory={sc}>
              {sc.products.map((p) => (
                <ProductLine
                  key={p.id}
                  product={p}
                  isFavorite={isFavorite(p)}
                />
              ))}
            </Subcategory>
          ))}
        </Category>
      ))}
    </>
  );
}

export default MenuCardPage;
