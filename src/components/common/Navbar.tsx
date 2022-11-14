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

interface NaviLinkProps {
    title: string,
    link: string,
}

const NaviLink: React.FC<NaviLinkProps> = ({ title, link }) => {
    const local = link.startsWith("/")

    return (
        <>
            {local
                ? <Link className={style.naviLink} activeClassName={style.active} to={link}>{title}</Link>
                : <a className={style.naviLink} href={link}>{title}</a>
            }
        </>
    )
}

interface NaviItemProps {
    entry: NaviData
    lang: string
}

const NaviItem: React.FC<NaviItemProps> = ({ entry, lang }) => {
    const title = entry.title[lang]
    const link = entry.link[lang]

    return (
        <div className={style.naviItem}>
            <NaviLink
                title={title}
                link={link}
                />
            <Subnavi
                data={entry.subnavi}
                lang={lang}
                />
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
        <div className={style.naviItem}>
            <NaviLink
                title={title}
                link={translation || link}
                />
        </div>
    )
}

interface SubnaviProps {
    data?: SubnaviData[],
    lang: string,
}

const Subnavi: React.FC<SubnaviProps> = ({ lang, data }) => {
    const [expanded, setExpanded] = useState(false)

    const toggleSubnavi = () => {
        setExpanded(!expanded)
    }

    const toggleOnEnter = (e: React.KeyboardEvent): void => {
        if (e.key === "Enter")
            toggleSubnavi()
    }

    if (!data) {
        return null
    }

    const subnaviClasses = `${style.subnavi} ${expanded ? style.showDropdown : ""}`

    return (
        <>
            <a tabIndex={0} className={style.dropdownToggle} onClick={toggleSubnavi} onKeyDown={toggleOnEnter}>
                {expanded ? <BsDash /> : <BsPlus />}
            </a>
            <div className={subnaviClasses}>
                {data.map(entry => {
                    if (!entry.title[lang] || !entry.link[lang]) {
                        return null;
                    }

                    return (
                        <NaviLink
                            title={entry.title[lang]}
                            link={entry.link[lang]}
                            key={entry.title[lang] + "-" + entry.link[lang]}
                        />
                    )
                })}
            </div>
        </>
    )
}

// Types for navigation data scheme

interface SubnaviData {
    title: TranslatedEntry,
    link: TranslatedEntry
}

interface NaviData {
    title: TranslatedEntry,
    link: TranslatedEntry,
    subnavi?: SubnaviData[]
}

interface NaviDataScheme {
    allNaviYaml: {
        edges: [
            {
                node: NaviData
            }
        ]
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
        >
            {data.allNaviYaml.edges
                .map(edge => {
                    const entry = edge.node;
                    if (!entry.title[lang] || !entry.link[lang]) {
                        return (null);
                    }
                    return (
                        <NaviItem
                            entry={entry}
                            lang={lang}
                            key={entry.title[lang] + "-" + entry.link[lang]}
                        />
                    )
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
        <nav id={style.navbarTop} className={navExpanded ? style.expanded : ""}>
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
        </nav>
    )
}

export default Navbar
