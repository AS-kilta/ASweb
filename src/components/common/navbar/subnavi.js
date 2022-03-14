import React from "react"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

import * as style from "./navbar.module.scss"

export default function Subnavi({ context, entry, locarray, linkarray }) {

    return (
        <div 
            className={compareUrl(locarray, linkarray) >= 0 
                ? `${style.dropdown} ${style.naviItem} ${style.active}`
                : `${style.dropdown} ${style.naviItem}`}
        >
            <a
                className={style.dropdownLink}
                href={entry.link[0][`${context.lang}`]}
            >
                {entry.title[0][`${context.lang}`]}
            </a>
            <div className={style.subnavi}>
                {entry.subnavi.map(entry => {
                    if (entry.title[0][`${context.lang}`] !== "" && entry.link[0][`${context.lang}`] !== "") {
                        let linkarray = tokenize(entry.link[0][`${context.lang}`])
                        removeLangFromArr(linkarray, context.lang)
                        return (
                            <div 
                                className={compareUrl(locarray, linkarray) === 0
                                    ? `${style.subnaviItem} ${style.active}`
                                    : `${style.subnaviItem}`}
                                key={entry.title[0][`${context.lang}`] + "-" + entry.link[0][`${context.lang}`]}
                            >
                                <a
                                    href={entry.link[0][`${context.lang}`]}
                                >
                                    {entry.title[0][`${context.lang}`]}
                                </a>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )

}
