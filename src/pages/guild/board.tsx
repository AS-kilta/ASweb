import React from "react"
import type { PageProps } from "gatsby"
import PageLayout from "@src/components/layouts/page-layout.jsx"

import * as style from "./board.module.scss"
import {boardData, type BoardMember } from "../../data/board"



const BoardMemberCard: React.FC<{member:BoardMember}> = ({member}) => {
  const imgSrc ="https://as.fi/static/toimijat/aebaej_placeholder.png"
  return (
    <div className={style.board_member} >
      <div className={style.image_container}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={style.title}>{member.title}</div>
      <div>{member.name}</div>
      <a href={`email:${member.email}`}>{member.email}</a>
      <div>{member.phone}</div>
      <a href={`https://t.me/${member.username}`}>@{member.username}</a>
      <p>{member.description}</p>
  </div>
  )
}

const Officials: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Hallitus">
      <div className={style.board}>

        {boardData.map(member =>
          <BoardMemberCard member={member} />
        )}
      </div>
    </PageLayout>
  )
}

export default Officials;
