import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import heropic from "@src/images/images/IMG_6067-Edit.jpg"

const Teekkariculture: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title='Teekkariculture'
      background={heropic}
      heroHeight='short'
    >

        <h2 id='overalls'>Overalls</h2>

        <div>
          <p>Overalls are an accessory by which a teekkari can be recognized. Overalls are used in many occasions when you travel in public places as a teekkari. Each guild has its own colored overalls. In other words, they are the uniform of a teekkari.</p>
          <p>Overalls have been created for hard use and, especially around Wappu, they are almost essential equipment for every teekkari and fuksi. Overalls are also fun to tinker with in your free time, for example by sewing overall patches that have been exchanged with others or parts of overalls.</p>
          <p>Overalls create cohesion and attract attention. Remember, however, that in the overalls you represent all teekkaris and teekkarius, so your behavior should also be in line with that. Automation and systems technology students wear purple overalls with a black sleeve. When the AS program was founded under computer science, the first AS students acquired purple sleeves for the Computer Science Guild's black overalls to stand out as their own group. The following year, when the AS students founded their own guild, it was decided to have purple overalls with a black sleeve for the guild as a reminder of our roots in the  Computer Science Guild. The black sleeve has a white pocket as a reminder that one of our majors, information technology, has moved under the AS guild from the Guild of Electrical Engineering. The overalls now also have an arduino blue thigh pocket, which takes into account one of the majors, Digital Systems and Design.</p>
          <p>Remember that overalls should generally not be washed! Every stain and scratch tells about experiences. New fuksis receive AS's beautiful purple overalls in the fall, usually between October and November.</p>
        </div>

        <h3 id='ordering'> Ordering </h3>

        <div>
          <p>Overalls can be ordered during the orientation week. Additional orders will be expensive, so if you are going to order, you should do it as soon as possible! The order is binding.</p>
          <p>The value of the overalls is around 80€, but the guild supports overalls orders so that the first overalls for fuksis cost around 30€. Don't forget to get yourself a nice belt!</p>
          <p>If you notice something wrong about the overalls, please report it immediately. Defects caused by manufacturing errors will be repaired. Not all parts, such as the buttons and the zipper, can withstand heavy use, but they are quite easy to fix yourself. Ask older guild members for tips.</p>
        </div>

        <h2 id='teekkari-cap'> Teekkari Cap </h2>

        <div>
          <p>Teekkari cap is the emblem of teekkari, which you can put on your head at your first Wappu. The current model of the teekkari cap has been hanging around the heads of teekkaris for more than a hundred years. On the surface, it resembles an ordinary student cap, but its six corners, black bushy tassel and gearwheel cockade signal the wearer's dignity from afar.</p>
        </div>

        <h3 id='right-to-use'> The right to use the teekkari cap </h3>

        <div>
          <p>Not just anyone can wear a teekkari cap - it has to be earned. Every fuksi who has excelled in their first year will be able to put the cap on their head at the possibly organized Wappu at exactly midnight. In autumn, the cap is lowered again at one of the biggest parties of the year, the Lakilaskijaiset on the last day of September.</p>
        </div>

    </PageLayout>
  )
}

export default Teekkariculture

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Teekkariculture" />
)
