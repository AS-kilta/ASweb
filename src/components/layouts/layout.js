import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import HeaderBar from "../common/header/header.js"
import Footer from "../common/footer/footer.js"

import "./layout.css"

export default function Layout({ context, title, children }) {
    return (
        <Container className="p-0" id="container" fluid>
            <Row className="m-0" id="header-row">
                <Col className="p-0">
                    <HeaderBar context={context} />
                </Col>
            </Row>
            <Row className="m-0" id="title-row">
                <Col className="p-0">
                    <Jumbotron className="text-center">
                        {title && <h1>{title}</h1>}
                    </Jumbotron>
                </Col>
            </Row>
            <Row className="m-0" id="content-row">
                <Col className="p-0">
                    <Container className="p-5" id="content">
                        {children}
                    </Container>
                </Col>
            </Row>
            <Row className="m-0" id="footer-row">
                <Col className="p-0">
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}
