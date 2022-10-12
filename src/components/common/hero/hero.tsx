import React from "react"

import * as style from "./hero.module.scss"

import * as sassVars from "@src/styles/_exports.module.scss"

interface HeroProps {
    title: string,
    lead?: string,
    background?: string
}

const Hero: React.FC<HeroProps> = ({ title, lead, background }) => {
    const backgroundStyle: React.CSSProperties = background ? {
        background: `url(${background}) ${sassVars.asViolet1}`,
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light"
    } : {}

    return (
        <div
            id={style.hero}
            style={backgroundStyle}
        >
            {title && <h1 className={style.mainTitle}>{title}</h1>}
            {lead &&
            <>
                <p className={style.lead}>{lead}</p>
            </>}
        </div>
    )
}

export default Hero
