import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import firebase from 'firebase/app';
import {Button} from 'react-bootstrap/';
import {NavLink} from 'react-bootstrap';


const Topbar = () => {

    return (
        <div>

            <Navbar bg="outline-primary" variant="primary">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/Arms">Arms-Workout</NavLink>
                        <NavLink href="/Hip">Hip-Workout</NavLink>
                        <NavLink href="/Feet">Feet-Workout</NavLink>
                        <NavLink href="/Twelve">12 Standard-Workout</NavLink>
                        <NavLink href="/Cardiac">Cardiac Rehabilitation</NavLink>
                        <NavLink href="/Lung">Pulmonary Rehabilitation</NavLink>
                        {/* <NavLink href="/Note">Note</NavLink> */}
                    </Nav>

                        <Button variant="secondary">< button onClick={() => firebase.auth().signOut()}>Sign Out</button></Button>

                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default Topbar;