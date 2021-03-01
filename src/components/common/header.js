import React from "react"
import { Nav, Navbar, Container, Jumbotron } from "react-bootstrap"

import "./header.css"

function compareUrl(urlarr1, urlarr2) {
    let count = 0;
    let maxlen = urlarr1.length > urlarr2.length ? urlarr2.length : urlarr1.length;
    let isSameLength = urlarr1.length === urlarr2.length;
    for (; count < maxlen; count++)
        if (urlarr1[count] !== urlarr2[count])
            break;
    return count === 0 ? -1 : count === maxlen && isSameLength ? 0 : count;
}

function tokenize(url) {
    let ret = url.split("/");
    ret.shift();
    return ret;
}

export default function HeaderBar( {navData, location, title, is404} ) {
    let subnavi;
    let locarray = tokenize(location);
    return (
        <>
            <Navbar variant="dark" expand="lg" id="navbar-top">
                <Container className="w-responsive">
                    <Navbar.Brand>
                        AS Web
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navi" />
                    <Navbar.Collapse id="navi" className="justify-content-end">
                        <Nav>
                            {navData.map( (entry) => {
                                let linkarray = tokenize(entry.link);
                                if (compareUrl(locarray, linkarray) >= 0 && entry.subnavi && !is404)
                                    subnavi = entry.subnavi;
                                return compareUrl(locarray, linkarray) >= 0 && !is404
                                        ? (<Nav.Link href={entry.link} active>{entry.title}</Nav.Link>)
                                        : (<Nav.Link href={entry.link}>{entry.title}</Nav.Link>)
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Jumbotron className="text-center">
                { title && <h1>{title}</h1> }
                { subnavi && 
                <Nav className="justify-content-center">
                    {subnavi.map( (entry) => {
                        let linkarray = tokenize(entry.link);
                        return compareUrl(locarray, linkarray) === 0
                            ? (<Nav.Link href={entry.link} active>{entry.title}</Nav.Link>)
                            : (<Nav.Link href={entry.link}>{entry.title}</Nav.Link>)
                    })}
                </Nav>
                }
            </Jumbotron>
        </>
    )
}
