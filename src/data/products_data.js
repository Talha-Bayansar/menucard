export const PRODUCTS_DATA = [
  {
    name: "drank",
    subcategories: [
      {
        name: "fris",
        products: [
          { name: "cola", price: 2 },
          { name: "water", price: 2 },
        ],
      },
      {
        name: "alcohol",
        products: [
          { name: "bier", price: 2, size: 25 },
          { name: "wijn", price: 4 },
        ],
      },
    ],
  },
  {
    name: "eten",
    note: "voor de snelle honger",
    subcategories: [
      {
        name: "hapjes",
        note: "deze kan je altijd bestellen",
        products: [
          { name: "chips", price: 1, note: "paprika of zout" },
          { name: "olijven", price: 2, note: "mix zwart en groen" },
          { name: "kaas", price: 4, note: "mix jonge en oude blokjes" },
          { name: "salami", price: 3 },
        ],
      },
      {
        name: "warm",
        note: "niet na 22:00",
        products: [
          { name: "hamburger", price: 4 },
          { name: "pizza", price: 4 },
        ],
      },
    ],
  },
];
