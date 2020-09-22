import React from "react";
import "./App.css";
import ProductLine from "./Components/ProductLine";
import Category from "./Components/Category";
import { PRODUCTS_DATA } from "./data/products_data";
import Subcategory from "./Components/Subcategory";

function App() {
  return (
    <div className="app">
      <h1>Menu</h1>
      {PRODUCTS_DATA.map((category) => (
        <Category key={category.name} category={category}>
          {category.subcategories.map((sc) => (
            <Subcategory key={sc.name} subCategory={sc} />
          ))}
        </Category>
      ))}
    </div>
  );
}

export default App;
