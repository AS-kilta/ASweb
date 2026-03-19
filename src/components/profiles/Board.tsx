import React from 'react';
import ContactCard from '@components/profiles/ContactCard';
import type { ContactInfo } from '@components/profiles/ContactCard';
import * as style from './Board.module.scss';

interface BoardMember {
  title: TranslatedEntry;
  name: string;
  email: string;
  phone?: string;
  telegram: string;
  picture?: any;
  description: TranslatedEntry;
}

const Board: React.FC<{ lang: string; data: BoardMember[] }> = ({ lang, data }) => {
  return (
    <div className={style.board}>
      {data.map((member) => {
        const contactData: ContactInfo = {
          ...member,
          title: member.title[lang],
          description: member.description[lang],
          picture: member.picture,
        };
        return <ContactCard key={member.name} data={contactData} />;
      })}
    </div>
  );
};

export default Board;
