import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../StaticMedia/TheGuyLogo.png"

function MainNavBar()
{
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="light" className="bg-body-tertiary navbar-dark bg-body-tertiary">
            <Container>
                <Link className="navbar-brand" to="/"><img width="" height="48" src={logo} alt="navbar-logo" /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/Menu">Menu</Link>
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </Nav>
                <Nav >
                    <Link className="nav-link" to="/Cart">Cart</Link>
                    <Link className="nav-link" to="/Account">Account</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;