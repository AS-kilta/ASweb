import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"

import "./header.css"

export default function HeaderBar( {navData, location} ) {
    return (
        <Navbar variant="dark" expand="lg" id="navbar-top">
            <Container className="w-responsive">
                <Navbar.Brand>
                    AS Web
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navi" />
                <Navbar.Collapse id="navi" className="justify-content-end">
                    <Nav>
                        {navData.map( (entry) => {
                            return (location.startsWith(entry.link) && entry.link !== "/")
                                || (location === "/" && entry.link === "/")
                                    ? (<Nav.Link href={entry.link} active>{entry.title}</Nav.Link>)
                                    : (<Nav.Link href={entry.link}>{entry.title}</Nav.Link>)
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
