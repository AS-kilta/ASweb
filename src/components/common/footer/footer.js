import React from "react"
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"

import * as style from "./footer.module.scss"

export default function Footer() {
    return (
        <div id={style.footer}>
            <div id={style.content}>
                <div id={style.contact}>
                    <p>Automaatio- ja systeemitekniikan kilta ry<br />
                    PL 15500<br />
                    00076 Aalto</p>
                    <p>Kiltahuone ASki<br />
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
                <div id={style.partners}>
                    <h1 id={style.partnersTitle}>Partners</h1>
                </div>
            </div>
        </div>
    )
}
