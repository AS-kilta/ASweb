import React from "react"
import { Navbar, Container } from "react-bootstrap"
import "./footer.css"

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="mt-3 justify-content-center">
                <h1 id="partners-title">Partners</h1>
            </Container> 
        </Navbar>
    )
}
