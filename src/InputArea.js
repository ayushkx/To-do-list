import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          return props.handleChange(event);
        }}
        type="text"
        value={props.inputText}
      />
      <button
        onClick={() => {
          return props.addItem();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
