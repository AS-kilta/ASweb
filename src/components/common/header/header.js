import React from "react"
import { Navbar, Container } from "react-bootstrap"

import Navi from "./navi/navi.js"

import "./header.css"

export default function HeaderBar({ context }) {
    return (
        <Navbar variant="dark" expand="lg" id="navbar-top">
            <Container className="w-responsive">
                <Navbar.Brand>AS Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="navi" />
                <Navbar.Collapse id="navi" className="justify-content-end">
                    <Navi slug={context.slug} lang={context.lang} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
