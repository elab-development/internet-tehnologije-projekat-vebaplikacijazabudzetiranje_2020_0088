import "../App.css";
import React from "react";

const MyButton = ({ onClick, value }) => {
  return (
    <div className={"inputContainer"}>
      <input
        type="button"
        className={"inputButton"}
        onClick={onClick}
        value={value}
      ></input>
    </div>
  );
};

export default MyButton;
