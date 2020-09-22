import React from "react";
import Note from "./Note";

function Category(props) {
  const { category } = props;
  return (
    <div>
      <h2>{category.name}</h2>
      {category.note && (
        <Note className="note categroyNote" note={category.note} />
      )}
      {props.children}
    </div>
  );
}

export default Category;
