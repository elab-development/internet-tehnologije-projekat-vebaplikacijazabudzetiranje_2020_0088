import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Start from "./pages/Start";
import Login from "./components/Login";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Register from "./components/Register";
import Contact from "./pages/Contact";
import Account from "./pages/Account";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [useriZaLogovanje, setUseriZaLogovanje] = useState([
    {
      email: "marta@gmail.com",
      password: "Marta123",
    },
    {
      email: "marko@gmail.com",
      password: "Marko123",
    },
  ]);

  const login = (email, password) => {
    let user = useriZaLogovanje.find((user) => user.email === email);
    if (user && user.password === password) {
      window.sessionStorage.setItem("email", email);
      window.sessionStorage.setItem("username", user.username);
      window.location.href = "/home";
    } else {
      alert("Pogresni podaci za logovanje");
      window.location.href = "/login";
    }
  };

  const logout = () => {
    console.log("logout");
    setLoggedIn(false);
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("username");
    window.location.href = "/";
  };
  const register = (email, password) => {
    useriZaLogovanje.push({ email: email, password: password });

    login(email, password);
  };

  return (
    <div className="App">
      <NavBar
        logout={logout}
        username={
          window.sessionStorage.getItem("email") !== null
            ? window.sessionStorage.getItem("email")
            : "You are not logged in."
        }
      />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route
              path="/register"
              element={<Register register={register} />}
            />
            <Route
              path="/account"
              element={
                <Account email={window.sessionStorage.getItem("email")} />
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
