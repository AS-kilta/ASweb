import React, { useState, useEffect } from "react"
import { Nav, Navbar, Container } from "react-bootstrap"

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
    if (url.match(/\/$/))
        url = url.slice(0, -1);
    let ret = url.split("/");
    ret.shift();
    return ret;
}

function removeLangFromArr(arr, lang) {
    if (arr[0] === lang)
        arr.shift();
    if (arr.length === 0)
        arr[0] = "";
}

export default function HeaderBar( {data, slug, lang} ) {
    const [linkToTranslation, setLinkToTranslation] = useState(null);
    let foreignLink;
    let foreignLang = lang === "fi" ? "en" : "fi";
    let locarray = tokenize(slug);
    removeLangFromArr(locarray, lang);

    useEffect(() => {
        setLinkToTranslation(foreignLink);
        }, [foreignLink]);

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
                            {data.map( (entry) => {
                                let linkarray = tokenize(entry.link[0][`${lang}`]);
                                removeLangFromArr(linkarray, lang);
                                if (compareUrl(locarray, linkarray) === 0)
                                    foreignLink = entry.link[0][`${foreignLang}`];
                                if (entry.subnavi)
                                    return (
                                        <li className="dropdown">
                                            {compareUrl(locarray, linkarray) >= 0
                                                ? (<a className="nav-link dropdown-toggle active" href={entry.link[0][`${lang}`]} data-toggle="dropdown" aria-expanded="false">{entry.title[0][`${lang}`]}</a>)
                                                : (<a className="nav-link dropdown-toggle" href={entry.link[0][`${lang}`]} data-toggle="dropdown" aria-expanded="false">{entry.title[0][`${lang}`]}</a>)}
                                            <div className="dropdown-menu">
                                                { entry.subnavi.map( ( entry ) => {
                                                    let linkarray = tokenize(entry.link[0][`${lang}`]);
                                                    removeLangFromArr(linkarray, lang);
                                                    if (compareUrl(locarray, linkarray) === 0)
                                                        foreignLink = entry.link[0][`${foreignLang}`];
                                                    return compareUrl(locarray, linkarray) === 0
                                                        ? (<a className="dropdown-item active" href={entry.link[0][`${lang}`]}>{entry.title[0][`${lang}`]}</a>)
                                                        : (<a className="dropdown-item" href={entry.link[0][`${lang}`]}>{entry.title[0][`${lang}`]}</a>)
                                                }) }
                                            </div>
                                        </li>
                                    )
                                else
                                    return compareUrl(locarray, linkarray) >= 0
                                        ? (<Nav.Link href={entry.link[0][`${lang}`]} active>{entry.title[0][`${lang}`]}</Nav.Link>)
                                        : (<Nav.Link href={entry.link[0][`${lang}`]}>{entry.title[0][`${lang}`]}</Nav.Link>)
                            })}
                            { lang === "fi"
                                ? (<Nav.Link href={linkToTranslation || "/en"}>In English</Nav.Link>)
                                : (<Nav.Link href={linkToTranslation || "/"}>Suomeksi</Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
