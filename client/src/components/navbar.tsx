import React, {useContext} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Context} from "../index";

const NavbarMy = () => {
    const {store} = useContext(Context)
    return (
        <Navbar className="ps-3" bg="dark" variant="dark">
            <Navbar.Brand href="/">ToDo</Navbar.Brand>
            <Nav className="ml-auto">
                <Link to="/login">
                    <Button onClick={store.logout} variant="outline-info">Сменить аккаунт</Button>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarMy