import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby" 

import HeaderBar from "../common/header.js"
import Footer from "../common/footer.js"

import "./layout.css"

export default function Layout( {location, children} ) {
    return (
        <StaticQuery
            query={graphql`
                query getNaviData {
                    allNaviYaml {
                        edges {
                            node {
                                content {
                                    link
                                    title
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Container className="p-0" id="container" fluid>
                <Row className="m-0" id="header-row">
                    <Col className="p-0"><HeaderBar navData={data.allNaviYaml.edges[0].node.content} location={location.pathname} /></Col>
                </Row>
                <Row className="m-0" id="content-row">
                    <Col className="p-0">
                        <Container className="p-5" id="content">
                            { children }
                        </Container>
                    </Col>
                </Row>
                <Row className="m-0" id="footer-row">
                    <Col className="p-0"><Footer /></Col>
                </Row>
            </Container>
            )}
        />
    )
}
