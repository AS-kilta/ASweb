import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"

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
                            <a href={ context.lang === "fi" ? "/" : "/en" }>
                                <StaticImage
                                    src="../../../images/aswhite.png"
                                    alt="Aivan Sama"
                                    layout="constrained"
                                    width={40}
                                    height={29}
                                />
                            </a>
                        </div>
                        <div
                            id={style.navbarCollapse}
                            className={ navExpanded ? style.show : "" }
                            onClick={ () => hideNav() }
                        >
                            {data.allNaviYaml.edges[0].node.content.map(entry => {
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
                                else
                                    return (
                                        <div 
                                            className={compareUrl(locarray, linkarray) >= 0
                                                ? `${style.naviItem} ${style.active}`
                                                : `${style.naviItem}`}
                                            key={entry.title[0][`${context.lang}`] + "-" + entry.link[0][`${context.lang}`]}
                                        >
                                            <a href={entry.link[0][`${context.lang}`]}>
                                                {entry.title[0][`${context.lang}`]}
                                            </a>
                                        </div>
                                    )
                            })}
                            <div className={style.naviItem}>
                                {context.lang === "fi" ? (
                                    <a href={context.translation || "/en"}>
                                        In English
                                    </a>
                                    ) : (
                                    <a href={context.translation || "/"}>
                                        Suomeksi
                                    </a>
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
