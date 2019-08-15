import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`portfolio ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <a id="portfolio"></a>
        <div className="wrap">
          <h2>Work Portfolio</h2>
          <p>
            I’ve applied my design, software, and entrepreneurship backgrounds
            to solving legit problems for people and businesses.
            Take a look at recent case studies:
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-work">
            <CaseStudyCard
              date={"2017"}
              role={"Head of Product Design"}
              key={"territory-brand-launch"}
              projectHeaderClass={"territory"}
              projectTitle={"Launching the Territory brand to multiply growth"}
              description={"Could we re-position our brand closer to our north star of personalized nutrition to reach more customers in a deeper, more valuable way?"}
              onCardPressed={() => this.props.onCardPressed("territory-brand")}
            />

            <CaseStudyCard
              date={"2015"}
              role={"Product Design Lead"}
              key={"ps-expansion"}
              projectHeaderClass={"ps-expansion"}
              projectTitle={"Scaling Power Supply to new markets"}
              description={"Would the business model and product experience we developed in one market work in other markets across the country?"}
              onCardPressed={() => this.props.onCardPressed("ps-expansion")}
            />

            <CaseStudyCard
              date={"2014"}
              role={"Sr. Product Designer / Eng"}
              key={"ps-food"}
              projectHeaderClass={"ps-food"}
              projectTitle={"Helping folks find meals they love"}
              description={"If we gave folks more control over their meals, would we keep them around longer? Or would decision fatigue prove too frustrating?"}
              onCardPressed={() => this.props.onCardPressed("ps-food")}
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
