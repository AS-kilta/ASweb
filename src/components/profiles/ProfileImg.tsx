import React from 'react';
import * as style from './ProfileImg.module.scss';
import placeholder from '@assets/officials/aebaej_placeholder.png';

interface ProfileImgProps {
  src?: string | { src: string; width?: number; height?: number };
  alt?: string;
}

const ProfileImg: React.FC<ProfileImgProps> = ({ src, alt }) => {
  const defaultPlaceholder = placeholder.src;
  const altText: string = alt ?? '';

  let imgSrc: string;
  if (!src) {
    imgSrc = defaultPlaceholder;
  } else if (typeof src === 'string') {
    imgSrc = src === '' ? defaultPlaceholder : src;
  } else {
    // If it's an object (like from Astro's Image or gatsbyImageData structure)
    // we try to find a 'src' property.
    imgSrc = (src as any).src || (src as any).images?.fallback?.src || defaultPlaceholder;
  }

  return (
    <div className={style.profile_img}>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default ProfileImg;
