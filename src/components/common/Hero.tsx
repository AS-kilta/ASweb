import React from "react"

import * as style from "./Hero.module.scss"

import * as sassVars from "@src/styles/_exports.module.scss"

export interface HeroProps {
    title: string,
    lead?: string,
    background?: string,
    heroHeight: "short" | "tall"
}

const Hero: React.FC<HeroProps> = ({ title, lead, background, heroHeight="short"}) => {
    let height = 30
    if (heroHeight === "tall") {
        height = 60
    }
    
    const customStyle: React.CSSProperties = background ? {
        background: `url(${background}) ${sassVars.backgroundViolet}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
        flex: `1 0 ${height}lvh`
    } : {}

    return (
        <div
            id={style.hero}
            style={customStyle}
        >
            {title && <h1 className={style.mainTitle}>{title}</h1>}
            {lead && <p className={style.lead}>{lead}</p>}
        </div>
    )
}

export default Hero
