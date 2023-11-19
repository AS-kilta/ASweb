import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./ProfileImg.module.scss"

interface ProfileImgProps {
  src?: string | DynamicImageData;
  alt?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({src, alt}) => {
  const imgSrc: string | DynamicImageData = src ?? "/images/aebaej_placeholder.png";
  const altText: string = alt ?? "";
  
  return (
    <div className={style.profile_img}>
      { (typeof imgSrc === "string")
          ? <img src={imgSrc} alt={altText} />
          : <GatsbyImage image={imgSrc.childImageSharp.gatsbyImageData} alt={alt ?? ""} />
      }
    </div>
  )
}

export default ProfileImg;