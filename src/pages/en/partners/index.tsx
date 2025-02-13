import React from 'react';
import { graphql } from 'gatsby';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';
import ContactCard, { ContactInfo } from '@src/components/profiles/ContactCard';
import CircleCard from '@src/components/common/CircleCard';
import * as style from '@src/pages/partners/partners.module.scss';
import heroPic from '@src/images/images/DSC_0376.jpg';
import { StaticImage } from 'gatsby-plugin-image';

interface Props extends PageProps {
  data: ImageFileProps;
}

const Partners: React.FC<Props> = ({ pageContext, data }) => {
  const ysvData: ContactInfo = {
    title: 'Head of Corporate Relations',
    name: 'Säde Mikkonen',
    email: 'yrityssuhdevastaava@as.fi',
    phone: '+358 458871514',
    picture: data.file,
    telegram: '@mikksad',
  };

  return (
    <PageLayout pageContext={pageContext} background={heroPic} heroHeight="short" title="Corporate Relations">
      <div className={style.introduction}>
        <ContactCard data={ysvData} />
        <p className={style.intro_quote}>
          Hello company representative! I am the Head of Corporate Relations in the Guild of Automation and Systems
          Technology. We are always open to new collaborations and partners! On this page you can find more information
          about cooperation opportunities. Contact me and we'll talk more and tailor a package just right for you!
        </p>
      </div>

      <h2>Cooperation with the guild</h2>
      <p>
        <strong>
          The Guild of Automation and Systems Technology is an organization for students of Automation and Robotics,
          Information Technology and Digital Systems and Design at Aalto University's School of Electrical Engineering.
          The guild offers its members a variety of pastimes throughout the year, not only for relaxation from studies,
          but also to increase their own knowledge and skills in various hobby activities.
        </strong>
      </p>
      <div>
        <StaticImage className="image wide" src="../../../images/images/DSC01613.jpg" alt="" />
        <p>
          Over the course of the years of study, our members grow into new experts in automation, robotics, smart
          devices, as well as data networks, machine learning and signal processing. Most find employment in their field
          as consultants, software developers or demanding research and development tasks.
        </p>
      </div>
      <p>
        Young experts are hard currency on the job market, and many of us strive to acquire work experience in the field
        already during our studies. Through our guild, it is possible to effectively reach a considerable number of
        future professionals at an early stage. Many companies have become our partners in order to gain more visibility
        and at the same time support our guild's activities. Below are some of the most common ways of cooperation.
      </p>

      <h2>Forms of cooperation</h2>
      <div className={style.table}>
        <CircleCard title="Recruiting visibility" link="./partners#Recruiting" targetSelf={true} />
        <CircleCard title="Overalls" link="./partners#Overalls" targetSelf={true} />
        <CircleCard title="Excursions" link="./partners#Excursions" targetSelf={true} />
        <CircleCard title="Events" link="./partners#Events" targetSelf={true} />
        <CircleCard title="Annual ball" link="./partners#Annual-ball" targetSelf={true} />
        <CircleCard title="Guild room" link="./partners#Guild-room" targetSelf={true} />
      </div>
      <h3 id="Recruiting">Recruiting visibility</h3>
      <div>
        <p>
          We are happy to share the recruitment announcements of the companies that have supported us on our channels.
          <strong> On our recruitment channel </strong>, your job ads reach up to 500 of our members, and on social
          media, we reach more than a thousand people with our publications.
          <StaticImage className="image wide" src="../../../images/images/IMG_0533.jpg" alt="" /> We also publish our
          own guild magazine, GT, where it is possible to get space for advertisements or even articles. We also
          organize an annual UraTiKAS recruitment fair together with the computer science students' Computer Science
          Guild, and correspondingly a Corporate Brunch with the Guild of Electrical Engineering and the Guild of
          Bioinformation Technology, Inkubio. These events are important contact forums between industry companies and
          students.
        </p>
      </div>

      <h3 id="Overalls">Overalls</h3>
      <div>
        <StaticImage className="image wide up" src="../../../images/images/yj_alkupamaus_2017-100.jpg" alt="" />
        <p>
          <strong>The overalls </strong>identify the student. About 300 new students start in our guild every year, and
          the number has been growing year by year. During the first fall, new students will receive student overalls
          with the logos of our partners printed on them. The logo on the overalls guarantees visibility wherever guild
          members in overalls walk.
        </p>
      </div>

      <h3 id="Excursions">Excursions</h3>
      <div>
        <StaticImage className="image wide up" src="../../../images/images/DSC01523.jpg" alt="" />
        <p>
          With <strong> excursions, </strong>companies get to talk about themselves and present their activities at
          their own office. A group of motivated students who want to get to know their potential employer are going on
          the trip in a happy mood. In many cases, the excursions have been accompanied by some more hands-on parts in
          addition to the presentation, which makes the experience more memorable.
        </p>
      </div>

      <h3 id="Events">Events</h3>
      <div>
        <StaticImage className="image box up" src="../../../images/images/karkki_kalle.jpg" alt="" />
        <p>
          Student events are a big part of many students' everyday life. Throughout the year, we organize numerous
          different events for our members, from smaller sauna evenings to large table parties. By being part of our
          events, your company will gain valuable visibility among students. Company representatives also have the
          opportunity to participate in events and meet our students.
        </p>
      </div>

      <h3 id="Annual-ball">Annual ball</h3>
      <p>
        Stimulation is our guild's annual party, in which several hundred students and alumni from our guild and other
        Aalto University organizations participate every year. The anniversary party is divided into two parts, the
        cocktail party and the main party itself. Both events are a great opportunity for partner companies to be
        visible among the partygoers, for example in the form of speeches and logo visibility. The partners are also
        visible outside of the celebrations, because the marketing for the anniversary celebrations starts already in
        early autumn, and the memories of the celebrations remain in the mind for a long time even after the
        festivities.
      </p>

      <h3 id="Guild-room">Guild room</h3>
      <p>
        A large number of students spend time in our guild room, ASki every day. The guild room has the opportunity to
        play games, hang out with friends, study and enjoy some coffee. In order for guild members to always have a good
        place to be, we need the help of partners to make the guild room more comfortable. For example, it is possible
        to visit ASki or leave company merch to increase the visibility of your company!
      </p>

      <h3>... and a lot more too!</h3>
      <p>
        The entire guild activity is the sum of many small parts. We maintain our guild room ASki on the premises of the
        university, which serves as a living room for guild members during lectures and other school holidays.
        Throughout the year, we organize numerous different events for our members, from small sauna evenings to our
        valuable annual celebration, Stimulation. By supporting, for example, our needs, purchases or our events, you
        can get more visibility for yourself in these. In recent years, for example, representatives of our partner
        companies have participated in the Stimulation!
      </p>
    </PageLayout>
  );
};

export default Partners;

const description: string =
  'Hello company representative! On this page you can find more information about cooperation opportunities.';

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Corporate relations" description={description} />;

export const query = graphql`
  query ImgQuery {
    file(relativePath: { eq: "officials/2025/sade_mikkonen.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;
