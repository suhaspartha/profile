import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function MyNavbar() {
  return (
    <Navbar className="sticky-top" bg="transparent" expand="lg">
      <Navbar.Toggle
        className="border-0 navbar-light"
        aria-controls="navbar-toggle"
      />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link
            activeClass="active"
            to="homepage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link border-bottom border-dark mr-1 mb-1 "
            style={{ cursor: "pointer", height: "2rem" }}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="aboutpage"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link border-bottom border-dark mr-1 mb-1 "
            style={{ cursor: "pointer", height: "2rem" }}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="contactpage"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link border-bottom border-dark mr-1 mb-1 "
            style={{ cursor: "pointer", height: "2rem" }}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;
