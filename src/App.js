import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Start from "./pages/Start";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Register from "./components/Register";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import axios from "axios";
import AccountAdmin from "./pages/AccountAdmin";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [useriZaLogovanje, setUseriZaLogovanje] = useState([]);

  const login = (email, password) => {
    const loginPodaci = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8000/api/login", loginPodaci)
      .then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          window.sessionStorage.setItem("token", response.data.access_token);
          window.sessionStorage.setItem("role", response.data.role);
          window.sessionStorage.setItem("id", response.data.id);
          window.sessionStorage.setItem("username", response.data.username);
          window.sessionStorage.setItem("email", response.data.email);

          setLoggedIn(true);
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.error("Došlo je do greške!", error);
        alert("Pogresni podaci za logovanje");
        window.location.href = "/login";
      });
  };

  const logout = () => {
    console.log("logout");
    setLoggedIn(false);
    window.sessionStorage.removeItem("email");
    window.sessionStorage.removeItem("username");
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("role");
    window.sessionStorage.removeItem("id");

    window.location.href = "/";
  };
  const register = (username, email, password) => {
    const loginPodaci = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8000/api/register", loginPodaci)
      .then((response) => {
        console.log(response.data);

        window.sessionStorage.setItem("token", response.data.access_token);
        window.sessionStorage.setItem("role", response.data.user.role);
        window.sessionStorage.setItem("id", response.data.user.id);
        window.sessionStorage.setItem("username", response.data.user.username);
        window.sessionStorage.setItem("email", response.data.user.email);

        setLoggedIn(true);
        window.location.href = "/home";
        sendWelcomeEmail();
      })
      .catch((error) => {
        console.error("Došlo je do greške!", error);
        alert("Pogresni podaci za logovanje");
        window.location.href = "/register";
      });
  };
  function sendWelcomeEmail() {
    axios
      .get("http://localhost:8000/api/send-email")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Greska prilikom slanja maila", error);
        window.location.href = "/register";
      });
  }

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
            <Route
              path="/accountAdmin"
              element={
                <AccountAdmin
                  email={window.sessionStorage.getItem("email")}
                ></AccountAdmin>
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
