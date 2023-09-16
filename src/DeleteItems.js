import React from "react";

export const DeleteItems = (props) => {
  return (
    <>
      <span
        className="cross"
        onClick={() => {
          props.onDel(props.id);
        }}
      >
        X
      </span>
      <span
        className="tick"
        onClick={() => {
          props.onEdit(props.id, props.text, props.texts);
        }}
      >
        {" "}
        ✓
      </span>
      <div className="display">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li>{props.text}</li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li>{props.texts}</li>
      </div>
    </>
  );
};
