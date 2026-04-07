import React from 'react';
import style from './SnapWidget.module.scss';

const SnapWidget: React.FC = () => {
  return (
    <div className={style.snapwidget}>
      <iframe
        title="Instagram feed"
        loading="lazy"
        style={{ border: 0, overflow: 'hidden' }}
        src="https://snapwidget.com/embed/787765"
      ></iframe>
    </div>
  );
};

export default SnapWidget;
