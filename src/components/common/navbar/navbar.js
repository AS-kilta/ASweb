import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

import Subnavi from "./subnavi.js"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import * as style from "./navbar.module.scss"

export default function Navbar({ context }) {
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

    let locarray = tokenize(context.slug)
    removeLangFromArr(locarray, context.lang)

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
                <div id={style.navbarTop} className={ navExpanded ? style.expanded : "" }>
                    <div className={style.navi}>
                        <div className={style.navbarLogo}>
                            <Link to={ context.lang === "fi" ? "/" : "/en" }>
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
                                if (entry.title[0][`${context.lang}`] !== "" && entry.link[0][`${context.lang}`] !== "") {
                                    let linkarray = tokenize(entry.link[0][`${context.lang}`])
                                    removeLangFromArr(linkarray, context.lang)
                                    if (entry.subnavi)
                                        return (
                                            <Subnavi
                                                context={context}
                                                entry={entry}
                                                locarray={locarray}
                                                linkarray={linkarray}
                                                key={entry.title[0][`${context.lang}`] + "-" + entry.link[0][`${context.lang}`]}
                                            />
                                        )
                                    else {
                                        let isLocal = entry.link[0][`${context.lang}`].startsWith("/")
                                        return (
                                            <div 
                                                className={compareUrl(locarray, linkarray) >= 0
                                                    ? `${style.naviItem} ${style.active}`
                                                    : `${style.naviItem}`}
                                                key={entry.title[0][`${context.lang}`] + "-" + entry.link[0][`${context.lang}`]}
                                            >
                                                { isLocal ? (
                                                    <Link to={entry.link[0][`${context.lang}`]}>
                                                        {entry.title[0][`${context.lang}`]}
                                                    </Link>
                                                ) : (
                                                    <a href={entry.link[0][`${context.lang}`]}>
                                                        {entry.title[0][`${context.lang}`]}
                                                    </a>
                                                )}
                                            </div>
                                        )
                                    }
                                } else return (null)
                            })}
                            <div className={style.naviItem}>
                                {context.lang === "fi" ? (
                                    <Link to={context.translation || "/en"}>
                                        In English
                                    </Link>
                                    ) : (
                                    <Link to={context.translation || "/"}>
                                        Suomeksi
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className={style.menuToggle} onClick={toggleNav}>
                            <FaBars />
                        </div>
                    </div>
                </div>
            )}
        />
    )
}
