import React from "react"

import * as style from "./Hero.module.scss"

interface HeroProps {
    title: string,
    lead?: string,
    background?: string
}

const Hero: React.FC<HeroProps> = ({ title, lead, background }) => {
    const backgroundStyle: React.CSSProperties = background ? {
        background: `url(${background}) var(--as-violet-1)`,
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
