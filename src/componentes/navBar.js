import React from "react";
import Nl from "./img/NL.jpg";
import "./style/NavBarStyle.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function NavBar() {
  const style= {
    textDecoration: "none" ,
    margin:10,
    textAlign: "center",
    color: "#000000",
    border:"solid black 2px" ,
    borderRadius:"10px",
    backgraundColor:"red"
  }
  const imageStyle={
    borderRadius:"10px"
  }
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">
              <img style={imageStyle}
                src={Nl}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link style={style} to="/Nosotros">Nosotros</Link>
              <Link style={style} to="/Frontend">FrontEnd</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
