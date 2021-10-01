import React , { Component } from "react";
import {Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar expand="lg" bg="light">
                    <Container>
                        <Navbar.Brand as={Link} to="/home" className="coloredText">
                            <img
                            src="/barbell.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                            alt="Gym Beginner Guide Logo"
                            />
                            Gym Beginner Gym
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/workout">Workout</Nav.Link> 
                                <Nav.Link as={Link} to="/nutrition">Nutrition</Nav.Link>                                                              
                                <Nav.Link as={Link} to="/gymnearby">Gym</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>                
            </div>
        )
    }
}

export default Header;