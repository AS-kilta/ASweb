import React from "react"

import { compareUrl, tokenize, removeLangFromArr } from "./helpers/helpers.js"

export default function Subnavi({ context, entry, locarray, linkarray }) {

    return (
        <div 
            className={compareUrl(locarray, linkarray) >= 0 
                ? "dropdown navi-item active"
                : "dropdown navi-item"}
        >
            <a
                className="dropdown-link"
                href={entry.link[0][`${context.lang}`]}
            >
                {entry.title[0][`${context.lang}`]}
            </a>
            <div className="subnavi">
                {entry.subnavi.map(entry => {
                    let linkarray = tokenize(entry.link[0][`${context.lang}`])
                    removeLangFromArr(linkarray, context.lang)
                    return (
                        <div 
                            className={compareUrl(locarray, linkarray) === 0
                                ? "subnavi-item active"
                                : "subnavi-item"}
                        >
                            <a
                                href={entry.link[0][`${context.lang}`]}
                            >
                                {entry.title[0][`${context.lang}`]}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
