import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavbarMy = () => {
    return (
        <Navbar className="ps-3" bg="dark" variant="dark">
            <Navbar.Brand href="/">ToDo</Navbar.Brand>
            <Nav className="ml-auto">
                <Link to="/login">
                    <Button variant="outline-info">Сменить аккаунт</Button>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarMy