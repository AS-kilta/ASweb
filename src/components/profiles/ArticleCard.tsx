import React from "react"
import * as style from "./ArticleCard.module.scss"
import ProfileImg from "./ProfileImg"


const ArticleCard: React.FC<{name: string, image: string, quote: string, link: string, reverse?: boolean}> = ({ name, image, quote, link, reverse })=> {
  const cardStyles = reverse ? `${style.article_card} ${style.flex_reverse}` : style.article_card
  return (
    <div className={cardStyles} >
      <ProfileImg src={image} />
      <div className={style.card_content}>
        <blockquote className={style.quote}>{quote}</blockquote>
        <div className={style.footer}>
          <span className={style.name}>{name}</span>
          <a href={link} className="rounded-button">Lue artikkeli</a>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
