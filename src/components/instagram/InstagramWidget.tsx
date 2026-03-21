import React from 'react';
import * as style from './InstagramWidget.module.scss';

const InstagramWidget: React.FC = () => {
  return (
    <div className={style.instagramwidget}>
      <iframe
        title="Instagram feed"
        loading="lazy"
        scrolling="no"
        src="https://www.instagram.com/askilta/embed/"
      ></iframe>
    </div>
  );
};

export default InstagramWidget;
