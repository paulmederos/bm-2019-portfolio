import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

const highlights = [
  {
    year: "2025",
    title: "AI Learning Product",
    description: "Leading design and research for a 0-to-1 product team launching a transformative learning experience powered by AI. Building a high-performing, inclusive team within an org shifting from service-oriented to product-driven."
  },
  {
    year: "2023",
    title: "Designer in Copilot",
    description: "Led the integration of Microsoft Designer's Editor canvas into Copilot chat for AI-driven image generation and editing. Featured in Microsoft's first Super Bowl campaign in years."
  },
  {
    year: "2021",
    title: "Microsoft Designer",
    description: "Co-led the pitch to Microsoft SLT and Satya Nadella, securing funding for a new M365 app to compete in the Creator Economy. Designed and shipped the core AI-powered Editor experience."
  },
  {
    year: "2020",
    title: "PowerPoint + Teams",
    description: "Spearheaded the integration of PowerPoint into Microsoft Teams and led development of remote presenting tools during the pandemic, keeping Microsoft relevant in hybrid work."
  },
  {
    year: "2019",
    title: "PowerPoint AI",
    description: "Pioneered AI solutions within PowerPoint — auto-magically designing slides, coaching speakers to improve their skills, and creating more inclusive presentation experiences."
  }
]

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`portfolio ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <a id="portfolio"></a>
        <div className="wrap">
          <h2>Selected Work</h2>
          <p>
            Over 10 years at Microsoft, I've led design for products used by
            hundreds of millions — from AI-powered creativity tools to
            enterprise collaboration experiences.
          </p>
        </div>

        <div className="wrap">
          <div className="highlights-grid">
            {highlights.map(item => (
              <div key={item.year} className="highlight-card">
                <span className="highlight-year">{item.year}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap" style={{marginTop: "8rem"}}>
          <h2>Earlier Case Studies</h2>
          <p>
            Detailed case studies from my earlier career — government, enterprise startup,
            and bootstrapped products used by millions.
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
