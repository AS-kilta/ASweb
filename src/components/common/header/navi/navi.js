import React, { useState, useEffect } from "react"
import { Nav } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import "./navi.css"

export default function Navi({ slug, lang }) {
    const [linkToTranslation, setLinkToTranslation] = useState(null)
    let foreignLink
    let foreignLang = lang === "fi" ? "en" : "fi"
    let locarray = tokenize(slug)
    removeLangFromArr(locarray, lang)

    useEffect(() => {
        setLinkToTranslation(foreignLink)
    }, [foreignLink])

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
                <Nav>
                    {data.allNaviYaml.edges[0].node.content.map(entry => {
                        let linkarray = tokenize(entry.link[0][`${lang}`])
                        removeLangFromArr(linkarray, lang)
                        if (compareUrl(locarray, linkarray) === 0)
                            foreignLink = entry.link[0][`${foreignLang}`]
                        if (entry.subnavi)
                            return (
                                <li className="dropdown">
                                    {compareUrl(locarray, linkarray) >= 0 ? (
                                        <a
                                            className="nav-link dropdown-toggle active"
                                            href={entry.link[0][`${lang}`]}
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {entry.title[0][`${lang}`]}
                                        </a>
                                        ) : (
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href={entry.link[0][`${lang}`]}
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {entry.title[0][`${lang}`]}
                                        </a>
                                    )}
                                    <div className="dropdown-menu">
                                        {entry.subnavi.map(entry => {
                                            let linkarray = tokenize(entry.link[0][`${lang}`])
                                            removeLangFromArr(linkarray, lang)
                                            if (compareUrl(locarray, linkarray) === 0)
                                                foreignLink = entry.link[0][`${foreignLang}`]
                                            return compareUrl(locarray, linkarray) === 0 ? (
                                                <a
                                                    className="dropdown-item active"
                                                    href={entry.link[0][`${lang}`]}
                                                >
                                                    {entry.title[0][`${lang}`]}
                                                </a>
                                            ) : (
                                                <a
                                                    className="dropdown-item"
                                                    href={entry.link[0][`${lang}`]}
                                                >
                                                    {entry.title[0][`${lang}`]}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </li>
                            )
                        else
                            return compareUrl(locarray, linkarray) >= 0 ? (
                                <Nav.Link href={entry.link[0][`${lang}`]} active>
                                    {entry.title[0][`${lang}`]}
                                </Nav.Link>
                            ) : (
                                <Nav.Link href={entry.link[0][`${lang}`]}>
                                    {entry.title[0][`${lang}`]}
                                </Nav.Link>
                            )
                    })}
                    {lang === "fi" ? (
                        <Nav.Link href={linkToTranslation || "/en"}>
                            In English
                        </Nav.Link>
                        ) : (
                        <Nav.Link href={linkToTranslation || "/"}>Suomeksi</Nav.Link>
                    )}
                </Nav>
            )}
        />
    )
}
