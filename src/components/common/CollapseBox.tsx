import React, { useEffect, useState } from "react"
import * as style from "./CollapseBox.module.scss"
import { BsDash, BsPlus } from "react-icons/bs"

interface Props {
  title: string
  expand?: boolean
  children: React.ReactNode
}

const CollapseBox: React.FC<Props> = ({ title, expand, children }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleCollapse = () => {
    setExpanded(!expanded)
  }

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      toggleCollapse()
    }
  }

  useEffect(() => {
    if (expand) setExpanded(true)
    else setExpanded(false)
  }, [expand])

  const contentStyle = style.content + (expanded ? ` ${style.expanded}` : "")

  return (
    <div className={style.container}>
      <button
        className={style.titleRow}
        onClick={toggleCollapse}
        onKeyDown={toggleOnEnter}
      >
        {title}
        {expanded ? <BsDash /> : <BsPlus />}
      </button>
      <div className={contentStyle}>
        {children}
      </div>
    </div>
  )
}

export default CollapseBox
