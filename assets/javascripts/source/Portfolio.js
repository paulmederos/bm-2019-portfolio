import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`portfolio ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <a id="portfolio"></a>
        <div className="wrap">
          <h2>Case Studies</h2>
          <p>
            I've worked in a variety of settings (government, big tech, enterprise startup,
            tiny bootstraped product), on a wide range of design challenges,
            on products that have been used by hundreds of millions around the world 🌎
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-work">
            <CaseStudyCard
              date={"2015"}
              role={"Lead UX Designer"}
              key={"elementum-transport"}
              projectHeaderClass={"elementum-transport"}
              projectTitle={"Elementum: Transport app"}
              description={"Real time logistics visibility that helps Logistic managers be more proactive and spend less time tracking down spreadsheets."}
              onCardPressed={() => this.props.onCardPressed("elementum-transport")}
            />

            <CaseStudyCard
              date={"2014"}
              role={"Lead UX Designer"}
              key={"elementum-situation"}
              projectHeaderClass={"elementum-situation"}
              projectTitle={"Elementum: Situation Room"}
              description={"Designing a control room to inspire collaboration between operational teams."}
              onCardPressed={() => this.props.onCardPressed("elementum-situation")}
            />

            <CaseStudyCard
              date={"2013"}
              role={"UX/UI Designer"}
              key={"cfpb-college"}
              projectHeaderClass={"cfpb-college"}
              projectTitle={"CFPB: Paying for college"}
              description={"Helping Students make smarter financial decisions about college."}
              onCardPressed={() => this.props.onCardPressed("cfpb-college")}
            />
            <CaseStudyCard
              date={"2012"}
              role={"UX/UI Designer"}
              key={"cfpb-report"}
              projectHeaderClass={"cfpb-report"}
              projectTitle={"CFPB: Yearly strategic plan"}
              description={"A new type of government report—a living document, an online interactive report—for the CFPB to send to Congress"}
              onCardPressed={() => this.props.onCardPressed("cfpb-report")}
            />
          </ul>
        </div>
        <figure className="cool-blobs"></figure>
      </section>
    )
  }
}

Portfolio.propTypes = {
  onCardPressed: PropTypes.func.isRequired
}
