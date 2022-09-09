import React from "react"
import { Link } from "gatsby"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import * as style from "./navbar.module.scss"

import { IoMdArrowDropdown } from "react-icons/io"

export default function Subnavi({ pageContext, entry, locarray, linkarray }) {

    let isLocal = entry.link[0][pageContext.lang].startsWith("/")

    return (
        <div 
            className={compareUrl(locarray, linkarray) >= 0 
                ? `${style.dropdown} ${style.naviItem} ${style.active}`
                : `${style.dropdown} ${style.naviItem}`}
        >
            {isLocal ? (
                <Link className={style.dropdownLink}
                    to={entry.link[0][pageContext.lang]}
                >
                    {entry.title[0][pageContext.lang]}
                    <IoMdArrowDropdown />
                </Link>
            ) : (
                <a
                    className={style.dropdownLink}
                    href={entry.link[0][pageContext.lang]}
                >
                    {entry.title[0][pageContext.lang]}
                    <IoMdArrowDropdown />
                </a>
            )}
            <div className={style.subnavi}>
                {entry.subnavi.map(entry => {
                    if (entry.title[0][pageContext.lang] && entry.link[0][pageContext.lang]) {
                        let isLocal = entry.link[0][pageContext.lang].startsWith("/")
                        let linkarray = tokenize(entry.link[0][pageContext.lang])
                        removeLangFromArr(linkarray, pageContext.lang)
                        return (
                            <div 
                                className={compareUrl(locarray, linkarray) === 0
                                    ? `${style.subnaviItem} ${style.active}`
                                    : `${style.subnaviItem}`}
                                key={entry.title[0][pageContext.lang] + "-" + entry.link[0][pageContext.lang]}
                            >
                                { isLocal ? (
                                    <Link to={entry.link[0][pageContext.lang]}>
                                        {entry.title[0][pageContext.lang]}
                                    </Link>
                                ) : (
                                    <a href={entry.link[0][pageContext.lang]}>
                                        {entry.title[0][pageContext.lang]}
                                    </a>
                                )}
                            </div>
                        )
                    } else return (null)
                })}
            </div>
        </div>
    )

}
