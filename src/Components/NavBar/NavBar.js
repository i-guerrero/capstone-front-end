import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./DevImpactLogo.png";
import Image from "react-bootstrap/Image";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      className="navbar px-4 d-flex justify-content-between shadow"
      variant="dark"
      expand="lg"
    >
      <Link to="/">
        <Image className="logo" src={logo} alt="Dev Impact Logo" />
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
        <Nav className="me-auto align-items-center gap-3">
          <NavDropdown
            className="navbar-link"
            title="For Developers"
            id="basic-nav-dropdown"
          >
            <Link
              to="/experts"
              className="px-3 text-decoration-none text-dark fw-normal"
            >
              Mentors
            </Link>

            <NavDropdown.Divider />

            <Link
              to="/non-experts"
              className="px-3 text-decoration-none text-dark fw-normal"
            >
              Mentees
            </Link>
          </NavDropdown>

          <Link className="navbar-link" to="/for-non-profits">
            For Non Profits
          </Link>

          <Link className="navbar-link" to="/how-it-works">
            How it Works
          </Link>

          <Link className="navbar-link" to="/our-impact">
            Our Impact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
