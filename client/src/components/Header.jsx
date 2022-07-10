import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../pages/Form.css";

function Header() {
  return (
    <>

  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/create-player">Create Player</Nav.Link>
          <Nav.Link as={NavLink} to="/edit-player">Edit Player</Nav.Link>
          <Nav.Link as={NavLink} to="/search-player">Search Player</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
        
  </Navbar>

    </>
  );
}

export default Header;
