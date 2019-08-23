import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'

export default class ElementumSituation extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Elementum"}
        projectTitle={"Situation app"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header elementum-situation"></header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Designing a control room to inspire collaboation between operational teams.
          </h2>

          <hr />

          <h3>The Problem</h3>

          <p>
            Funny enough, the Situation Room started at an internal company hackathon.
            Each participant was given free range to build whatever could be built on
            Elementum’s current platform using our supply chain graph data. I
            joined a team with a mission to make a control tower experience,
            think NASA's control room* but for supply chain data. The primary
            (imagined) use-case was "a beautiful display of your supply chain,
            fit to hang in the CEO’s office."
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-sit_room-nasa.jpg"}
            subText={"* NASA's control room: our inspiration."}
          />

          <p>
            We quickly sketched out our ideas, with only 6 hours to hack
            something together. We guessed at needing a large TV video wall
            made up of 9 TV screens. We figured there should be a way for the
            CEO to change the displays at will through a remote control
            of sorts.
          </p>
          <p>
            Ideas + sketches in-hand, my team (composed of three designers +
              one marketer-turned-developer; we were the odd-duck out, where
              every other team was engineer-focused), wireframed low fidelity
              screens and prototyped the basic app flow in InVision.
          </p>
          <p>
            My team was thrilled when our prototype nabbed us 1st prize
            at the hackathon. Little did we know, this was the beginning
            of a revolutionary product.
          </p>

          <h3>Users &amp; Audience</h3>

          <p>
            We knew that the C-suite users loved to watch the news in their
            office, usually as a background noise, and they had dreams
            of their own mission control room. But it wasn’t until
            our first Situation Room sold to a client that we found real use-cases.
          </p>

          <p>
            <blockquote>
              “If you have six people looking at these screens, providing
              constant analysis, then magical things start happening in
              terms of developing really creative solutions”
              <cite>
                - Jim Rowan, Dyson COO
              </cite>
            </blockquote>

          </p>
          <p>
            This was a huge opportunity to change the dynamics of how operation teams functioned.
          </p>

          <h3>Team &amp; Stakeholders</h3>
          <p>
            There was no dedicated PM for this child-of-a-hackathon idea, so
            it ended up becoming a 20% project for whoever had bandwidth
            to work on it. Each app team (Transport, Exposure and Manufacture)
            were responsible for coming up with their own
            Situation Room “posters”.
          </p>
          <p>
            After a client expressed interest in buying and installing a
            Situation Room, all of the sudden this hackaton idea briefly
            became the center of Elementum’s attention.
          </p>

          <h3>Constraints</h3>
          <p>
            At the hackathon, which was constrained to 6 hours,
            we didn’t think about the actual implementation or
            technology requirements. We used inVision to put together a
            click through prototype of the remote control for the
            situation room and spoke to the idea of a Control Room set
            up with 9 screens in a 3x3 configuration. In reality, it
            took an insane amount of hacking to integrate with
            the TV screens array.
          </p>

          <h3>Design Process</h3>
          <p>
            There were two experiences that needed designs for the
            situation room: the viewers experience and the remote
            control experience.
          </p>

          <p>
            As a viewer, we had questions like "how long would we want
            each poster to remain static on the screen before it rotated",
            or "if they wanted to go through multiple routes or product lines
            how would our designs accommodate this dynamic changing of screens?"
          </p>

          <p>
            We designed an indicator that acted as a counter to visually
            indicate the time left before the change, and the actual
            transition needed to be smooth (no flickering) because 9 displays
            changing could be irritatingly distracting. For each app, we
            designed two posters that would reflect the overall status
            that each app was responsible for.
          </p>

          <p>
            For Transport (my primary app), the two posters were
            "Bottlenecks" (which carousels through all the bottlenecks
              impacting that users routes) and "Route Performance"
              (which cycled though the overall health of the users'
              routes and carrier performance.)
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-sit_room-bottleneck.png"}
            subText={"Early concept for Bottleneck poster."}
          />

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-sit_room-routes.png"}
            subText={"Underperforming routes poster for Situation Room."}
          />

          <p>
            For the Remote Control experience, we designed a view that
            incorporated a thumbnail of the poster they were interacting
            with, including the position of the TV to be used for that poster.
            We also found that we needed a solid confirmation that
            the user updated a poster.
          </p>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-sit_room-remote_concept.jpg"}
            subText={"Remote control for Situation Room."}
          />

          <p>
            We did a lot of in-house testing with the remote to see how
            people felt about the general responsiveness and process of
            changing a TV screen. In the end, we found something that
            feels solid, intuitive, and responsive.
          </p>

          <h3>The Results</h3>

          <p>
            We now have two customers who have bought Situation Rooms
            and dozens of other companies that have expressed interest.
          </p>

          <iframe width="100%" height="360" src="https://www.youtube.com/embed/gLH8i7Uuhwg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-sit_room-remote.jpg"}
          />

          <h3>Restrospective</h3>

          <p>
            <b>Ideas can come from anywhere.</b><br/>
            It’s amazing where ideas can come from.
            A simple hackathon can create a viable product for a
            company; that’s amazing! I was impressed with the team
            effort and hard work that went into bringing this
            hackathon project to reality.
          </p>

          <p>
            <b>Start narrow, and work out towards more support.</b><br/>
            Currently, there's a separate remote control iPad app, but
            we've found it annoying that the user can’t access their
            situation room remote from the primary app they're in. Perhaps
            in the future, we'll explore integrating the Situation Room
            experience into each of our primary apps, It'll just become
            another way for the user to explore their supply chain data.
          </p>

          <p>
            <b>Balancing 20% time is tough.</b><br />
            There's no easy way to make custom posters, but we’ve
            received multiple requests to design custom Situation Room
            screens. But because it’s still a 20% project, we just
            don't have the bandwidth to take these on.
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
