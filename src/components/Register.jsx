import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ state }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  const onButtonClick = () => {
    // You'll update this function later...
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");
    navigate("/home");
    console.log(email);

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }
    if ("" === username) {
      setUsernameError("Please enter your username");
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

    // Authentication calls will be made here...
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Register</div>
      </div>

      <div className={"inputContainer"}>
        <input
          value={username}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{usernameError}</label>
      </div>

      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
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
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Register"}
        />
      </div>
    </div>
  );
};

export default Register;
