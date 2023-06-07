import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./DevImpactLogo.png";
import Image from "react-bootstrap/Image";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image className="logo" src={logo} alt="Dev Impact Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="For Developers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/experts">Mentors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/non-experts">Mentees</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/for-non-profits">For Non Profits</Nav.Link>
            <Nav.Link href="/how-it-works">How it Works</Nav.Link>
            <Nav.Link href="/our-impact">Our Impact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
