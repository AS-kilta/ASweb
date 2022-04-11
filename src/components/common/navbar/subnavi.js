import React from "react"
import { Link } from "gatsby"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import * as style from "./navbar.module.scss"

import { IoMdArrowDropdown } from "react-icons/io"

export default function Subnavi({ context, entry, locarray, linkarray }) {

    let isLocal = entry.link[0][`${context.lang}`].startsWith("/")

    return (
        <div 
            className={compareUrl(locarray, linkarray) >= 0 
                ? `${style.dropdown} ${style.naviItem} ${style.active}`
                : `${style.dropdown} ${style.naviItem}`}
        >
            {isLocal ? (
                <Link className={style.dropdownLink}
                    to={entry.link[0][`${context.lang}`]}
                >
                    {entry.title[0][`${context.lang}`]}
                    <IoMdArrowDropdown />
                </Link>
            ) : (
                <a
                    className={style.dropdownLink}
                    href={entry.link[0][`${context.lang}`]}
                >
                    {entry.title[0][`${context.lang}`]}
                    <IoMdArrowDropdown />
                </a>
            )}
            <div className={style.subnavi}>
                {entry.subnavi.map(entry => {
                    if (entry.title[0][`${context.lang}`] && entry.link[0][`${context.lang}`]) {
                        let isLocal = entry.link[0][`${context.lang}`].startsWith("/")
                        let linkarray = tokenize(entry.link[0][`${context.lang}`])
                        removeLangFromArr(linkarray, context.lang)
                        return (
                            <div 
                                className={compareUrl(locarray, linkarray) === 0
                                    ? `${style.subnaviItem} ${style.active}`
                                    : `${style.subnaviItem}`}
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
                    } else return (null)
                })}
            </div>
        </div>
    )

}
