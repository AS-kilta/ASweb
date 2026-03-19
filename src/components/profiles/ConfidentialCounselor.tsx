import React from 'react';
import ContactCard from '@components/profiles/ContactCard';
import type { ContactInfo } from '@components/profiles/ContactCard';
import * as style from './ConfidentialCounselor.module.scss';

interface Counselor {
  title: TranslatedEntry;
  name: string;
  email: string;
  phone?: string;
  telegram: string;
  picture?: any;
  description?: TranslatedEntry;
}

const ConfidentialCounselors: React.FC<{ lang: 'fi' | 'en'; data: Counselor[] }> = ({ lang, data }) => {
  return (
    <div className={style.counselor}>
      {data.map((member) => {
        const contactData: ContactInfo = {
          ...member,
          title: member.title[lang],
          description: member.description ? member.description[lang] : undefined,
        };
        return <ContactCard key={member.name} data={contactData} />;
      })}
    </div>
  );
};

export default ConfidentialCounselors;
