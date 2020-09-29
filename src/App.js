import React from "react";
import "normalize.css";
import "./App.css";
import Category from "./Components/Category";
import { PRODUCTS_DATA } from "./data/products_data";
import Subcategory from "./Components/Subcategory";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar name="Menu" />
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
