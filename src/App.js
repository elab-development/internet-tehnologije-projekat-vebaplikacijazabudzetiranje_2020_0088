import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Start from "./pages/Start";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Navbar } from "react-bootstrap";
import Register from "./components/Register";
import Contact from "./pages/Contact";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <h1>Budget app</h1>
      <NavBar username={"marta"} />

      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <Start
                // state={state}
                // setState={setState}
                username={username}
                email={email}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                // state={state}
                // setState={setState}
                setUsername={setUsername}
                setLoggedIn={setLoggedIn}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                // state={state}
                // setState={setState}
                setUsername={setUsername}
                setLoggedIn={setLoggedIn}
                setEmail={setEmail}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
