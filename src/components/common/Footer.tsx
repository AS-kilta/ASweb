import React from 'react';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

import * as style from './Footer.module.scss';

interface SponsorData {
  name: string;
  link: string;
  picture?: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
}

const Sponsor: React.FC<{ image?: SponsorData['picture']; name: string }> = ({ image, name }) => {
  if (image != null)
    return <img src={image.src} width={100} alt={name} style={{ objectFit: 'contain' }} />;
  else return <span>{name}</span>;
};

const Sponsors: React.FC<{ sponsors: SponsorData[] }> = ({ sponsors }) => {
  return (
    <div id={style.sponsors}>
      {sponsors.map((entry) => (
        <a className={style.sponsor} key={entry.name} href={entry.link}>
          <Sponsor image={entry.picture} name={entry.name} />
        </a>
      ))}
    </div>
  );
};

const translations: Translations = {
  contact: {
    fi: 'Ota yhteyttä',
    en: 'Contact us',
  },
  aski: {
    fi: 'Kiltahuone ASki',
    en: 'Guild room ASki',
  },
  links: {
    fi: 'Linkkejä',
    en: 'Links',
  },
  forum: {
    fi: 'Foorumi',
    en: 'Forum',
  },
  ilmo: {
    fi: 'Tapahtumailmot',
    en: 'Event registration',
  },
  gallery: {
    fi: 'Kuvagalleria',
    en: 'Photo gallery',
  },
};

const Footer: React.FC<{ lang: 'fi' | 'en'; sponsors: SponsorData[] }> = ({ lang, sponsors }) => {
  return (
    <div id={style.footer}>
      <div id={style.content}>
        <div id={style.contact}>
          <div className={style.title}>{translations.contact[lang]}</div>
          <p>
            Automaatio- ja systeemitekniikan kilta ry
            <br />
            PL 15500
            <br />
            00076 Aalto
          </p>
          <p>
            {translations.aski[lang]}
            <br />
            Maarintie 8<br />
            02150 ESPOO
          </p>
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
          <Sponsors sponsors={sponsors} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
