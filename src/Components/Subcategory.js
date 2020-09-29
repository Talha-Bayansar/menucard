import React from "react";
import Note from "./Note";

function Subcategory(props) {
  const { subCategory } = props;
  return (
    <div>
      <h2>{subCategory.name}</h2>
      <Note className="note categoryNote" note={subCategory.note} />
      {props.children}
    </div>
  );
}

export default Subcategory;
