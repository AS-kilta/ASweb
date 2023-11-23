import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"

import * as style from "./Footer.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

interface SponsorData {
    node: {
        name: string,
        link: string,
        picture: DynamicImageData,
    }
}

interface SponsorDataScheme {
    allSponsorsYaml: {
        edges: SponsorData[]
    }
}

const Sponsor: React.FC<{image: DynamicImageData, name: string}> = ({image, name}) => {
    if (image != null)
        return (
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name}/>
        )
    else
        return (
            <text>{name}</text>
    )
}

const Sponsors: React.FC = () => {
    const data: SponsorDataScheme = useStaticQuery(graphql`
        query getSponsorData {
            allSponsorsYaml {
                edges {
                    node {
                        name
                        link
                        picture {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 100
                                    placeholder: BLURRED
                                    backgroundColor: "transparent"
                                    transformOptions: {fit: CONTAIN}
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div id={style.sponsors} className={style.sponsorgap}>
            {data.allSponsorsYaml.edges.map(entry =>
                <a className={style.sponsor} key={entry.node.name} href={entry.node.link}>
                    <Sponsor image={entry.node.picture} name={entry.node.name}/>
                </a>
            )}
        </div>
    )
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
                    <div className={style.title}>{translations.contact[lang]}</div>
                    <p>Automaatio- ja systeemitekniikan kilta ry<br />
                    PL 15500<br />
                    00076 Aalto</p>
                    <p>{translations.aski[lang]}<br />
                    Maarintie 8<br />
                    02150 ESPOO</p>
                    <div id={style.some}>
                        <a href="https://instagram.com/askilta">
                            <BsInstagram />
                            <span className="visually-hidden">Instagram</span>
                        </a>
                        <a href="https://facebook.com/askilta">
                            <BsFacebook />
                            <span className="visually-hidden">Facebook</span>
                        </a>
                        <a href="https://github.com/as-kilta">
                            <BsGithub />
                            <span className="visually-hidden">Github</span>
                        </a>
                    </div>
                </div>
                <div id={style.links}>
                    <div className={style.title}>{translations.links[lang]}</div>
                    <div>
                        <a href="https://forum.as.fi">{translations.forum[lang]}</a>
                        <a href="https://ilmo.as.fi">{translations.ilmo[lang]}</a>
                        <a href="https://gallery.as.fi">{translations.gallery[lang]}</a>
                    </div>
                </div>
                <div id={style.partners}>
                    <div className={style.title}>AS Partners</div>
                    <Sponsors />
                </div>
            </div>
        </div>
    )
}

export default Footer
