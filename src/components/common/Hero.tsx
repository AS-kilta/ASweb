import React from "react"

import * as style from "./Hero.module.scss"

import * as sassVars from "@src/styles/_exports.module.scss"

interface HeroProps {
    title: string,
    lead?: string,
    background?: string,
    heroHeight?: string
}

const Hero: React.FC<HeroProps> = ({ title, lead, background, heroHeight }) => {
    const customStyle: React.CSSProperties = background ? {
        background: `url(${background}) ${sassVars.asViolet1}`,
        backgroundSize: 'cover',
        backgroundBlendMode: "soft-light"
    } : {}

    // Choose 1 for short hero, 2 for tall hero.

    if ( heroHeight == "1" ) {
        customStyle.aspectRatio = "13/3";
    }
    else if ( heroHeight == "2" ) {
        customStyle.aspectRatio = "8/3";
    }
    
    return (
        <div
            id={style.hero}
            style={customStyle}
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
