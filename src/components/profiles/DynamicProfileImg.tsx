import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./ProfileImg.module.scss"

interface Props {
  data: DynamicImageData,
  alt?: string
}

const DynamicProfileImg: React.FC<Props> = ({ data, alt }) => {
  return (
    <div className={style.profile_img}>
      <GatsbyImage image={data.childImageSharp.gatsbyImageData} alt={alt ?? ""} />
    </div>
  )
}

export default DynamicProfileImg
