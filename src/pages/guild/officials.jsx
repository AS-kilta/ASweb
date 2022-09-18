import React from "react"
import PageLayout from "@src/components/layouts/page-layout.jsx"

import * as style from "./officials.module.scss"


const fuksit = [
  { name: "Etunimi", title: "Fuksikapteeni", leader: true },
  { name: "Etunimi", title: "Fuksikapteeni", leader: true },
  { name: "Etunimi", title: "Tosi ISOpomo" },
  { name: "Etunimi", title: "SuurFuksikapteeni" },
  { name: "Etunimi", title: "Tosi-ISO" },
  { name: "Etunimi", title: "Tosi-ISO" },
  { name: "Etunimi", title: "Tosi-ISO" },
  { name: "Etunimi", title: "Tosi-ISO" },
  { name: "Etunimi", title: "Tosi-ISO" },
]

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

function CommitteeSection({name, officials}) {
  return (
    <div className={style.officials_section}>
      <h2>{name}</h2>
      <div className={style.officials_list}>
        {officials.map(official => <OfficialCard official={official} />)}
      </div>
    </div>
  )
}

export default function Officials({ pageContext }) {
  return (
    <PageLayout pageContext={pageContext} title="Toimihenkilöt">
      <CommitteeSection name="Fuksitoimikunta" officials={fuksit} />
      <CommitteeSection name="Fuksitoimikunta" officials={fuksit} />
      <CommitteeSection name="Fuksitoimikunta" officials={fuksit} />
    </PageLayout>
  )
}
