import React from "react";
import "../App.css";

const MyInputField = ({ type, value, setValue, error }) => {
  return (
    <div className={"inputContainer mb-2"}>
      <input
        type={type}
        value={value}
        placeholder={`Enter your ${type} here`}
        onChange={(ev) => setValue(ev.target.value)}
        className={"inputBox"}
      ></input>
      <label className="errorLabel">{error}</label>
    </div>
  );
};

export default MyInputField;
