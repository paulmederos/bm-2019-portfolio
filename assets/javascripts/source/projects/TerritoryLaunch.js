import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'


export default class TerritoryLaunch extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Territory Foods"}
        projectTitle={"Product + Brand Launch"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header territory">
          <div className="wrap" style={{marginBottom: "2em"}}>
            <img src="assets/images/header-territory-brand.png" />
          </div>
        </header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Launching the Territory brand for continued, sustained growth
          </h2>
          <p>
            Power Supply was tailored to a performance-oriented,
            CrossFit/Paleo loving customer. As our business grew,
            we learned that there was an opportunity to position our
            brand beyond performance-oriented folks.
          </p>

          <hr />

          <h3>Background</h3>

          <p>
            Power Supply helped fuel active folks with tasty,
            good-for-them food by working with local chefs to
            prepare and deliver meal plans. We were the "easy button"
            for people who wanted to eat Paleo or Vegetarian,
            without the hassle of meal prepping, shopping, or
            cooking.
          </p>
          <p>
            Through the life of Power Supply, we intentionally targeted
            performance eaters. We reached them through local communities—e.g. CrossFit
            gyms—where they spent their time at.
          </p>
          <p>
            Our lexicon included words
            like "meal prep", "macros", "Paleo-friendly", etc. You'd
            find our community builders at <i>the</i> CrossFit Games hanging
            with pro athletes; posting videos of themselves finishing
            deadlift reps; and using phrases like "fuel for an active
            life" or "nailing a PR" (a <i>personal record</i> for the
            not-yet-initiated.)
          </p>

          <p>
            But these performance eaters <b>weren't the only folks
            who found our product appealing, useful, and irreplaceable.</b>
          </p>

          <CaseStudyFigure
            imageUrl={"assets/images/studies/tl-research-traits.png"}
            subText={`In-depth interviews, high-volume surveys, and summative feedback helped us learn deeply about our customers.`}
          />

          <p>
            We were attracting other generally active, health-conscious
            achievers. These were folks who were constantly seeking
            adventure; folks who saw health as a holistic practice,
            <b>&nbsp;each person with their own path to wellness.</b>
          </p>
          <p>
            Some were
            parents with no time to cook dinner, but still yearned
            for something that fit their health goals. Some were
            tired of the same crappy lunch they ate at the office
            every day. Some folks really enjoyed cooking, but
            couldn't find the time to do it all the time.
          </p>

          <p>
            We uncovered a consistent thread running through <i>all&nbsp;</i>
            of our customers: <b>we were an easy source of "personalized
            nutrition" for them.</b>
          </p>

          <p>
            What's personalized nutrition? Well, when it comes to
            health, what's best for me most likely won't be what's
            best for you. That's because everyone has a different
            way of eating, with different goals, different likes and
            dislikes, things they may be allergic to, foods they eat
            based on a moral philosophy, or different foods they grew
            up eating based on their ethnic backgrounds.
          </p>

          <p>
            The way we built our product made it easy for folks to tell
            us how they wanted to eat, and then get that sort of food
            in a convenient way. We had the basics in place to serve
            the growing needs of personalized nutrition really well.
          </p>

          <ul>
            <li>Paleo, dairy-free, hold the tomatoes? ✅</li>
            <li>Low-carb, Mediterranean, small portions? ✅</li>
            <li>Vegetarian, without tree nuts, more than just salad? ✅</li>
          </ul>

          <p>
            Folks were "hacking" at our offering, using some of the
            very basic tools we gave them to put together meal plans
            that uniquely fit them.
          </p>

          <p>
            We believed that <b>if we spoke more directly to personalized
            nutrition, that we'd be able to grow by leaps and bounds.</b>
            It was time to chart our way through new territory, to
            set ourselves up for a future focused on personalized nutrition.
          </p>

          <CaseStudyFigure
            imageUrl={"assets/images/studies/tl-opportunity-chart.png"}
            subText={`Power Supply's brand was focused on the "performance-oriented + active"
            crowd, but through user research, we learned we could serve
            many other folks really well.`}
          />

          <hr />

          <h3>Objectives</h3>
          <p>We kicked-off the project with a few goals:</p>

          <section className="objectives">
            <h4>1. Position ourselves for personalized nutrition.</h4>
            <p>
              We believed that we could open ourselves to a broader audience by shifting from "performance eaters only" to "health-conscious achievers".
            </p>

            <h4>2. Level-up our design system for faster, more consistent production so we can experiment more quickly.</h4>
            <p>
              We were wrapping up an amazing 2016, and we had ambitious
              growth goals for 2017. We wanted to double-down on acquisition
              experiments, from cold-traffic online ads, to more targeted
              referral traffic from heavy-hitting influencers in our
              community.
            </p>
            <p>
              Having a stronger design system would help us 1)
              encourage more folks to prototype ideas, 2) produce work
              much more quickly, and 3) have a better UX through consistent
              application of the brand across the journey.
            </p>


            <h4>
              3. Launch quickly enough to take advantage of growth
              initiatives.
            </h4>
            <p>
              Many of our growth hypotheses relied on us having a
              more inclusive product offering / brand, so we could
              fine-tune experiments to specific types of customers.
              That meant we needed a crazy fast turnaround time:&nbsp;
              <i>3-to-6 months</i>, so that we'd be better positioned to
              find growth opportunities through the second half
              of 2017.
            </p>

            <h4>
              4. Elevate the perception of quality with the brand
            </h4>
            <p>
              Even though customers consistently raved about the
              food, they were less enthusiastic about the surrounding
              parts of the experience.
            </p>
            <p>
              For example: we bundled our
              meal packs in saran wrap because it was cost-effective,
              it got the job done, and it felt raw/real... &larr; all feelings
              we wanted to evoke from our earliest customers. But
              new customers would get their meals and wonder "what
              in the world is this? why so much plastic? Ew."
            </p>
            <p>
              We wanted to take this opportunity to level-up the
              way people perceived us, to reflect the incredibly
              high-quality nature of our food.
            </p>
          </section>

          <hr />

          <h3>Team & my role</h3>
          <p>
            Our customer journey spans so many different touch-points,
            both physical and digital. Bringing a product experience to life
            around personalized nutrition
            meant considering the customer experience across that
            entire journey. That meant we needed to pull together
            teammates from every discipline:
          </p>

          <ul>
            <li>Our CMO Robert lead the charge, supported by our CEO Patrick, COO Jeff, and myself acting as head of product design.</li>
            <li>Our in-house design team (Trisha, Susie, Erin, Chris) spanning brand experience, print, copywriting, and UX.</li>
            <li>Our product + engineering team</li>
            <li>A special team (the "Branditos") of cross-functional folks: culinary, logistics, sales, customer support, people ops, etc. to make sure we’ve covered all touch-points, for both customers and our partners (e.g. chefs, gyms)</li>
          </ul>

          <p>We also worked with external stakeholders throughout the initiative:</p>

          <ul>
            <li><a href="http://www.brandintersection.com/" target="_blank">Brand Intersection Group</a> conducted the earlier customer + brand research. We worked with a small team of 2–4 folks.</li>
            <li><a href="https://redantler.com/" target="_blank">Red Antler</a> helped us piece together our brand strategy based on the research, then execute on the rebrand (from naming to style guides.) We worked with a mid-sized team of 6–8 folks.</li>
          </ul>

          <CaseStudyFigure
            imageUrl={"assets/images/studies/tl-ra-team.jpg"}
            subText={`We worked with Red Antler's NYC studio through brand exercises like mood boarding to set the stage for brand explorations.`}
          />

          <p>
            Oh, and did I mention <b>we're a fully remote company</b>? Yup. 🔮
          </p>

          <p>
            As <b>Head of Product Design</b>, I worked closely with
            our exec team, brand partners, and our product teams to
            help define the brand strategy, and then bring the
            brand to life by executing details. I brought my deep
            understanding of customer needs, product vision, and
            technical constraints to make sure we built something
            great for our customers, that met our objectives and
            delivered on-time.
          </p>

          <hr />

          <h3>The Process</h3>
          <p>
            At the start of the project, I spent most of my time working with our stakeholders and partners to define the brand and coordinate the execution.
          </p>
          <p>
            One of my important contributions here was <b>streamlining
            the feedback/synthesis cycle so we could move super fast
            on multiple fronts, while keeping important folks in the
            loop</b>. I was involved in ideation, feedback, and critique
            with the Red Antler team. We worked together in a nice
            ping-pong fashion: we’d come together, identify the next
            piece, they’d go away to execute, then they’d come back
            for a presentation. I’d take the presentation to our
            teams, collect and synthesize feedback, then bring it
            back to the RA team for consideration.
          </p>

          <CaseStudyFigure
            imageUrl={"assets/images/studies/tl-feedback-loop.png"}
            subText={`Nailing a rapid feedback cadence was crucial to our relationship. It helped us hit our aggressive timeline and coordination goals.`}
          />

          <p>
            Once we had the brand principles and style guide in
            place, I was <b>responsible for making sure all our teams
            were aligned</b>. That meant sharing design principles
            and style guides with folks across the org. I fielded
            questions, and encouraged folks to solve their
            problems within the new brand guidelines. I directed
            many moving parts, from the look + feel of social
            campaigns, to the physical packaging production, to
            the architecture of our digital component library.
          </p>

          <p>
            As the project peaked, I spent most of my time
            in-the-trenches, <b>iterating on designs and shipping
            code</b>. One of my important contributions here was
            making decisions about the difficult trade-offs
            on what we needed for launch, vs the bits we could
            iron out later.
          </p>

          <CaseStudyFigure
            imageUrl={"assets/images/studies/tl-timeline-tradeoffs.png"}
            subText={`Prioritizing trade-offs and coordinating execution between teammates. Spreadsheets can be designer's best friend, sometimes 😉`}
          />

          <p>
            One of the most challenging parts of the rebrand was <b>figuring
              out the balancing act of a "big bang" release
            vs pushing out incremental changes</b>. Not only were we
            changing our brand, we also were shipping major product
            changes. We managed to test some of the product changes
            iteratively by releasing them under the old brand,
            while working on those features under the new brand
            behind-the-scenes.
          </p>

          <p>
            The process had it's trade-offs. After launching, we
            learned that we missed a few key pieces that we should
            have caught sooner. But <b>because we had the right systems
            in place to listen intently, we were able to act quickly,
            and the mistakes weren't costly</b>. We also used this
            post-launch time to polish and fine-tune the more rough
            parts of the experience, and to layer in parts that we
            intentionally left on the cutting room floor to ship
            on-time.
          </p>

          <hr />

          <h3>Key Results</h3>

          <p>
            We achieved all of our primary goals: we positioned
            ourselves to as enablers of personalized nutrition,
            we supported future efforts by building a robust design
            system, we elevated perception of our quality, and we
            launched by the end of Q2 to set us up for our 2017
            growth initiatives.
          </p>


          <ul>
            <li><b>A successful coordinated rebrand launch</b>, across our entire experience, from physical touch-points (meal label, pickup fridges, brochures) to digital experiences (landing pages, menus, ordering, lifecycle emails, newsletters, and ads.)</li>
            <li><b>Strategic partnerships established</b>—e.g. <a href="https://whole30.com/2017/05/whole30-approved-territory/" target="_blank">Whole30</a>, <a href="https://www.medstarhealth.org/mhs/healthy/" target="_blank">Medstar Healthy</a>—to highlight our emphasis on personalized nutrition.</li>
            <li><b>A flexible, consistent design system</b>, including brand style guide, component library, and interaction patterns, across shared tooling (Figma, React library) set us up for much faster + higher quality product development.</li>
            <li>Positive impact to key metrics (conversion, referral, retention), inc. positive responses from
              customers about new inclusive menu offerings, and a huge bump in <a href="https://twitter.com/round/status/864140838124879872" target="_blank">social</a> <a href="https://www.instagram.com/p/BaW8pJTBZUa/" target="_blank">sharing</a> (finally, <a href="https://www.instagram.com/p/Ba9-7igAwx8/" target="_blank">an</a> <a href="https://www.instagram.com/p/BaMUzqpHM5b/" target="_blank">Instagram</a>
              &nbsp;<a href="https://www.instagram.com/p/Bacrix6nOya/" target="_blank">worthy</a> <a href="https://www.instagram.com/p/BaFsC2cFmgD/" target="_blank">brand</a>! -- you <i>gotta</i> <a href="https://www.instagram.com/p/Baf7P2slQKe/" target="_blank">watch this one</a>.)</li>
            <li>Check out the site live here: <a href="https://www.territoryfoods.com?r=KALEYEAH" target="_blank">Territory Foods</a> (and get some free food on me via referral link!)</li>
          </ul>
        </div>

        <h3 className="carousel-title">Process / source shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container wip-shots" style={{ width: "2280px "}}>
            <li><Shot fileName={"territory-wip-01"} /></li>
            <li><Shot fileName={"territory-wip-02"} /></li>
            <li><Shot fileName={"territory-wip-03"} /></li>
            <li><Shot fileName={"territory-wip-05"} /></li>
            <li><Shot fileName={"territory-wip-06"} /></li>
          </ul>
        </div>

        <h3 className="carousel-title">Product shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container product-shots" style={{ width: "1780px "}}>
            <li><Shot fileName={"territory-product-01"} /> </li>
            <li><Shot fileName={"territory-product-02"} /></li>
            <li><Shot fileName={"territory-product-03"} /></li>
            <li><Shot fileName={"territory-product-04"} /></li>
            <li><Shot fileName={"territory-product-05"} /></li>
            <li><Shot fileName={"territory-product-06"} /></li>
          </ul>
        </div>

      </CaseStudyPage>
    )
  }

}
