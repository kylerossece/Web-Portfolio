import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar className="nav-portfolio" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/projects" exact="true">
              Works
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" exact="true">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" exact="true">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
