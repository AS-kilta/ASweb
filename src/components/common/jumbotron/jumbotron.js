import React from "react"

import * as style from "./jumbotron.module.scss"

export default function Jumbotron({ title, lead, background }) {
    console.log(background)
    return (
        <div
            id={style.jumbotron}
            style={
                background ?
                    {
                        background: `url(${background}) rgba(110, 64, 119, 0.5)`,
                        backgroundSize: "cover",
                        backgroundBlendMode: "multiply"
                    } : null
            }
        >
            {title && <h1 className={style.mainTitle}>{title}</h1>}
            {lead &&
            <>
                <p className={style.lead}>{lead}</p>
            </>}
        </div>
    )

}