import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'

export default class ElementumTransport extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Elementum"}
        projectTitle={"Transport app"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header elementum-transport"></header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Real-time logistics visibility and supply chain management.
          </h2>

          <hr />

          <h3>The Problem</h3>

          <p>
            Shipment tracking and carrier management is hard, especially for
            large global manufacturing companies like Dyson. If the logistics
            manager is lucky, they only have one carrier relationship, like
            Fedex, that they have to manage. But usually, like in Dyson’s case,
            they work with 3 or more carriers servicing all of their
            global markets.
          </p>
          <p>
            Keeping tabs on all their shipments (we're talking 1,000s
            of shipments in-transit on any given day) can be almost impossible.
          </p>
          <p>
            Monitoring their shipments means logging into each of the
            individual carrier's websites, tracking down the shipment's
            status and then reporting the findings and metrics back to
            their team. Lots of spreadsheets are passed around. These
            spreadsheets can become quickly outdated (almost the moment they
            are sent.) Lastly, confusion stems from the
            digging-through-email-to-track-who-said-what ritual.
          </p>
          <p>
            What logistics managers need is one place to manage and
            monitor all their shipments and carriers, while keeping their
            team in the loop. The answers to these questions rely on real
            time up-to-date information, which is not always available or
            can be a painstaking process to hunt down. Enter Transport.
          </p>

          <iframe width="100%" height="360" src="https://www.youtube.com/embed/sK4S6klZvDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h3>Users &amp; Audience</h3>

          <p>
            The current target users of Transport are logistic managers or
            inventory specialists for large global manufacturing companies
            that work with multiple carriers.
          </p>

          <p>
            The important thing to note about our users is that they are
            not using these tools because they like them: they're using
            it to get a job done. They have a goal defined by their position
            that they need to accomplish, and they are given the tools
            they use. Our users are considered “prepared users”, in that
            they can easily articulate what it is they do with their
            current tools to get their job done and what they feel is
            missing or could be improved upon.
          </p>

          <p>
            The biggest complexity with these users is that
            every supply chain or business process is defined and
            carried out a little differently. The Transport application
            had to work for multiple industries from consumer electronics,
            to automotive, to pharmaceutical, to industrial and telecom.
          </p>

          <p>
            Finding the common goals and solutions across logistics in
            these different industries continues to be a fun and
            invigorating challenge for Transport as a product.
          </p>

          <h3>Team &amp; Stakeholders</h3>

          <p>
            <b>Product Team</b><br />
              I worked closely with my Product manager (PM), engineering
              and design team. My PM and I work together to prioritize the
              backlog of seemingly endless problem statements and features
              to tackle those; we work with the engineering team to help
              scope the potential features and brainstorm ideas for the
              multiple ways to implement them.
          </p>

          <p>
            <b>Design Team</b><br />
            I worked with the cross-company design team (interaction and
              visual designers) to ensure consistency across our platform
              by using reusable components and style guide patterns when
              possible. Elementum has 3 main applications: Transport,
              Exposure, and Manufacture. All run on the same platform,
              so it’s important to keep in-sync with the design team.
            </p>

          <p>
            <b>Customers</b><br />
            I’ve gone out into the field to perform usability
            research with our client's logistics and inventory teams
            to gather feedback and validate concepts.
          </p>

          <h3>Constraints</h3>

          <p>
            <b>Partial data / data quality</b><br />
            Transport relies on carriers and suppliers to seed data into
            our platform. The perfect shipment contains a ton of detailed
            information. Unfortunately, we don't always get 100% of that
            information. This has been my biggest (and most rewarding)
            challenge. We had to: 1) design an interface that is flexible
            enough to accommodate the least amount of info we could
            receive; 2.) intelligently tell the logistic manager why we
            didn’t receive certain pieces of information, 3.) provide
            steps they can take to find the missing data.
          </p>

          <p>
            <b>Balancing customer requests with what’s best for the product</b><br />
            When building for your first customers, you want to maintain a
            great relationship. For enterprise software, that means
            accommodating specific requests from your customers which
            reshuffle other priorities. We had to peel the layers off a
            request to get at the heart of a problem, all the while taking
            the customer through the process with us.
          </p>

          <p>
            <b>Keeping consistency across web and mobile</b><br />
            Designing an application that has both web and mobile presence
            is interesting when most of your users are desktop power users.
            Defining the appropriate context (where and how the user was
              trying to get their work done) and then designing for those
              contexts are challenging.
            </p>

          <p>
            For example: the shared "search or filter" component was a
            balance between Elementum design (For the web) and native
            components (for iOS and Android.) If I added a new filter category
            to web I would have to make sure mobile was also updated
            (iPhone and Android.) It was ~4x the work!
          </p>

          <h3>Design Process</h3>

          <p>
            The overarching process was pretty similar, plus or minus a couple of the following steps:
          </p>

          <CaseStudyFigure
            imageUrl={"http://cl.ly/image/123C1I3r3j0n/design%20framework.png"}
          />

          <p>
            First stop would be the kickoff: I'd get together with our PM
            to go through the backlog of features and customer requests,
            and re-prioritize them on a weekly basis. I would facilitate these
            exploration sessions through whiteboard documentation or design
            exercises (so many sticky notes.)
          </p>

          <p>
            I'd take notes (and document photos) throughout our discussion
            so that we could walk away with action items. Then I'd head back
            to my computer to document the notes and begin sketching flow
            diagrams or layout concepts.
          </p>

          <CaseStudyFigure
            imageUrl={"https://s3.amazonaws.com/f.cl.ly/items/033G0N2q0D2L3B203s0l/transport-process.jpg"}
            subText={"I ♥ whiteboards for capturing ideas during exploration sessions."}
          />

          <p>
            At certain checkpoints, it was time to review the various
            iterations (and the new insights/problems/ideas) that I'd worked
            through with my PM. After those were addressed, I may have
            jumped into a prototype to get a better feel for the flow,
            interactions, and general usability with our more refined
            problem/goal in mind.
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-transport-iterations.jpg"}
            subText={"Iterations, iterations, and more iterations. You see that V9 there? That's only the start."}
          />

          <p>
            Often, I'd socialize my thoughts with the design team.
            We'd help each other identify if there is a common pattern
            already in place that I could consider using to speed up the
            implementation, or if this problem presented a new pattern.
            If a new pattern was identified, we'd document it and add it
            to the pattern library for the next time.
          </p>

          <p>
            Once layouts, flows, and basic interactions were mocked, I
            would work with my visual designer to get the full high-fidelity
            comps ready for review with the product team.
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-transport-team.jpg"}
            subText={"The design team catching up on patterns."}
          />

          <p>
            Elementum works with a variety of collaboration tools
            (like Confluence, Google Docs, and Jira.) The design
            team is fully integrated with the rest of the company.
            We followed this process for all of the features that make
            up Transport today.
          </p>

          <CaseStudyFigure
            imageUrl={"https://s3.amazonaws.com/f.cl.ly/items/0C1a3K1o3m11013O0m0O/multi-apps.jpg"}
            subText={"Posting our designs for the company was a great way to get feedback and keep people in the loop."}
          />

          <CaseStudyFigure
            imageUrl={"https://cl.ly/image/200G11301W0g/DSC_3514.JPG"}
            subText={"I'd have an inspiration mood board that I'd constantly update with designs I'd want to meld into Elementum's style."}
          />

          <h3>The Result</h3>

          <p>
            Transport is now supporting large companies like Dyson and
            Flextronics with a fully functioning web, iOS, and Android
            app that provides a single place for logistics managers and
            inventory specialists to check the latest up-to-date
            shipment information.
          </p>

          <h3>Retrospective</h3>

          <p>
            <b>Make consistent user research a part of your process.</b><br />
            There is only so much time in the day, but I always wish there was
            more time for customer feedback and user research. We have
            performed lightweight, guerrilla research at Starbucks coffee
            shops, remote usability sessions, and even in-person
            workshops with some of our current customers, but it wasn't
            consistent. I’m always in awe at the gold mine of
            information and clarity these sessions bring.
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-transport-dyson_research_trip.jpg"}
            subText={"Dyson research trip: card sorting activity to dive into the minds of our customers."}
          />

          <p>
            <b>Quantitative analytics can clarify design decisions.</b><br />
            The right combination of qualitative and quantitative data can
            be a tremendous help in deciding design direction. There were
            times when I wish I had more data, and there were times when
            data made certain decisions dead simple.
          </p>

          <p>
            <b>Be flexible with your tools</b><br />
          Ever since the start of the project I have been experimenting
          with multiple prototyping tools.
          <a href="http://writing.enchant.co/2014/11/28/top-prototyping-tools-for-interaction-designers/">I wrote about it on my blog here</a>.
          I’ve also been balancing my documentation between the collaborative
          Google docs or the well organized Confluence. I’m always
          striving for the same thing, get everyone on the same page
          and keep the process well documented and up to date.
        </p>
      </div>

        {/* <h3 className="carousel-title">Process / source shots</h3>
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
        </div> */}

      </CaseStudyPage>
    )
  }

}
