import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import * as style from './../../studies/studies.module.scss';
import PageLayout from '@src/components/layouts/PageLayout';
import { StaticImage } from 'gatsby-plugin-image';

interface Props extends PageProps {
  data: ImageArrayProps;
}

const Advocacy: React.FC<Props> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Advocacy">
      <div>
        <p>
          At Aalto, we believe in the power of advocacy to drive positive change and create a more inclusive and
          welcoming environment for all. Therefore, it is essential for everyone to be aware of their rights and
          surroundings, ensuring that their voices are not only heard but also respected and acted upon.
        </p>
        <h2>Halloped</h2>
        <p>
          Hallopeds are students chosen by the student union (AYY) to represent all students in university decisions.
          They bring in new ideas and ensure students' voices are heard in meetings with the representative board. Any
          Aalto student can apply to be a Halloped through an open application process.
        </p>
        <p>
          Applications are accepted through the halloped.fi portal every autumn. If you're uncertain about the
          positions, feel free to ask. Inform the Master of Studies or any board member, so that we can collaborate
          closely within the guild.
        </p>
        <p>
          More information about Hallopeds can be found{' '}
          <a href="https://beta.halloped.fi/aalto.fi/get-started" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>

        <StaticImage className={style.imageLarge} src="../../../images/images/hallopedihommii.png" alt="" />

        <h2>Administration</h2>
        <h3>Academic Committee for Electrical Engineering</h3>
        <p>
          The Academic Committee is one of the university's most important decision-making bodies, led by the college
          dean. It works to improve research and teaching quality by deciding on the curriculum, degree requirements,
          and student selection criteria. Additionally, it helps organize university events and awards honorary
          doctorates.
        </p>

        <h3>Boards of Education</h3>
        <p>
          Each degree program has an education council. As a member of the education councils, you can
          <ul>
            <li>Influence curricula, degree requirements, and student selection criteria.</li>
            <li>Participate in the development of educational programs.</li>
            <li>Contribute to processing feedback. </li>
            <li>Appoint thesis approvers.</li>
            <li>Make decisions regarding thesis subjects, supervisors, and evaluation.</li>
            <li>Accept evaluations of thesis work.</li>
          </ul>
          For English-speaking AS members, the following education councils may be relevant:
          <ul>
            <li>Aalto Science and Technology Bachelor Programme Committee (SCI, ELEC, CHEM, ENG)</li>
            <li>Degree Programme Committee of Bachelor's Programmes in Electronics, Communications, and Automation</li>
            <li>Degree Programme Committee for Automation and Electrical Engineering</li>
            <li>Degree Programme Committee for Electronics and Nanotechnology</li>
            <li>Degree Programme Committee for Computer, Communications, and Information Sciences</li>
          </ul>
        </p>

        <h3>Quality of Education Committee</h3>
        <p>
          The Quality of Education Committee, or QEC, focuses on improving teaching methods, setting teaching fees, and
          evaluating teaching practices. They also organize informal discussions and training events where staff can
          discuss current topics. QEC works closely with school management, departments, learning services, and guild
          representatives to enhance teaching. They aim to improve teaching practices in line with Aalto University's
          goals, as well as address other important areas of development. They also assess teaching skills during hiring
          and promotions.
        </p>
        <h3>Doctoral Education Council</h3>
        <p>
          The Doctoral Education Council supervises education for graduate students, often including postgraduates as
          student members. Its main responsibilities include:
          <ul>
            <li>Developing the content and structure of the university's doctoral education.</li>
            <li>Presenting research field proposals to the academic committee for further education.</li>
            <li>Making recommendations to the dean regarding the acceptance of graduate students.</li>
            <li>Appointing preliminary examiners for dissertation work and granting permission for dissertations.</li>
            <li>Selecting opponents for dissertations and providing feedback.</li>
            <li>Appointing examiners for licentiate examinations and evaluating licentiate research.</li>
            <li>Handling other tasks assigned by the dean or specified in degree regulations.</li>
          </ul>
          Additionally, unless specifically assigned to the chairman, the council is responsible for:
          <ul>
            <li>Nominating responsible professors and supervisors for graduate students.</li>
            <li>Determining the degree language, thesis topic, and language for graduate degrees.</li>
            <li>Approving graduate students' study plans.</li>
            <li>Deciding on the timing and language of dissertation conferences and appointing curators.</li>
          </ul>
        </p>
      </div>
    </PageLayout>
  );
};

export default Advocacy;

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Advocacy" />;
