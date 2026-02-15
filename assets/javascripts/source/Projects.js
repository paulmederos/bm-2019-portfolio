import React from 'react'
import PropTypes from 'prop-types'

const publications = [
  {
    title: "Crafting Your UX Portfolio",
    description: "Co-authored a step-by-step guide to finding your next UX job. After reaching our sales goal, we opened it up publicly on Medium.",
    linkText: "Read on Medium",
    linkURL: "http://portfolio.enchant.co"
  },
  {
    title: "Microsoft StaffHub: Customer-centered design driven",
    description: "A deep dive into the customer-centered design process behind Microsoft StaffHub, an Office 365 product for firstline workers.",
    linkText: "Read on Medium",
    linkURL: "https://medium.com/@brim/microsoft-staffhub-customer-centered-design-driven-bad9a4b5a38f"
  },
  {
    title: "Top prototyping tools for interaction designers",
    description: "A survey of the best prototyping tools available for interaction designers to bring ideas to life quickly.",
    linkText: "Read article",
    linkURL: "https://medium.com/@brim"
  }
]

const patents = [
  {
    title: "Improving Online Presentations Using Machine Learning",
    description: "Systems and methods for analyzing presenter content and audience reactions in real-time using ML models, generating feedback to improve online presentations.",
    assignee: "Microsoft",
    coinventors: "K. Seleskerov, A. Srivastava, D. Johnson, P. Sinha, G. Wu, B. Mederos"
  },
  {
    title: "Method and System for Monitoring Shipments in a Supply and/or Logistics Chain",
    description: "Graph-based data structures for tracking shipments and detecting delays across supply chain networks for Fortune 500 companies.",
    assignee: "Elementum SCM",
    coinventors: "S. Guruswamy, D. Martin, B. Mederos, et al."
  }
]

const ventures = [
  {
    class: "ux-book",
    title: "Enchant",
    description: "Partner at a product and design studio since 2013. We build products, write about design, and help teams ship better experiences.",
    linkText: "Visit Enchant",
    linkURL: "http://writing.enchant.co"
  },
  {
    class: "designers-hearth",
    title: "Florens",
    description: "Co-founded and ran a venture from 2019 to 2025, exploring new ideas at the intersection of design, community, and technology.",
    linkText: null,
    linkURL: null
  }
]

export default class Projects extends React.Component {
  render() {
    return (
      <section className={`adventures ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>

        <div className="wrap">
          <h2>Writing</h2>
          <p>
            Thoughts on design, UX career development, and building products
            that people love.
          </p>
          <div className="publications-list">
            {publications.map(pub => (
              <div key={pub.title} className="publication-item">
                <h3>{pub.title}</h3>
                <p>{pub.description}</p>
                {pub.linkURL && <a href={pub.linkURL} target="_blank">{pub.linkText} &rarr;</a>}
              </div>
            ))}
          </div>
        </div>

        <div className="wrap" style={{marginTop: "8rem"}}>
          <h2>Patents</h2>
          <p>
            Inventions I've contributed to across supply chain technology
            and AI-powered productivity tools.
          </p>
          <div className="patents-list">
            {patents.map(patent => (
              <div key={patent.title} className="patent-item">
                <h3>{patent.title}</h3>
                <p className="patent-assignee">{patent.assignee}</p>
                <p>{patent.description}</p>
                <p className="patent-coinventors">Co-inventors: {patent.coinventors}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap" style={{marginTop: "8rem"}}>
          <h2>Ventures</h2>
          <p>
            Side projects and studios I've built alongside my full-time work.
          </p>
          <div className="ventures-list">
            {ventures.map(venture => (
              <div key={venture.title} className="venture-item">
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                {venture.linkURL && <a href={venture.linkURL} target="_blank">{venture.linkText} &rarr;</a>}
              </div>
            ))}
          </div>
        </div>

      </section>
    )
  }
}
