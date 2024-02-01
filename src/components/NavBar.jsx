import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import loggo from "./loggo.jpeg";
import { NavbarBrand } from "react-bootstrap";
import "../App.css";
import useLoggedIn from "../hooks/useLoggedIn";

function NavBar({ username, logout, onButtonSearch }) {
  const isLogged = useLoggedIn();

  return (
    <Navbar expand="lg" className={["bg-success-subtle"]}>
      <Container>
        <Container>
          {isLogged && (
            <NavbarBrand disabled href="">
              <span className="font">BudgetApp </span>
            </NavbarBrand>
          )}
          {isLogged ? null : <Navbar.Brand href="/">BudgetApp</Navbar.Brand>}
        </Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={(["me-auto"], ["font"])} style={{ width: "100%" }}>
            {isLogged && <Nav.Link href="/home">Home</Nav.Link>}

            <Nav.Link href="/about">About</Nav.Link>

            <Container>
              <NavDropdown
                disabled={!isLogged}
                title={username}
                id="basic-nav-dropdown"
              >
                {isLogged && (
                  <NavDropdown.Item href="/account">
                    Your account
                  </NavDropdown.Item>
                )}
                {isLogged && (
                  <NavDropdown.Item href="/contact">
                    Contact support
                  </NavDropdown.Item>
                )}

                <NavDropdown.Divider />
                {isLogged && (
                  <NavDropdown.Item href="#" onClick={logout}>
                    Log out
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Container>
            <Container>
              <Nav.Link disabled href="">
                <img
                  className="d-inline-block align-top"
                  src={loggo}
                  height={35}
                  width={55}
                  alt="logoimage"
                  style={{ borderRadius: "50px", justifyContent: "end" }}
                />
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func,
  username: PropTypes.string,
};

export default NavBar;
