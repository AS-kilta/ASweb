import React from "react"
import * as style from "./ProfileImg.module.scss"

interface ProfileImgProps {
  src?: string;
  alt?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({src, alt}) => {
  const imgSrc = src ?? "https://as.fi/static/toimijat/aebaej_placeholder.png";
  const altText = alt ?? "";
  
  return (
    <div className={style.profile_img}>
      <img src={imgSrc} alt={altText} />
    </div>
  )
}

export default ProfileImg;