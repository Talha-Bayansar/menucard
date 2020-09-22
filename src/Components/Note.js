import React from "react";

function Note(props) {
  return <div className={props.className}>{props.note}</div>;
}

export default Note;
