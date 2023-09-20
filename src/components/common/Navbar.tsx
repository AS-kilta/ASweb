import React, { useState, useContext, createContext } from "react"
import { BsList, BsX, BsPlus, BsDash } from "react-icons/bs"

import style from "./Navbar.module.scss"
import asLogo from "../../images/aswhite.png"
import NaviData from "../../data/navi"
import type { Language } from "../../data/translations"

// Create context for navi callbacks (avoid prop drilling)

interface INaviContext {
    navExpanded: boolean,
    toggleNav: () => void,
    hideNav: () => void
}

const NaviContext = createContext<INaviContext | undefined>(undefined)

const SiteLogo: React.FC<{lang:string}> = ({ lang }) => {
    const naviCtx = useContext(NaviContext)

    return (
        <div className={style.navbarLogo}>
            <a onClick={naviCtx?.hideNav} href={ lang === "fi" ? "/" : "/en" }>
                <img
                    src={asLogo.src}
                    alt="Aivan Sama"
                    width={40}
                    height={29}
                />
            </a>
        </div>
    )
}

interface NaviLinkProps {
    title: string,
    link: string,
}

const NaviLink: React.FC<NaviLinkProps> = ({ title, link }) => {
    const naviCtx = useContext(NaviContext)
    const local = link.startsWith("/")

    return (
        <a onClick={naviCtx?.hideNav}
            className={local ? style.naviLink : style.naviLink + " " + style.active}
            href={link}>
            {title}
        </a>
    )
}

interface NaviItemProps {
    entry: typeof NaviData
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
        link = slug.substring(3) || "/"
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

interface NavCollapseProps {
    lang: Language,
    slug: string,
    translation?: string,
    isExpanded: boolean
}

const NavCollapse: React.FC<NavCollapseProps> = ({ lang, slug, translation, isExpanded }) => {

    const data = NaviData;

    return (
        <div
            id={style.navbarCollapse}
            className={ isExpanded ? style.show : "" }
        >
            {data.map(entry => {
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
    lang: Language,
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

    const ctx: INaviContext = {
        navExpanded: navExpanded,
        toggleNav: toggleNav,
        hideNav: hideNav
    }

    return (
        <nav id={style.navbarTop} className={navExpanded ? style.expanded : ""}>
            <NaviContext.Provider value={ctx}>
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
            </NaviContext.Provider>
        </nav>
    )
}

export default Navbar
