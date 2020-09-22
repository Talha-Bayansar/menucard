import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductLine from "./ProductLine";

function App() {
  const PRODUCTS_DATA = [
    {
      name: "drank",
      products: [
        { name: "cola", price: 2 },
        { name: "water", price: 2 },
        { name: "bier", price: 2 },
        { name: "wijn", price: 4 },
      ],
    },
    {
      name: "eten",
      products: [
        { name: "chips", price: 1 },
        { name: "olijven", price: 2 },
        { name: "kaas", price: 4 },
        { name: "salami", price: 3 },
        { name: "hamburger", price: 4 },
        { name: "pizza", price: 4 },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Menu</h1>
      {PRODUCTS_DATA.map((c) => (
        <div>
          <h2>{c.name}</h2>
          {c.products.map((p) => (
            <ProductLine key={p.name} product={p} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
