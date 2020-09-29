import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  border-top: solid thin;
  padding-top: 16px;
`;

const StyledCategoryNote = styled(Note)`
  padding: 0 0 0.5rem 0;
  background-color: red;
`;

function Category(props) {
  const { category } = props;
  return (
    <div>
      <StyledH1>{category.name}</StyledH1>
      {category.note && (
        <StyledCategoryNote
          className="note categroyNote"
          note={category.note}
        />
      )}
      {props.children}
    </div>
  );
}

export default Category;
