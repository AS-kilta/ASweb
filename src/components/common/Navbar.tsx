import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsList, BsX, BsPlus, BsDash } from "react-icons/bs"


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
    title: string,
    link: string,
}

interface NaviItemProps extends CommonNaviItemProps {
    dropdown?: boolean,
    subnaviItem?: boolean,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    children?: React.ReactNode
}

const NaviItem: React.FC<NaviItemProps> = ({ dropdown, subnaviItem, title, link, onMouseEnter, onMouseLeave, children }) => {
    const divClasses = `${subnaviItem ? style.subnaviItem : style.naviItem} ${dropdown ? style.dropdown : ""}`
    const local = link.startsWith("/")

    return (
        <div className={divClasses} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {local ? (
                <Link activeClassName={style.active} to={link}>
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
}

const NaviDropdown: React.FC<NaviDropdownProps> = ({ title, link, subnaviData, lang }) => {
    const [subnaviExpanded, expandSubnavi] = useState(false)

    const toggleSubnavi = (): void => {
        expandSubnavi(!subnaviExpanded)
    }

    const hideSubnavi = (): void => {
        expandSubnavi(false)
    }

    const toggleOnEnter = (e: React.KeyboardEvent): void => {
        if (e.key === "Enter")
            toggleSubnavi()
    }

    const toggleOnClick = (e: React.MouseEvent): void => {
        // Prevent collapsing navigation while toggling subnavi in mobile menu.
        e.stopPropagation()
        toggleSubnavi()
    }

    return (
        <NaviItem
            dropdown
            title={title}
            link={link}
            onMouseEnter={toggleSubnavi}
            onMouseLeave={hideSubnavi}
        >
            <a tabIndex={0} className={style.dropdownToggle} onClick={toggleOnClick} onKeyDown={toggleOnEnter}>
                {subnaviExpanded ? <BsDash /> : <BsPlus />}
            </a>
            <Subnavi
                lang={lang}
                entry={subnaviData}
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
            title={title}
            link={translation || link}
        />
    )
}

interface SubnaviProps {
    lang: string,
    entry: SubnaviData[],
    expanded: boolean
}

const Subnavi: React.FC<SubnaviProps> = ({ lang, entry, expanded }) => {
    const subnaviClasses = `${style.subnavi} ${expanded ? style.showDropdown : ""}`

    return (
        <div className={subnaviClasses}>
            {entry.map(entry => {
                if (entry.title[lang] && entry.link[lang]) {
                    return (
                        <NaviItem
                            subnaviItem
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
    hideNav: () => void
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded, hideNav }) => {

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
            onClick={hideNav}
        >
            {data.allNaviYaml.edges.map(entry => entry.node)
                .map(entry => {
                    if (entry.title[lang] && entry.link[lang]) {
                        if (entry.subnavi)
                            return (
                                <NaviDropdown
                                    lang={lang}
                                    subnaviData={entry.subnavi}
                                    key={entry.title[lang] + "-" + entry.link[lang]}
                                    title={entry.title[lang]}
                                    link={entry.link[lang]}
                                />
                            )
                        else {
                            return (
                                <NaviItem
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
            ? document.body.classList.remove("hideoverflow")
            : document.body.classList.add("hideoverflow")
        expandNav(!navExpanded)
    }

    const hideNav = (): void => {
        document.body.classList.remove("hideoverflow")
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
                    hideNav={hideNav}
                />
                <div className={style.menuToggle} onClick={toggleNav}>
                    {navExpanded ? <BsX /> : <BsList />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
