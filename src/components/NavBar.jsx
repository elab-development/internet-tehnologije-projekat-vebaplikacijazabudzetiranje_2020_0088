import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";

function NavBar({ username, logout }) {
  const isLogged = window.sessionStorage.getItem("email") !== null;

  return (
    <Navbar expand="lg" className="bg-success-subtle">
      <Container>
        {isLogged ? null : <Navbar.Brand href="/">BudgetApp</Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLogged && <Nav.Link href="/home">Home</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
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
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {isLogged && (
                <NavDropdown.Item href="#" onClick={logout}>
                  Log out
                </NavDropdown.Item>
              )}
            </NavDropdown>
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
