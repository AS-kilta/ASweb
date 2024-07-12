import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./studies.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"

interface Props extends PageProps {
  data: ImageArrayProps
}

const Studies: React.FC<Props> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Studies">
      <div className={style.table}>
        <div className={style.list}>
          <p></p>
          <p>
            The AS study committee represents the interests of the AS students
            in the various institutions of the college and university. It
            communicates on the behalf of the students with these institutions,
            as well as directly with the school staff. If you are interested in
            discussing any peculiarities relating to your studies or want to
            give feedback, you can contact the opintomestari
            (opintomestari@as.fi).
          </p>
          <h2>Exam Archive (Tenttiarkisto)</h2>
          <div>
            <a href="https://tenttiarkisto.fi" target="_blank">
              Tenttiarkisto
            </a>{" "}
            is a student run website where you can find exam papers for previous
            instances of various courses. Students independently scan and public
            exams from different courses onto the website. It is a highly useful
            website for studying for exams you may have coming up.
          </div>

          <h2>FAQs</h2>
          <h3>
            1. I'm unable to attend a compulsory exam/lecture for a course, what
            should I do?
          </h3>
          <p>
            Contact your course's teachers and assistants as soon as possible.
            Their details are generally written on the Sisu course page and
            MyCourses. You can get alternate arrangements for course grading,
            through retake exams or extra assignments. Furthermore, many
            exam-based courses have retakes you can register for through Sisu.
          </p>

          <h3>
            2. I didn't like the structure or teaching methods of a course, or
            want to help improve its structure.
          </h3>
          <p>
            Teaching staff publish forms at the end of a course to understand
            and incorporate student feedback for future semesters. We can also
            provide feedback to relevant staff. You can also contact the study
            tutor (opintomestari@as.fi) or use the telegram bot
            (@ASFeedbackStudiesBot).
          </p>

          <h3>
            3. I wish to go on an exchange semester. What should I do / Whom
            should I contact?
          </h3>
          <p>
            Exchange semester registration typically occurs in January. Some
            slots can also be selected in the September application period. You
            can start your research from the website for exchange studies on
            <a href={"https://www.aalto.fi/en/other-studies/exchange-studies"}>
              aalto.fi
            </a>
            The preparation of an exchange semester is primarily done by a
            student, and therefore you will have to find a suitable destination,
            programme, and appropriate courses. We highly recommend contacting
            your relevant counselors for exchange semester guidance, ensuring
            you take care of ideal destinations, study plans, exchange grants,
            and so on! You can also refer to experiences and information from
            previous students through the Aalto travel reports{" "}
            <a
              href={
                "https://wiki.aalto.fi/pages/viewpage.action?pageId=130485578"
              }
            >
              wiki
            </a>
            .
          </p>

          <h3>
            4. I am struggling with certain aspects of my studies or want to
            take a break from them. Where can I get help?
          </h3>
          <p>
            If you are having issues with your study plan structure or want
            guidance on how to move forward with your degree, contact your study
            counselors through{" "}
            <a href={"https://mystudies.aalto.fi/s/"}>MyStudies</a>. You may
            also ask for help in career planning and stress management through
            study psychologists. This relevant support can be found through
            Aalto's{" "}
            <a
              href={
                "https://www.aalto.fi/en/services/where-to-get-guidance-and-support"
              }
            >
              support services
            </a>
          </p>
        </div>

        <div className={style.sidePanel}>
          <h2>Useful Links</h2>
          <div className={style.sideList}>
            General:
            <li>
              <a
                href="https://www.aalto.fi/en/student-guide/academic-calendar"
                target="_blank"
              >
                The University's Academic Calendar
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/school-of-electrical-engineering"
                target="_blank"
              >
                ELEC Website
              </a>
            </li>
            <li>
              <a href="https://www.ayy.fi/en" target="_blank">
                Aalto Student Union (AYY)
              </a>
            </li>
          </div>

          <div className={style.sideList}>
            Master's Degrees under AS:
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-automation-and-electrical-engineering"
                target="_blank"
              >
                Automation and Electrical Engineering
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-computer-communication-and-information-sciences/curriculum-2022-2024#2-acoustics-and-audio-technology--aat-"
                target="_blank"
              >
                Computer, Communication and Information Sciences
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/programmes/masters-programme-in-electronics-and-nanotechnology/curriculum-2022-2024#4-micro--and-nanoelectronic-circuit-design"
                target="_blank"
              >
                Electronics and Nanotechnology
              </a>
            </li>
          </div>

          <div className={style.sideList}>
            Courses and Minors:
            <li>
              <a href="https://courses.aalto.fi/" target="_blank">
                List of Courses at Aalto
              </a>
            </li>
            <li>
              <a href="https://www.aalto.fi/en/sivuaineet#/" target="_blank">
                List of Minor Subjets at Aalto
              </a>
            </li>
            <li>
              <a
                href="https://www.aalto.fi/en/other-studies/summer-studies"
                target="_blank"
              >
                Summer Courses
              </a>
            </li>
            <div className={style.sideList}>
              Exchange Studies:
              <li>
                <a
                  href="https://www.aalto.fi/en/other-studies/exchange-studies"
                  target="_blank"
                >
                  Aalto's official guide on exchange studies
                </a>
              </li>
              <li>
                <a
                  href="https://www.ayy.fi/en/apply-for-financial-support/scholarships"
                  target="_blank"
                >
                  The AYY scholarship stipend for exchange studies
                </a>
              </li>
            </div>
            <div className={style.sideList}>
              Guidance and Support:
              <li>
                <a href={"https://www.nyyti.fi/en/"}>
                  Nyyti.fi (mental health organization for students)
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.aalto.fi/en/services/where-to-get-guidance-and-support"
                  }
                >
                  Aalto's official guide on getting guidance and support
                </a>
              </li>
              <li>
                <a href={"https://mystudies.aalto.fi/s/"}>
                  MyStudies (Aalto study guidance counsellors)
                </a>
              </li>
            </div>
          </div>
          <StaticImage
            className="tall"
            src="../../../images/images/labrahommii.png"
            alt=""
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default Studies

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Studies" />
