import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Start = (props) => {
  const [statee, setStatee] = useState(0);
  const { loggedIn, email } = props;
  const navigate = useNavigate();
  const onButtonClick = () => {
    // You'll update this function later

    navigate("/login");
  };
  const onButtonSignUp = () => {
    // You'll update this function later
    navigate("/register");
    console.log("Sign up");
    setStatee(statee + 1);
    console.log(statee);
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonSignUp}
          value={"Sign up"}
        />
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />

        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Start;
