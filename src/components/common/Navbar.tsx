import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsList, BsX } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers"

import * as style from "./Navbar.module.scss"

const SiteLogo: React.FC<{lang:string}> = ({ lang }) => {
    return (
        <div className={style.navbarLogo}>
            <Link to={ lang === "fi" ? "/" : "/en" }>
                <StaticImage
                    src="../../images/aswhite.png"
                    alt="Aivan Sama"
                    layout="constrained"
                    width={40}
                    height={29}
                />
            </Link>
        </div>
    )
}

interface CommonNaviItemProps {
    local?: boolean,
    active?: boolean,
    title: string,
    link: string,
    key?: string
}

interface NaviItemProps extends CommonNaviItemProps {
    dropdown?: boolean,
    subnaviItem?: boolean,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    children?: React.ReactNode
}

const NaviItem: React.FC<NaviItemProps> = ({ dropdown, subnaviItem, local, active, title, link, onMouseEnter, onMouseLeave, children }) => {
    const divClasses = `${subnaviItem ? style.subnaviItem : style.naviItem} ${active ? style.active : ""} ${dropdown ? style.dropdown : ""}`

    return (
        <div className={divClasses} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {local ? (
                <Link to={link}>
                    {title}
                </Link>
            ) : (
                <a href={link}>
                    {title}
                </a>
            )}
            {children}
        </div>
    )
}

interface NaviDropdownProps extends CommonNaviItemProps {
    subnaviData: SubnaviData[],
    lang: string,
    location: string[]
}

const NaviDropdown: React.FC<NaviDropdownProps> = ({ local, active, title, link, subnaviData, lang, location }) => {
    const [subnaviExpanded, expandSubnavi] = useState(false)

    const toggleSubnavi = (): void => {
        expandSubnavi(!subnaviExpanded)
    }

    const hideSubnavi = (): void => {
        expandSubnavi(false)
    }

    return (
        <NaviItem
            dropdown
            local={local}
            active={active}
            title={title}
            link={link}
            onMouseEnter={toggleSubnavi}
            onMouseLeave={hideSubnavi}
        >
            <a tabIndex={0} className={style.dropdownToggle} onClick={toggleSubnavi}>
                <IoMdArrowDropdown />
            </a>
            <Subnavi
                lang={lang}
                entry={subnaviData}
                location={location}
                expanded={subnaviExpanded}
            />
        </NaviItem>
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
    expanded: boolean
}

const Subnavi: React.FC<SubnaviProps> = ({ lang, entry, location, expanded }) => {
    const subnaviClasses = `${style.subnavi} ${expanded ? style.showDropdown : ""}`

    return (
        <div className={subnaviClasses}>
            {entry.map(entry => {
                if (entry.title[lang] && entry.link[lang]) {
                    let link_arr: string[] = tokenize(entry.link[lang])
                    removeLangFromArr(link_arr, lang)
                    let isLocal: boolean = entry.link[lang].startsWith("/")
                    let isActive: boolean = compareUrl(location, link_arr) === 0
                    return (
                        <NaviItem
                            subnaviItem
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
    isExpanded: boolean
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded }) => {
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
                                <NaviDropdown
                                    local={isLocal}
                                    active={isActive}
                                    lang={lang}
                                    location={location}
                                    subnaviData={entry.subnavi}
                                    key={entry.title[lang] + "-" + entry.link[lang]}
                                    title={entry.title[lang]}
                                    link={entry.link[lang]}
                                />
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
    /*
    const hideNav = (): void => {
        document.body.classList.remove(style.hideoverflow)
        expandNav(false)
    }
    */

    return (
        <div id={style.navbarTop} className={`${navExpanded ? style.expanded : ""}`}>
            <div className={style.navi}>
                <SiteLogo lang={lang} />
                <NavCollapse 
                    lang={lang}
                    slug={slug}
                    translation={translation}
                    isExpanded={navExpanded}
                />
                <div className={style.menuToggle} onClick={toggleNav}>
                    {navExpanded ? <BsX /> : <BsList />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
