import React, { useState } from "react";

const useLoggedIn = () => {
  const [isLogged, setIsLogged] = useState(
    window.sessionStorage.getItem("email") !== null
  );

  return isLogged;
};

export default useLoggedIn;
