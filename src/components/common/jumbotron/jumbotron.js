import React from "react"

import * as style from "./jumbotron.module.scss"

import * as sassVars from "../../../styles/_exports.module.scss"

export default function Jumbotron({ title, lead, background }) {
    return (
        <div
            id={style.jumbotron}
            style={
                background && {
                    background: `url(${background}) ${sassVars.asViolet1}`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "soft-light"
                }
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