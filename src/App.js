import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductLine from "./ProductLine";

function App() {
  const PRODUCTS_DATA = [
    { name: "cola", price: 2 },
    { name: "water", price: 2 },
    { name: "bier", price: 2 },
    { name: "wijn", price: 4 },
  ];

  return (
    <div className="App">
      <h1>Menu</h1>
      <ProductLine product={PRODUCTS_DATA[0]} />
      <ProductLine product={PRODUCTS_DATA[1]} />
      <ProductLine product={PRODUCTS_DATA[2]} />
      <ProductLine product={PRODUCTS_DATA[3]} />
    </div>
  );
}

export default App;
