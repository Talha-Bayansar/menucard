import React from "react";

function Category(props) {
  const { category } = props;
  return (
    <div>
      <h2>{category.name}</h2>
      {category.note && (
        <div className="note categoryNote">{category.note}</div>
      )}
      {props.children}
    </div>
  );
}

export default Category;
