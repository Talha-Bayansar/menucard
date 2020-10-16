import { PRODUCTS_DATA } from "../data/products_data";

let subcategories = [];
const subcategoriesArray = PRODUCTS_DATA.map((c) => c.subcategories);
for (let i = 0; i < subcategoriesArray.length; i++) {
  subcategories = subcategories.concat(subcategoriesArray[i]);
}

const products = subcategories.map((sc) => sc.products);
let allProducts = [];
products.forEach((p) => (allProducts = allProducts.concat(p)));

export const FLAT_PRODUCT_DATA = allProducts;
