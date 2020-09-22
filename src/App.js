import React from "react";
import "./App.css";
import ProductLine from "./Components/ProductLine";
import Category from "./Components/Category";
import { PRODUCTS_DATA } from "./data/products_data";

function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      {PRODUCTS_DATA.map((category) => (
        <Category category={category}>
          {category.products.map((product) => (
            <ProductLine product={product} />
          ))}
        </Category>
      ))}
    </div>
  );
}

export default App;
