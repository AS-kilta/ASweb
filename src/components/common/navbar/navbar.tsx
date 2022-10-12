import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsList } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers"

import * as style from "./navbar.module.scss"

const SiteLogo: React.FC<{lang:string}> = ({ lang }) => {
    return (
        <div className={style.navbarLogo}>
            <Link to={ lang === "fi" ? "/" : "/en" }>
                <StaticImage
                    src="../../../images/aswhite.png"
                    alt="Aivan Sama"
                    layout="constrained"
                    width={40}
                    height={29}
                />
            </Link>
        </div>
    )
}

interface NaviItemProps {
    dropdown?: boolean,
    subnavi?: boolean,
    local?: boolean,
    active?: boolean,
    title: string,
    link: string,
    key?: string,
    children?: React.ReactNode
}

const NaviItem: React.FC<NaviItemProps> = ({ dropdown, subnavi, local, active, title, link, key, children }) => {
    return (
        <div 
            className={`${subnavi ? style.subnaviItem : style.naviItem}${active ? " " + style.active : ""}${dropdown ? " " + style.dropdown : ""}`}
            key={key}
        >
            {local ? (
                <Link to={link}>
                    {title}
                    {dropdown && <IoMdArrowDropdown />}
                </Link>
            ) : (
                <a href={link}>
                    {title}
                    {dropdown && <IoMdArrowDropdown />}
                </a>
            )}
            {children}
        </div>
    )
}

interface LangSwitcherProps {
    lang: string,
    slug: string,
    translation?: string
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, slug, translation }) => {
    let link, title: string
    if (lang === "fi") {
        link = `/en${slug}`
        title = "In English"
    } else {
        link = slug.substring(3)
        title = "Suomeksi"
    }
    return (
        <NaviItem
            local
            title={title}
            link={translation || link}
        />
    )
}

interface SubnaviProps {
    lang: string,
    entry: SubnaviData[],
    location: string[],
}

const Subnavi: React.FC<SubnaviProps> = ({ lang, entry, location }) => {
    return (
        <div className={style.subnavi}>
            {entry.map(entry => {
                if (entry.title[lang] && entry.link[lang]) {
                    let link_arr: string[] = tokenize(entry.link[lang])
                    removeLangFromArr(link_arr, lang)
                    let isLocal: boolean = entry.link[lang].startsWith("/")
                    let isActive: boolean = compareUrl(location, link_arr) === 0
                    return (
                        <NaviItem
                            subnavi
                            local={isLocal}
                            active={isActive}
                            title={entry.title[lang]}
                            link={entry.link[lang]}
                            key={entry.title[lang] + "-" + entry.link[lang]}
                        />
                    )
                } else return (null)
            })}
        </div>
    )
}

// Types for navigation data scheme

interface SubnaviData {
    title: TranslatedEntry,
    link: TranslatedEntry
}

interface NaviData {
    node: {
        title: TranslatedEntry,
        link: TranslatedEntry,
        subnavi?: SubnaviData[]
    }
}

interface NaviDataScheme {
    allNaviYaml: {
        edges: NaviData[]
    }
}

interface NavCollapseProps {
    lang: string,
    slug: string,
    translation?: string,
    isExpanded: boolean,
    hideNavi: () => void
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded, hideNavi }) => {
    let location: string[] = tokenize(slug)
    removeLangFromArr(location, lang)

    const data: NaviDataScheme = useStaticQuery(graphql`
        query getNaviData {
            allNaviYaml {
                edges {
                    node {
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
    `)

    return (
        <div
            id={style.navbarCollapse}
            className={ isExpanded ? style.show : "" }
            onClick={hideNavi}
        >
            {data.allNaviYaml.edges.map(entry => entry.node)
                .map(entry => {
                    if (entry.title[lang] && entry.link[lang]) {
                        let link_arr: string[] = tokenize(entry.link[lang])
                        removeLangFromArr(link_arr, lang)
                        let isActive: boolean = compareUrl(location, link_arr) >= 0
                        let isLocal: boolean = entry.link[lang].startsWith("/")
                        if (entry.subnavi)
                            return (
                                <NaviItem
                                    dropdown
                                    local={isLocal}
                                    active={isActive}
                                    key={entry.title[lang] + "-" + entry.link[lang]}
                                    title={entry.title[lang]}
                                    link={entry.link[lang]}
                                >
                                    <Subnavi
                                        lang={lang}
                                        entry={entry.subnavi}
                                        location={location}
                                        key={entry.title[lang] + "-" + entry.link[lang]}
                                    />
                                </NaviItem>
                            )
                        else {
                            return (
                                <NaviItem
                                    local={isLocal}
                                    active={isActive}
                                    key={entry.title[lang] + "-" + entry.link[lang]}
                                    title={entry.title[lang]}
                                    link={entry.link[lang]}
                                />
                            )
                        }
                    } else return (null)
            })}
            <LangSwitcher
                lang={lang}
                slug={slug}
                translation={translation}
            />
        </div>
    )
}

interface NavbarProps {
    lang: string,
    slug: string,
    translation?: string
}

const Navbar: React.FC<NavbarProps> = ({ lang, slug, translation }) => {
    const [navExpanded, expandNav] = useState(false)

    const toggleNav = (): void => {
        navExpanded
            ? document.body.classList.remove(style.hideoverflow)
            : document.body.classList.add(style.hideoverflow)
        expandNav(!navExpanded)
    }

    const hideNav = (): void => {
        document.body.classList.remove(style.hideoverflow)
        expandNav(false)
    }

    return (
        <div id={style.navbarTop} className={`${navExpanded ? style.expanded : ""}`}>
            <div className={style.navi}>
                <SiteLogo lang={lang} />
                <NavCollapse 
                    lang={lang}
                    slug={slug}
                    translation={translation}
                    isExpanded={navExpanded}
                    hideNavi={hideNav}
                />
                <div className={style.menuToggle} onClick={toggleNav}>
                    <BsList />
                </div>
            </div>
        </div>
    )
}

export default Navbar
