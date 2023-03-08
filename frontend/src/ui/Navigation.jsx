import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar sticky="top" />
                    <Navbar.Brand href="Home">Home</Navbar.Brand>
                    <img
                        alt="INSERT ALT HERE"
                        src="INSERT IMAGE HERE"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="Sign-up">Sign Up</Nav.Link>
                            <Nav.Link href="Sign-in">Sign In</Nav.Link>
                            <Nav.Link href="Browse">Browse</Nav.Link>
                            <Nav.Link href="Profile">Profile</Nav.Link>
                            <Nav.Link href="Messages">Messages</Nav.Link>
                            <Nav.Link href="Log-out">Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}