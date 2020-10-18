import React, { useEffect } from "react";
import ProductLine from "./ProductLine";
import Category from "./Category";
import Subcategory from "./Subcategory";
import { useFavoritesContext } from "../contexts/FavoritesProvider";
import { FLAT_PRODUCT_DATA } from "../../utilities/flat_product_data";
import { useActiveProductContext } from "../contexts/ActiveProductProvider";

function MenuCardPage(props) {
  const { PRODUCTS_DATA } = props;
  const { isFavorite } = useFavoritesContext();
  const { setFlatProductList } = useActiveProductContext();
  useEffect(() => {
    setFlatProductList(FLAT_PRODUCT_DATA);
  }, [setFlatProductList]);
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
