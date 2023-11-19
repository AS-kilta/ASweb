import React from "react"
import ProfileImg from "./ProfileImg"
import * as style from "./ContactCard.module.scss"
import { BsTelephoneFill, BsEnvelope, BsTelegram } from "react-icons/bs"

export interface ContactInfo {
    title: string,
    name: string,
    email: string,
    phone: string,
    telegram: string,
    description?: string,
    picture?: DynamicImageData | string
}

const ContactCard: React.FC<{data: ContactInfo}> = ({data}) => {
    return (
      <div className={style.contact_card}>
        <ProfileImg src={data.picture} alt={data.name} />
        <div className={style.title}>{data.title}</div>
        <div>{data.name}</div>
        <div className={style.icon_field}>
            <BsEnvelope />
            <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div className={style.icon_field}>
            <BsTelephoneFill />
            <a href={`tel:${data.phone.replace(/\s+/g, "")}`}>{data.phone}</a>
        </div>
        <div className={style.icon_field}>
            <BsTelegram />
            <a href={`https://t.me/${data.telegram}`}>{data.telegram}</a>
        </div>
        {data.description && <p>{data.description}</p>}
      </div>
    )
}

export default ContactCard
