import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

const listOfAdventures = [
  {
    class: "designers-hearth",
    title: "Designer’s Hearth",
    description: "I kicked-off and co-organize a local meetup in Silicon Valley for designers to get together to share stories, make frindships, and grow professionally.",
    linkText: "Come say hi over coffee",
    linkURL: "http://mv.designershearth.com/"
  },{
    class: "ux-book",
    title: "Crafting Your UX Portfolio",
    description: "I co-authored and produced a step-by-step guide to finding your next UX job. After reaching our sales goal, we opened it up publicly on Medium.",
    linkText: "Start reading online for free",
    linkURL: "http://portfolio.enchant.co"
  },{
    class: "kale",
    title: "Kale: Celebrate Your Food",
    description: "I helped design a food journal focused on discovering foods that work (and don't work) for your body, then helping you get pro help.",
    linkText: "Start tracking your food",
    linkURL: "http://app.getkale.com"
  },,{
    class: "chef-club",
    title: "Chef Club",
    description: "I helped build a community of amateur cooks, who wanted to learn cooking skills at their own pace with delcious paleo-inspired recipes.",
    linkText: "Get cookin' today",
    linkURL: "http://www.cookchefclub.com/"
  }
]


export default class Adventures extends React.Component {
  render() {
    return (
      <section className={`adventures ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <h2>Adventures, projects, etc.</h2>
          <p>
            I'm a self-starter and a maker, so you’ll always find me
            exploring something. Here are a few things I’ve had a
            hand in making and nurturing.
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-adventures">
            { listOfAdventures.map( adventure => (
              <li key={adventure.class} className="adventure-card" onClick={() => window.open(adventure.linkURL, '_blank')}>
                <div className={`adventure-image ${adventure.class}`}></div>
                <div className="adventure-content">
                  <h3 className="adventure-title">{adventure.title}</h3>
                  <p className="adventure-description">{adventure.description}</p>
                  <a href={adventure.linkURL} target="_blank">{adventure.linkText} &rarr;</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}
