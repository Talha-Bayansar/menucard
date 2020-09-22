import React from "react";

function Category(props) {
  const { category } = props;
  return (
    <div>
      <h2>{category}</h2>
      {props.children}
    </div>
  );
}

export default Category;
