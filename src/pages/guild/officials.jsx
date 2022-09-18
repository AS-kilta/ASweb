import React from "react"
import PageLayout from "@src/components/layouts/page-layout.jsx"

import * as style from "./officials.module.scss"
import { officialsData } from "@src/data/officials"



function OfficialCard({official}) {
  const leader = official.leader ? style.leader : ''
  return (
    <div className={`${style.official_container} ${leader}`} >
      <div className={style.image_container}>
        <img src="https://as.fi/static/toimijat/aebaej_placeholder.png" alt="" />
      </div>
      <div className={style.name}>{official.name}</div>
      <div className={style.title}>{official.title}</div>
  </div>
  )
}

function CommitteeSection({committee}) {
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

export default function Officials({ pageContext }) {
  return (
    <PageLayout pageContext={pageContext} title="Toimihenkilöt">
      {officialsData.map(committee =>
        <CommitteeSection committee={committee} />
      )}
    </PageLayout>
  )
}
