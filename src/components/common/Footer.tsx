import React from "react"
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"
import SponsorData from "../../data/sponsors"

import style from "./Footer.module.scss"

const Sponsors: React.FC = () => {
    return (
        <div id={style.sponsors}>
            {SponsorData.map(sponsor =>
                <a className={style.sponsor} key={sponsor.name} href={sponsor.link}>
                    <img src={sponsor.picture} alt={sponsor.name} width={100} />
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
