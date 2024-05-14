import React from "react"
import { graphql } from "gatsby"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "@src/pages/fuksis/fuksis.module.scss"
import * as boardStyle from "@src/components/profiles/Board.module.scss"
import * as ccStyle from "@src/components/common/CircleCard.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import ContactCard from "@src/components/profiles/ContactCard"
import CircleCard from "@src/components/common/CircleCard"
import heropic from "@src/images/images/20230502154358-1c055172-xx.jpg"
import fuksicaptain1 from "@src/images/officials/2024/jenny_ruokolainen.jpg"
import fuksicaptain2 from "@src/images/officials/2024/eero_huhtala.jpg"

interface Props extends PageProps {
    data: ImageArrayProps
}

const Fuksis: React.FC<Props> = ({ pageContext, data }) => {
    const data1 = {
        title: 'Fuksicaptain',
        name: 'Jenny Ruokolainen',
        email: 'fuksikapteenit@as.fi',
        phone: '+358452087899',
        telegram: '@jequilaaa',
        picture: fuksicaptain1,
    };

    const data2 = {
        title: 'Fuksicaptain',
        name: 'Eero Huhtala',
        email: 'fuksikapteenit@as.fi',
        phone: '+358505977876',
        telegram: '@epasovelias',
        picture: fuksicaptain2,
    };

    const styleCard= {"--profile-img-size": "20rem", marginBottom: "5rem"} as React.CSSProperties;

  return (
    <PageLayout
        pageContext={pageContext}
        title='For Fuksis'
        background={heropic}
        heroHeight='tall'
    >
        <div style={styleCard} className={boardStyle.board}>
            <ContactCard data={data1}/>
            <ContactCard data={data2}/>
        </div>

        <h2 id="1" className="underline">
            Before the start of your studies
        </h2>

        <div className={style.cardlist}>
            <CircleCard title='Accept your study place' link="https://opintopolku.fi/konfo/en/sivu/how-to-accept-an-offer-of-admission-in-joint-application-to-higher-education"/>
            <CircleCard title='Register to be present' link="https://www.aalto.fi/en/applications-instructions-and-guidelines/annual-enrolment"/>
            <CircleCard title='Become a guild member' link='https://kide.app/memberships/9864c555-8dbe-40c8-9246-064ca682e587'/>
            <CircleCard title='Apply for a student card' link="https://www.frank.fi/en/studentcard/"/>
            <circle className={ccStyle.badge}>
                Apply for housing through&nbsp;<a href="https://domo.ayy.fi/en" target="_blank">AYY</a>&nbsp;or&nbsp;<a href="https://hoas.fi/en" target="_blank">HOAS</a>
            </circle>
            <CircleCard title='Apply for a study grant' link="https://www.kela.fi/opintotuki"/>
            <CircleCard title='Get a HSL travel card' link="https://www.hsl.fi/en/tickets-and-fares/hsl-card"/>
            <CircleCard title='Join the AS fuksis Telegram group' link="./fuksis#Telegram" targetSelf/>
            <CircleCard title='Useful links' link="./fuksis#links" targetSelf/>
        </div>

        <h3 id="Telegram">
            Telegram
        </h3>
        <div>
            <p>Otaniemi's most used application for communication and information. Telegram, known as "tg" among friends, is definitely Otaniemi teekkari's most important application. In its basic functions, it resembles any messaging app, but its additional features have captured the hearts of the teekkaris. It contains, for example, stickers, and also works online or on a computer!</p>
            <p>Telegram is also used as an essential part of informing fuksis, and we hope that all fuksis would join the Telegram group for AS fuksis <a href="https://t.me/+_yeZhoidAME0OWVk">fuksit 24</a> and DSD fuksis also join the own Telegram group for DSD fuksis <a href="https://t.me/+iu3puQEDrWcxNzY8">DSD fuksit 24</a></p>
        </div>

        <h3 id="Guild">
            Guild and Fuksis
        </h3>
        <div>
            <p>AS guild is a special status association under AYY, which unites students of Automation and Robotics, Information Technology and Digital Systems and Design majors. The guild may also include students from other education programs who are interested in AS's activities. The guild organizes many events for its members, monitors their interests in the university's institutions and cooperates with other student associations and companies.</p>
            <p>The AS guild receives about 200 fuksis every year, whose integration into the guild is taken care of by the guild's Fuksi Captains, assisted by the Masters and International Student Captain, the ISO boss and Tosi-ISOs. Together, these form the guild's fuksicommittee, ASPU.</p>
            <p>ASPU is assisted by a large number of ISOs, whose tasks include introducing the fuksis to the campus and student life on their first days, and organizing entertainment for their fuksigroups throughout the year.</p>
        </div>

        <h3 id="Fuksipointcard">
            Fuksi points card
        </h3>
        <div>
            <p>A fuksi who has collected enough points for the fuksi points card is entitled to receive a teekkari cap at the possible Wappu. Points are accumulated in several categories, including, for example, getting to know the teekkari culture, study-related events, and various volunteer activities at the guild and elsewhere. When filling out the points card, it's a great opportunity to get to know everything that Aalto University, AYY, the guilds and Otaniemi have to offer students.</p>
            <p>Points cards are distributed on the first day of the orientation week. If the fuksis can't make it, they can get a point card from the Captains by asking later. The entries on the points card are accepted by the Captains, and you can always ask them about the points when the opportunity arises. You shouldn't stress about points, because if you get excited about things, they seem to come from every direction!</p>
        </div>

        <h3 id='links'>Useful links</h3>

        <div className={style.table}>
            <div className={style.list}>
                <h4 className={style.list__title}>STUDIES</h4>
                <ul>
                    <li><a href="https://mycourses.aalto.fi/?lang=en" target='_blank'>MyCourses</a> (Here you can find information about courses)</li>
                    <li><a href="https://sisu.aalto.fi/student/" target='_blank'>Sisu</a> (Registration for courses, midterms and exams takes place here)</li>
                    <li><a href="https://www.aalto.fi/en/school-of-electrical-engineering" target='_blank'>School of Electrical Engineering</a></li>
                    <li><a href="https://aalto.fi/en" target='_blank'>Aalto University</a></li>
                    <li><a href="https://www.aalto.fi/en/student-guide" target='_blank'>Student guide</a> (Information and instructions about studies)</li>
                    <li><a href="https://www.aalto.fi/en/services/aalto-space-mobile-application" target='_blank'>Aalto Space application</a> (Reserve spaces for studying)</li>
                </ul>
            </div>
            <div className={style.list}>
                <h4 className={style.list__title}>HEALTH CARE</h4>
                <ul>
                    <li><a href="https://www.yths.fi/en/frontpage/" target='_blank'>YTHS</a></li>
                    <li>Otaniemi: Otakaari 12</li>
                    <li>Töölö: Töölönkatu 37 a</li>
                </ul>
            </div>
            <div className={style.list}>
                <h4 className={style.list__title}>TRANSPORT</h4>
                <ul>
                    <li><a href="https://www.hsl.fi/en" target='_blank'>HELSIKI REGION TRANSPORT</a></li>
                    <li><a href="https://www.hsl.fi/en/tickets-and-fares/hsl-card" target='_blank'>Travel card</a></li>
                    <li><a href="https://www.hsl.fi/en/tickets-and-fares/hsl-app" target='_blank'>HSL application</a></li>
                </ul>
            </div>
            <div className={style.list}>
                <h4 className={style.list__title}>EATING</h4>
                <ul>
                    <li><a href="https://kanttiinit.fi/" target='_blank'>Canteens</a> (student cafeteria menus)</li>
                </ul>
            </div>
            <div className={style.list}>
                <h4 className={style.list__title}>HOUSING</h4>
                <ul>
                    <li><a href="https://www.ayy.fi/en/housing" target='_blank'>AYY housing info</a></li>
                    <li><a href="https://domo.ayy.fi/en" target='_blank'>Domo housing service (AYY)</a></li>
                    <li><a href="https://hoas.fi/en" target='_blank'>HOAS</a></li>
                </ul>
            </div>
        </div>

    </PageLayout>

  )
}

export default Fuksis

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="For Fuksis" />
)

export const query = graphql`
    query ImgQuery {
        allFile(filter: {relativePath: {in: [
            "officials/2023/leevi_hormaluoma.jpg",
            "officials/2023/tuomas_nykanen.jpg"
        ]
    }}) {
        nodes {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                    )
                }
                base
            }
        }
    }
`
