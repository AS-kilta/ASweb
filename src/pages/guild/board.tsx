import React from "react"
import type { HeadFC, HeadProps, PageProps } from "gatsby"
import Meta from "@src/components/common/meta/meta"
import PageLayout from "@src/components/layouts/page-layout.jsx"
import ProfileImg from "../../components/profiles/ProfileImg"
import * as style from "./board.module.scss"
import {boardData, type BoardMember } from "../../data/board"


const BoardMemberCard: React.FC<{member:BoardMember}> = ({member}) => {
  return (
    <div className={style.board_member} >
      <ProfileImg src={member.image} />
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

export default Officials

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Hallitus" />
)
