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
        <header className="project-page-header elementum">
          <div className="wrap" style={{marginBottom: "2em"}}>
            <img src="assets/images/header-elementum-transport.png" />
          </div>
        </header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Real time logistics visibility that helps logistic managers be more proactive and spend less time tracking down spreadsheets.
          </h2>
          <p>
            Power Supply was tailored to a performance-oriented,
            CrossFit/Paleo loving customer. As our business grew,
            we learned that there was an opportunity to position our
            brand beyond performance-oriented folks.
          </p>

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
