// import OneEvent from "src/components/OneEvent";
// import "./App.css";

import React, { useState } from "react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {};
  return (
    <div>
      {/* <OneEvent /> */}
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Dodaj dogadjaj"}
        />
      </div>
    </div>
  );
};

export default Home;
