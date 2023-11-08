import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "../../guild/membership.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import heroPic from "../../../images/images/Lakkien_jako_2016-100.jpg"

const Membership: React.FC<PageProps> = ({ pageContext }) => {

  return (
    <PageLayout pageContext={pageContext} title='Membership' background={heroPic} heroHeight="short" lead="As a guild member, you get the right to participate in guild events and use the guild room, as well as access to the guild's e-mail lists. In addition, as a full member you get the right to vote at guild meetings. You can become a member via the link below.">

    <a className={style.coloredBlock + " center-block" + " rounded-button"} target="_blank" href="https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587">Become a member</a>

    <h2>Actual Membership</h2>
    <p>All persons who are AYY's members can be accepted as full members of the guild. As a member of the guild, you get the right to vote at guild meetings, the right to participate in guild events and use the guild room, and access to the guild's email lists. You can become a member from the link above. More information about guild membership can be found in chapter 2 of the <a href="/guild/docs/guild-rules">guild rules</a>.</p>

    <h2>Associate Membership</h2>
    <p>A person who is interested in the activities of the guild and cannot be accepted as an actual or old member can be accepted as an associate member of the guild. The application process to become an associate member is the same as becoming an actual member, and the amount of the membership fee is the same.</p>

    <h2>Old Membership</h2>
    <p>A person who has been an actual member of the guild, but is no longer a member of AYY, can apply to become an old member of the guild. You can apply to become an old member by filling out the old member form. An old member does not have to pay a membership fee.</p>

    </PageLayout>
  )
}

export default Membership

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Membership" />
)