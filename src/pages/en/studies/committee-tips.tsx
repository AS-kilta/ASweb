import React, { useState } from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from '../../studies/studies.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import CollapseBox from '@src/components/common/CollapseBox';
import { BsDash, BsPlus } from 'react-icons/bs';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const CommitteeTips: React.FC<Props> = ({ pageContext }) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleCollapse = () => {
    setAllExpanded(!allExpanded);
  };

  const toggleOnEnter = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') toggleCollapse();
  };

  const translations: Translations = {
    openAll: {
      en: 'Open all',
    },
    closeAll: {
      en: 'Close all',
    },
  };

  const lang = pageContext.lang;

  return (
    <PageLayout pageContext={pageContext} title="Committee's tips">
      <div className={style.container}>
        <p>
          Welcome to the protip page of the AS study committee. Here you can find useful tips and links regarding your
          studies.
        </p>
        <p>
          The purpose of this section is to ease students to study more efficiently and bring up things that you didn't
          even know you needed! So this section primarily lists things including information that you can't easily find
          from Aalto University's own websites.
        </p>
        <p>
          This pro-tip page is only maintained by students, so you can also influence the content of this page if you
          wish. The updating of the page is handled by the Guild's Master of Studies opintomestari (at) as.fi, so please
          get in touch if you want to add beneficial material to the page.
        </p>
        <button className={style.toggleButton} onClick={toggleCollapse} onKeyDown={toggleOnEnter}>
          {allExpanded ? translations.closeAll[lang] : translations.openAll[lang]}
          {allExpanded ? <BsDash /> : <BsPlus />}
        </button>
        <div className={style.container}>
          <CollapseBox title={'Navigating in Otaniemi'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://kanttiinit.fi">Kanttiinit</a> - All student restaurants in Otaniemi. Opening hours and
                menus can be easily found there.
              </li>
              <li>
                <a href="https://www.aalto.fi/en/services/aalto-space-mobile-application">Aalto Space</a> - Mobile app
                to reserve rooms on campus. For example, for working on group projects.
              </li>
              <li>
                <a href="https://usefulaaltomap.fi/">Usefulaaltomap</a> - An accurate (and useful) map of Otaniemi. The
                map has details and information about the different buildings.
              </li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Studying'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://download.aalto.fi">download.aalto.fi</a> - Here you can find and download useful
                programs, which Aalto University has a license for. For example, MATLAB and Microsoft Office.
              </li>
              <li>
                <a href="https://vdi.aalto.fi">vdi.aalto.fi</a> - You can use this application to access school
                computers remotely, which is extremely useful if, for example, you encounter problems with your own
                computer and applications.
              </li>
              <li>
                <a href="https://aalto.cloud.panopto.eu/">Panopto</a> - Aalto's video platform
              </li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Groupwork'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://doodle.com/en/">Doodle</a> - Find suitable times for the meeting quickly and easily!
              </li>
              <li>
                <a href="https://drive.google.com">Google Drive</a> - A versatile tool for file storage and
                collaborative work.
              </li>
              <li>
                <a href="https://discord.com">discord.com</a> - A great application for group collaboration and
                communication, which allows, among other things, screen sharing during calls.
              </li>
            </ul>
          </CollapseBox>

          <CollapseBox title={'Healthcare'} expand={allExpanded}>
            <ul>
              <li>
                <a href="https://www.aalto.fi/en/palvelut/individual-counselling-by-study-and-career-counselling-psychologists">
                  Study and counselling psychologist services
                </a>{' '}
                - Low-threshold services for variety of issues relating to stress and what-not.
              </li>
            </ul>
            <h3 className={style.heading4}>FSHS</h3>
            <ul>
              <li>
                <a href="https://www.yths.fi/en/services/health-examination/oral-health-examination/">
                  Oral health examinations
                </a>{' '}
                - Proactive measures for having healthy and happy teeth.
              </li>
              <li>
                {' '}
                <a href="https://www.yths.fi/en/using-services/contact/">General and mental health services</a> - It's
                advisable to seek help early!
              </li>
              <li>In addition, there are many other health-related services available.</li>
            </ul>
          </CollapseBox>
        </div>
      </div>
    </PageLayout>
  );
};

export default CommitteeTips;

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Committee's tips" />;
