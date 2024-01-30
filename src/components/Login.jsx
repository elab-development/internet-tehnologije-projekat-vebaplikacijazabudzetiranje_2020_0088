import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import NekoPolje from "./NekoPolje";
import PropTypes from "prop-types";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    console.log(email);

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

      navigate("/home");


    // Authentication calls will be made here...
  };

  return (
      <div className={"mainContainer"}>
          <div className={"titleContainer"}>
              <div>Login</div>
          </div>

          <br/>

          <br/>
          <div className={"inputContainer mb-2"}>
              <input
                  type="email"
                  value={email}
                  placeholder="Enter your email here"
                  onChange={(ev) => setEmail(ev.target.value)}
                  className={"inputBox"}
              />
              <label className="errorLabel">{emailError}</label>
          </div>
          <div className={"inputContainer"}>
              <input
                  type="password"
                  value={password}
                  placeholder="Enter your password here"
                  onChange={(ev) => setPassword(ev.target.value)}
                  className={"inputBox"}
              />
              <label className="errorLabel">{passwordError}</label>
          </div>
          <br/>
          <div className={"inputContainer"}>
              <input
                  className={"inputButton"}
                  type="button"
                  onClick={()=>{
                      props.login(email, password);
                  }}
                  value={"Log in"}
              />
          </div>
      </div>
  );
};

Login.propTypes = {
    login: PropTypes.func,
};

export default Login;
