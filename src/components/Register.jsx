import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MyButton from "./MyButton";
import MyInputField from "./MyInputField";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    setUsernameError("");

    console.log(email);

    if ("" === username) {
      setUsernameError("Please enter your username");
      return;
    }
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    props.register(email, password);
    navigate("/home");
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div className="font" style={{ fontSize: 80, color: "#6bae8f" }}>
          Register
        </div>
      </div>
      <br />
      <br />
      <MyInputField
        type="username"
        value={username}
        setValue={setUsername}
        error={usernameError}
      ></MyInputField>
      <br />
      <MyInputField
        type="email"
        value={email}
        setValue={setEmail}
        error={emailError}
      ></MyInputField>
      <br />
      <MyInputField
        type="password"
        value={password}
        setValue={setPassword}
        error={passwordError}
      ></MyInputField>
      <br />
      <MyButton onClick={onButtonClick} value={"Sign up"}></MyButton>
    </div>
  );
};
Register.propTypes = {
  register: PropTypes.func,
};

export default Register;
