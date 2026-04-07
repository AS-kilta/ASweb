import React from 'react';
import style from './InstagramWidget.module.scss';

const InstagramWidget: React.FC = () => {
  return (
    <div className={style.instagramwidget}>
      <iframe
        title="Instagram feed"
        scrolling="no"
        loading="lazy"
        src="https://www.instagram.com/askilta/embed/"
      ></iframe>
    </div>
  );
};

export default InstagramWidget;
