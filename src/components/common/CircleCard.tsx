import React from "react";
import style from "./CircleCard.module.scss"

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
            <text className={style.badgeText}>
                <a href={link} target={target} className={style.badgeLink}>
                    {title}
                </a>
            </text>
        </circle>
    )
}

export default CircleCard;