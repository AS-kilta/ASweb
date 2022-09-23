import React from "react"
import type { PageProps } from "gatsby"
import PageLayout from "@src/components/layouts/page-layout.jsx"
import ProfileImg from "../../components/profiles/ProfileImg"
import * as style from "./officials.module.scss"
import {officialsData, type Committee, type Official } from "../../../src/data/officials"


const OfficialCard: React.FC<{official:Official}> = ({official}) => {
  const leader = official.leader ? style.leader : ''

  return (
    <div className={`${style.official_container} ${leader}`} >
      <ProfileImg src={official.image}/>
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
