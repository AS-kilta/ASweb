import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsList } from "react-icons/bs"

import Subnavi from "./subnavi.jsx"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import * as style from "./navbar.module.scss"

export default function Navbar({ pageContext }) {
    const [navExpanded, expandNav] = useState(false)

    const toggleNav = () => {
        navExpanded
            ? document.body.classList.remove(style.hideoverflow)
            : document.body.classList.add(style.hideoverflow)
        expandNav(!navExpanded)
    }

    const hideNav = () => {
        document.body.classList.remove(style.hideoverflow)
        expandNav(false)
    }

    let locarray = tokenize(pageContext.slug)
    removeLangFromArr(locarray, pageContext.lang)

    const data = useStaticQuery(graphql`
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
    `)

    return (
        <div id={style.navbarTop} className={ navExpanded ? style.expanded : "" }>
            <div className={style.navi}>
                <div className={style.navbarLogo}>
                    <Link to={ pageContext.lang === "fi" ? "/" : "/en" }>
                        <StaticImage
                            src="../../../images/aswhite.png"
                            alt="Aivan Sama"
                            layout="constrained"
                            width={40}
                            height={29}
                        />
                    </Link>
                </div>
                <div
                    id={style.navbarCollapse}
                    className={ navExpanded ? style.show : "" }
                    onClick={ () => hideNav() }
                >
                    {data.allNaviYaml.edges[0].node.content.map(entry => {
                        if (entry.title[0][`${pageContext.lang}`] && entry.link[0][`${pageContext.lang}`]) {
                            let linkarray = tokenize(entry.link[0][`${pageContext.lang}`])
                            removeLangFromArr(linkarray, pageContext.lang)
                            if (entry.subnavi)
                                return (
                                    <Subnavi
                                        pageContext={pageContext}
                                        entry={entry}
                                        locarray={locarray}
                                        linkarray={linkarray}
                                        key={entry.title[0][`${pageContext.lang}`] + "-" + entry.link[0][`${pageContext.lang}`]}
                                    />
                                )
                            else {
                                let isLocal = entry.link[0][`${pageContext.lang}`].startsWith("/")
                                return (
                                    <div 
                                        className={compareUrl(locarray, linkarray) >= 0
                                            ? `${style.naviItem} ${style.active}`
                                            : `${style.naviItem}`}
                                        key={entry.title[0][`${pageContext.lang}`] + "-" + entry.link[0][`${pageContext.lang}`]}
                                    >
                                        { isLocal ? (
                                            <Link to={entry.link[0][`${pageContext.lang}`]}>
                                                {entry.title[0][`${pageContext.lang}`]}
                                            </Link>
                                        ) : (
                                            <a href={entry.link[0][`${pageContext.lang}`]}>
                                                {entry.title[0][`${pageContext.lang}`]}
                                            </a>
                                        )}
                                    </div>
                                )
                            }
                        } else return (null)
                    })}
                    <div className={style.naviItem}>
                        {pageContext.lang === "fi" ? (
                            <Link to={pageContext.translation || `/en${pageContext.slug}`}>
                                In English
                            </Link>
                            ) : (
                            <Link to={pageContext.translation || pageContext.slug.substring(3)}>
                                Suomeksi
                            </Link>
                        )}
                    </div>
                </div>
                <div className={style.menuToggle} onClick={toggleNav}>
                    <BsList />
                </div>
            </div>
        </div>
    )
}
