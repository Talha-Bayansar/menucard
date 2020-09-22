export const PRODUCTS_DATA = [
  {
    name: "drank",
    subcategories: [
      {
        name: "fris",
        products: [
          { id: 0, name: "cola", price: 2 },
          { id: 1, name: "water", price: 2 },
        ],
      },
      {
        name: "alcohol",
        products: [
          { id: 2, name: "bier", price: 2, size: 25 },
          { id: 3, name: "bier", price: 2.4, size: 33 },
          { id: 4, name: "wijn", price: 4 },
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
          { id: 5, name: "chips", price: 1, note: "paprika of zout" },
          { id: 6, name: "olijven", price: 2, note: "mix zwart en groen" },
          { id: 7, name: "kaas", price: 4, note: "mix jonge en oude blokjes" },
          { id: 8, name: "salami", price: 3 },
        ],
      },
      {
        name: "warm",
        note: "niet na 22:00",
        products: [
          { id: 9, name: "hamburger", price: 4 },
          { id: 10, name: "pizza", price: 4 },
        ],
      },
    ],
  },
];
