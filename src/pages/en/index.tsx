import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"
import * as style from './index.module.scss'

import heroimg from "../../images/images/20201029195159-eef0d345-xx.jpg"
import sweets from "../../images/images/karkki_kalle.jpg"
import amfi from "../../images/images/20210917174935-70c53c15-xx.jpg"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <PageLayout pageContext={pageContext} title="The AutoSys Guild" background={heroimg} heroHeight="tall">
            <div className={`even-columns ${style.frontpagebox}`}>
                <div style={{textAlign: "center"}}>
                    <h2>What is AS?</h2>
                    <p>AS is a student organisation which combines the students from wide variety of fields. Our guild covers the degree programmes of Automation and Robotics, Informationtechnology, and Digital Systems and Desing along side with students in programmes close to these. The guild organizes free-time activities, oversees their benefit in studies related things and maintains relations with companies in the field.
                    </p>
                </div>
                <img src={amfi} alt="" />
            </div>
            <div className={`even-columns ${style.frontpagebox}`}>
                <img className="no-mobile" src={sweets} alt="" />
                <div className={style.eventsContainer}>
                    <h2>Events</h2>
                    <EventList number={5} lang={pageContext.lang} />
                    <a href="https://calendar.google.com/calendar/embed?src=as.tiedottaja%40gmail.com&ctz=Europe%2FHelsinki" target="_blank">Event Calendar</a>
                </div>
            </div>
            <h2 className="center-text">Instagram</h2>
            <SnapWidget />
        </PageLayout>
    )
}

export default IndexPage

export const Head: HeadFC<HeadProps> = () => (
    <Meta lang="en" />
)
