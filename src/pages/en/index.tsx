import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"
import * as style from '../index.module.scss'

import heroimg from "../../images/images/20201029195159-eef0d345-xx.jpg"
import sweets from "../../images/images/karkki_kalle.jpg"
import amfi from "../../images/images/20210917174935-70c53c15-xx.jpg"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    return (
        <PageLayout
            pageContext={pageContext}
            title="Guild of Automation and Systems Technology"
            background={heroimg}
            heroHeight="tall"
        >
            <div className={`even-columns ${style.frontpagebox}`}>
                <div style={{textAlign: "center"}}>
                    <h2>What is AS?</h2>
                    <p>AS is a student organisation that brings together Aalto University students from many different fields. Our guild includes students from Automation and Robotics, Information Technology, Digital Systems and Design and other related programmes. The guild organises leisure activities for its members, looks after their interests in matters related to their studies and maintains relations with companies in the field.</p>
                </div>
                <img src={amfi} alt="" />
            </div>
            <div className={`even-columns ${style.frontpagebox}`}>
                <img className="no-mobile" src={sweets} alt="" />
                <div className={style.eventsContainer}>
                    <h2>Events</h2>
                    <EventList number={5} lang={pageContext.lang} />
                    <a href="https://calendar.google.com/calendar/embed?src=as.tiedottaja%40gmail.com&ctz=Europe%2FHelsinki" target="_blank">Events calendar</a>
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
