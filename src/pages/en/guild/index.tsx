import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"

const stylep= {"margin-top": "1.5rem"} as React.CSSProperties;

const ArchivePage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Guild" documentStyle="document">
      <div>
        <StaticImage className="image wide up" src='../../../images/images/IMG_0141.jpg' alt=''/>
        <p style={stylep}>The purpose of the guild is to unite students of automation and robotics, information technology and Digital Systems and Design, and to promote their societal, social and intellectual aspirations, as well as their studies and the student's position in the university and society, and to raise from them experts with a strong identity as a teekkari and a professional. The guild operates within AYY, the student union of Aalto University.</p>
      </div>

      <h2> Communications </h2>
      
      <p>The guild uses several different communication tools for internal guild communication. The most important communication channels are:</p>

      <div>
        <ul>
          <li><p><strong>Email lists</strong>: Weekly bulletins and other official announcements are sent to email lists. You might also spot a dog picture in the Weekly Newsletter!</p></li>
          <StaticImage className="image box" src='../../../images/images/dogoftheweek.jpg' alt=''/>
          <li><p><strong>Telegram</strong>: General chat channels can be found in Telegram. There are channels for both general discussion and separate topics, such as studying and sports. In addition, there is a separate AivanViralinen channel for discussing official guild matters. The recruitment announcements of the guild's partners are sent through a separate recruitment channel.</p></li>
          <li><p><strong>Foorumi</strong>: The discussion forum can be found at forum.as.fi. It is mainly used for official discussion, for example in connection with guild meetings and elections.</p></li>
        </ul>
      </div>

      <p>In addition, ASki has a notice board for board announcements and other important notification matters. Links to the discussion channels can be found in the weekly bulletins or by asking the Head of Communications. </p>
      <p>If you want to have your message in the guild's information channels, contact the Head of Communications. You can find the board's contact information on <a target='_self' href='/en/guild/board'>the board's page</a>.</p>

      <h2> ASki </h2>
      <div>
        <p>Our guildroom ASki is located in <a target='_self' href='https://www.openstreetmap.org/#map=19/60.1873/24.81847'>TUAS building's first floor</a>. ASki's name goes back to the early days of the guild, when the guild room was a small room in Tietotalo. ASki moved to its current location when the TUAS building opened in 2003. The opening was celebrated during the anniversary week of November 17, 2003, and nowadays ASki's birthday is celebrated around that time.</p>
        <StaticImage className="image wide" src='../../../images/images/IMG_0624.JPG' alt=''/>
      </div>
      <p>ASki is the guild members' living room, where you can not only spend time between lectures but also, for example, play board or video games and read magazines. It is known that someone has sometimes also studied at ASki. ASki's small kiosk serves guild members, and in addition to coffee and tea, the guild room also offers snacks for both small and large salty and sweet hunger.</p>
      <p>The ASki committee, consisting of ASki guards under the leadership of the ASkimaster, is responsible for the operation of the ASki, the filling of the cupboards and the general order. The committee is the right place to contact if there are development proposals or problems related to ASki. Contact information can be found on <a target='_self' href='/en/guild/officials'> the Committees page</a>.</p>
      <p>ASki also has the guild storage room, from which the board and ASki committee members can sell, for example, the guild's overall badges and guild history books.</p>

      <h2> Golden Tomato aka GT </h2>
      <p>Golden Tomato aka GT is guild's official magazine which publishes around four times a year. Every guild member can write to the publication. Therefore you should contact the main editor at <a href="mailto:gt@as.fi">gt@as.fi</a> if producing a magazine kindles your spirit. Golden Tomato had its first publication in the year 2000.</p>

      <h2> The Board </h2>
      <p>The board members' e-mail addresses are in the form of position@as.fi. The entire board can be reached at  <a href="mailto:board@as.fi">board@as.fi</a>. You can find the board's contact information on <a target='_self' href='/en/guild/board'>the board page</a>.</p>

    </PageLayout>
  )
}

export default ArchivePage

const description: string =
"The purpose of the guild is to unite students of automation and robotics, information technology and Digital Systems and Design, \
and to promote their societal, social and intellectual aspirations, as well as their studies and the student's position in the \
university and society, and to raise from them experts with a strong identity as a teekkari and a professional."

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Guild" description={description} />
)
