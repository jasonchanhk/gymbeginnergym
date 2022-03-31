import React , { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/Header.css"

class Header extends Component {

    render(){
        return(
            <div>
                <Navbar expand="lg" fixed="top" bg="white" class='shadow '>
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img
                            src={process.env.PUBLIC_URL + "/barbell.svg"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2 logo"
                            alt="Gym Beginner Guide Logo"
                            />
                            <span  className="coloredText align-top">Gym Beginner Gym</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse>
                            <Nav className="me-auto" style={ {color: "white" }}>
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