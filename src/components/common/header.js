import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"

import "./header.css"

const HeaderBar = () => (
    <Navbar variant="dark" expand="lg" id="navbar-top">
        <Container className="w-responsive">
            <Navbar.Brand>
                AS Web
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navi" />
            <Navbar.Collapse id="navi" className="justify-content-end">
                <Nav defaultActiveKey="/">
                    <Nav.Link href="/">Etusivu</Nav.Link>
                    <Nav.Link href="#foo">Kilta</Nav.Link>
                    <Nav.Link href="#bar">Yhteystiedot</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default HeaderBar
