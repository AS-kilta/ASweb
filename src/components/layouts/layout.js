import React from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby" 

import HeaderBar from "../common/header.js"
import Footer from "../common/footer.js"

import "./layout.css"

export default function Layout( {context, title, children} ) {
    return (
        <StaticQuery
            query={graphql`
                query getNaviData {
                    allNaviYaml {
                        edges {
                            node {
                                content {
                                    title {
                                        fi
                                        en
                                    }
                                    link {
                                        fi
                                        en
                                    }
                                    subnavi {
                                        title {
                                            fi
                                            en
                                        }
                                        link {
                                            fi
                                            en
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Container className="p-0" id="container" fluid>
                <Row className="m-0" id="header-row">
                    <Col className="p-0">
                        <HeaderBar data={data.allNaviYaml.edges[0].node.content} slug={context.slug} lang={context.langKey} />
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
