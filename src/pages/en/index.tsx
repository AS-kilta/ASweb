import React, { useState } from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import SnapWidget from "@src/components/instagram/SnapWidget"
import EventList from "@src/components/events/EventList"
import { BsArrowRepeat } from "react-icons/bs"
import * as style from '../index.module.scss'

import heroimg from "../../images/images/20201029195159-eef0d345-xx.jpg"
import sweets from "../../images/images/karkki_kalle.jpg"
import amfi from "../../images/images/20210917174935-70c53c15-xx.jpg"

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    // Some AS25 animation related stuff
    const [animationKey, setAnimationKey] = useState("foo")

    const resetAnimation = () => {
        if (animationKey === "foo")
            setAnimationKey("bar")
        else
            setAnimationKey("foo")
    }
    // End of AS25 animation related stuff

    return (
        <PageLayout
            pageContext={pageContext}
            title="Guild of Automation and Systems Technology"
            background={heroimg}
            heroHeight="tall"
        >
            {/* Begin AS25 animation related stuff */}
            <iframe 
                key={animationKey}
                style={{width: "100%", height: "clamp(10rem, 30vw, 20rem)", maxWidth: "100%", zIndex: 0, border: 0}}
                src="/demo/index.html?text=Congrats%20AS%2025yo!"
            ></iframe>
            <div style={{textAlign: "center", margin: "1rem auto"}}>
                <button
                    style={{textAlign: "center", border: 0, background: "none", fontStyle: "italic", color: "gray", fontFamily: "Montserrat Variable, sans-serif"}}
                    onClick={resetAnimation}
                >
                    <BsArrowRepeat style={{verticalAlign: "middle"}} /> Repeat
                </button>
            </div>
            {/* End of AS25 animation related stuff */}
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
