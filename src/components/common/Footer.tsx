import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"

import * as style from "./Footer.module.scss"

interface SponsorData {
    node: {
        name: string,
        link: string,
        picture: string
    }
}

interface SponsorDataScheme {
    allSponsorsYaml: {
        edges: SponsorData[]
    }
}

const Sponsors: React.FC = () => {
    const data: SponsorDataScheme = useStaticQuery(graphql`
        query getSponsorData {
            allSponsorsYaml {
                edges {
                    node {
                        name
                        link
                        picture
                    }
                }
            }
        }
    `)

    return (
        <div id={style.sponsors}>
            {data.allSponsorsYaml.edges.map(entry =>
                <a className={style.sponsor} key={entry.node.name} href={entry.node.link}>
                    <img src={entry.node.picture} alt={entry.node.name} width={100} />
                </a>
            )}
        </div>
    )
}

interface Translations {
    [key:string]: TranslatedEntry;
}

const translations: Translations = {
    contact: {
        fi: "Ota yhteyttä",
        en: "Contact us"
    },
    aski: {
        fi: "Kiltahuone ASki",
        en: "Guild room ASki"
    },
    links: {
        fi: "Linkkejä",
        en: "Links"
    },
    forum: {
        fi: "Foorumi",
        en: "Forum"
    },
    ilmo: {
        fi: "Tapahtumailmot",
        en: "Event registration"
    },
    gallery: {
        fi: "Kuvagalleria",
        en: "Photo gallery"
    }
}

const Footer: React.FC<{lang: string}> = ({ lang }) => {
    return (
        <div id={style.footer}>
            <div id={style.content}>
                <div id={style.contact}>
                    <h1 className={style.title}>{translations.contact[lang]}</h1>
                    <p>Automaatio- ja systeemitekniikan kilta ry<br />
                    PL 15500<br />
                    00076 Aalto</p>
                    <p>{translations.aski[lang]}<br />
                    Maarintie 8<br />
                    02150 ESPOO</p>
                    <div id={style.some}>
                        <a href="https://instagram.com/askilta">
                            <BsInstagram />
                        </a>
                        <a href="https://facebook.com/askilta">
                            <BsFacebook />
                        </a>
                        <a href="https://github.com/as-kilta">
                            <BsGithub />
                        </a>
                    </div>
                </div>
                <div id={style.links}>
                    <h1 className={style.title}>{translations.links[lang]}</h1>
                    <div>
                        <a href="https://forum.as.fi">{translations.forum[lang]}</a>
                        <a href="https://ilmo.as.fi">{translations.ilmo[lang]}</a>
                        <a href="https://gallery.as.fi">{translations.gallery[lang]}</a>
                    </div>
                </div>
                <div id={style.partners}>
                    <h1 className={style.title}>AS Partners</h1>
                    <Sponsors />
                </div>
            </div>
        </div>
    )
}

export default Footer