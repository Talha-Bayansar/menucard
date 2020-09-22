import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductLine from "./ProductLine";
import Category from "./Category";

function App() {
  const PRODUCTS_DATA = [
    {
      name: "drank",
      products: [
        { name: "cola", price: 2 },
        { name: "water", price: 2 },
        { name: "bier", price: 2, size: 25 },
        { name: "wijn", price: 4 },
      ],
    },
    {
      name: "eten",
      note: "een klein hapje voor de snelle honger",
      products: [
        { name: "chips", price: 1, note: "paprika of zout" },
        { name: "olijven", price: 2, note: "mix zwart en groen" },
        { name: "kaas", price: 4, note: "mix jonge en oude blokjes" },
        { name: "salami", price: 3 },
        { name: "hamburger", price: 4, note: "niet na 22:00" },
        { name: "pizza", price: 4, note: "niet na 22:00" },
      ],
    },
  ];

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
      {/* {PRODUCTS_DATA.map((c) => (
        <div>
          <h2>{c.name}</h2>
          {c.products.map((p) => (
            <ProductLine key={p.name} product={p} />
          ))}
        </div>
      ))} */}
    </div>
  );
}

export default App;
