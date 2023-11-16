import React from "react"
import * as style from "./SnapWidget.module.scss"


const SnapWidget: React.FC = () => {
  return (
    <div className={style.snapwidget}>
        <iframe title="Instagram feed" loading="lazy" allowTransparency frameBorder="0" scrolling="no" src="https://snapwidget.com/embed/787765"></iframe>
    </div>
  )
}

export default SnapWidget;
