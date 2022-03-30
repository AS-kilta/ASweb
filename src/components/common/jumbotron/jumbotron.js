import React from "react"

import * as style from "./jumbotron.module.scss"

export default function Jumbotron({ title, lead }) {

    return (
        <div id={style.jumbotron}>
            {title && <h1>{title}</h1>}
            {lead &&
            <>
                <div className={style.separator}></div>
                <p className={style.lead}>{lead}</p>
            </>}
        </div>
    )

}