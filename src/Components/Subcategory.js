import React from "react";
import Note from "./Note";
import ProductLine from "./ProductLine";

function Subcategory(props) {
  const { subCategory } = props;
  return (
    <div>
      <h2>{subCategory.name}</h2>
      <Note className="note categorNote" note={subCategory.note} />
      {subCategory.products.map((p) => (
        <ProductLine key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Subcategory;
