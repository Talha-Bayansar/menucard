import React from "react";
import styled from "@emotion/styled";

const StyledNote = styled.div`
  color: #a21212;
  font-size: smaller;
`;

function Note(props) {
  const { note, className } = props;
  if (!note) return null;
  return <StyledNote className={className}>{note}</StyledNote>;
}

export default Note;
