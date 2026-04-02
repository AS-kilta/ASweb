import React from 'react';

import ProfileImg from '@components/profiles/ProfileImg';
import * as style from './Officials.module.scss';

interface Member {
  name: string;
  title: TranslatedEntry[];
  picture?: any;
  leader?: boolean;
}

interface Committee {
  name: TranslatedEntry;
  members: Member[];
}

interface OfficialCardProps {
  lang: string;
  committeeName: string;
  official: Member;
}

const OfficialCard: React.FC<OfficialCardProps> = ({ lang, committeeName, official }) => {
  const leader = official.leader ? style.leader : '';
  return (
    <div className={`${style.official_container} ${leader}`}>
      <ProfileImg src={official.picture} alt={official.name} />
      <div>{official.name}</div>
      {official.title.map((title, idx) => (
        <div key={`${committeeName}${official.name}${title[lang]}${idx}`} className={style.title}>
          {title[lang]}
        </div>
      ))}
    </div>
  );
};

const CommitteeSection: React.FC<{ lang: string; committee: Committee }> = ({ lang, committee }) => {
  const { name, members } = committee;
  return (
    <div className={style.officials_section}>
      <h2 className={style.heading2} id={name[lang]}>
        {name[lang]}
      </h2>
      <div className={style.officials_list}>
        {members.map((official) => (
          <OfficialCard
            key={`${committee.name[lang]}${official.name}`}
            committeeName={committee.name[lang]}
            lang={lang}
            official={official}
          />
        ))}
      </div>
    </div>
  );
};

const Officials: React.FC<{ lang: string; data: Committee[] }> = ({ lang, data }) => {
  return (
    <>
      {data.map((committee) => (
        <CommitteeSection key={committee.name[lang]} lang={lang} committee={committee} />
      ))}
    </>
  );
};

export default Officials;
