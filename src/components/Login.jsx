import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import MyButton from "./MyButton";
import MyInputField from "./MyInputField";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    console.log(email);

    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    } else if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    } else if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    } else {
      props.login(email, password);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div className="font" style={{ fontSize: 100, color: "#6bae8f" }}>
          Login
        </div>
      </div>
      <br />
      <MyInputField
        type="email"
        value={email}
        setValue={setEmail}
        error={emailError}
      ></MyInputField>
      <MyInputField
        type="password"
        value={password}
        setValue={setPassword}
        error={passwordError}
      ></MyInputField>
      <br />
      <MyButton onClick={onButtonClick} value={"Log in"}></MyButton>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func,
};

export default Login;
