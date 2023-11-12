import React from "react"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

import * as style from "./Hero.module.scss"

import * as sassVars from "@src/styles/_exports.module.scss"

export interface HeroProps {
    title: string,
    lead?: string,
    background?: GatsbyImageProps['image'],
    heroHeight?: "short" | "tall"
}

const Hero: React.FC<HeroProps> = ({ title, lead, background, heroHeight }) => {
    const customStyle: React.CSSProperties = background ? {
        // background: `url(${background}) ${sassVars.backgroundViolet}`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundBlendMode: "soft-light",
        flex: "1 0 60vh"
    } : {}

    if ( heroHeight == "short" ) {
        customStyle.aspectRatio = "14/3";
    }
    else if ( heroHeight == "tall" ) {
        customStyle.aspectRatio = "11/3";
    }

    return (
        <div
            id={style.hero}
            style={customStyle}
        >
            {background && <GatsbyImage className={style.backgroundImage} image={background} alt=""/>}
            {title && <h1 className={style.mainTitle}>{title}</h1>}
            {lead &&
            <>
                <p className={style.lead}>{lead}</p>
            </>}
        </div>
    )
}

export default Hero
