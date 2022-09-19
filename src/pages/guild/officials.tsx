import React from "react"
import type { PageProps } from "gatsby"
import PageLayout from "@src/components/layouts/page-layout.jsx"

import * as style from "./officials.module.scss"
import {officialsData, type Committee, type Official } from "../../../src/data/officials"



const OfficialCard: React.FC<{official:Official}> = ({official}) => {
  const leader = official.leader ? style.leader : ''
  const imgSrc = official.image ?? "https://as.fi/static/toimijat/aebaej_placeholder.png"
  return (
    <div className={`${style.official_container} ${leader}`} >
      <div className={style.image_container}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={style.name}>{official.name}</div>
      <div className={style.title}>{official.title}</div>
  </div>
  )
}

const CommitteeSection: React.FC<{committee:Committee}> = ({committee}) => {
  const {name, members} = committee;
  return (
    <div className={style.officials_section}>
      <h2 id="name">{name}</h2>
      <div className={style.officials_list}>
        {members.map(official => <OfficialCard official={official} />)}
      </div>
    </div>
  )
}

const Officials: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Toimihenkilöt">
      {officialsData.map(committee =>
        <CommitteeSection committee={committee} />
      )}
    </PageLayout>
  )
}

export default Officials;
