import React from "react";
import * as style from "./CircleCard.module.scss"

interface CCard {
    title:       string,
    link?:       string,
    targetSelf?: boolean
}

const CircleCard: React.FC<CCard> = ( {title, link, targetSelf} ) => {
    let target = "_blank";
    if ( targetSelf )
        target = "_self";

    return(
        <circle className={style.badge}>
            <a href={link} target={target}>
                {title}
            </a>
        </circle>
    )
}

export default CircleCard;