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
    description: "I designed and built a food journal focused on discovering foods that work (and don't work) for your body, then helping you get pro help.",
    linkText: "Start tracking your food",
    linkURL: "http://app.getkale.com"
  },{
    class: "seishin",
    title: "Seishin for iOS",
    description: "I designed and built a digital version of my favorite book of sayings—the Tao Te Ching—to reclaim a moment of mindfulness in each day.",
    linkText: "Get it on the App Store",
    linkURL: "https://itunes.apple.com/us/app/seishin/id1251924334?mt=8"
  },{
    class: "frc-talent",
    title: "First Round Capital: Jobs",
    description: "I helped prototype an early iteration of FRC's Talent network, that helped connect talented folks with incredible startups.",
    linkText: "See how it's shaped up",
    linkURL: "http://firstround.com/talent/"
  },{
    class: "sohelpful",
    title: "SoHelpful.me",
    description: "I helped build the 2nd iteration of SoHelpful's mentorship and advice network.",
    linkText: "Read about the joruney",
    linkURL: "https://blog.prolego.io/im-shutting-down-sohelpful-what-i-learned-from-helping-10-000-entrepreneurs-b3f3e3853c37"
  },{
    class: "chef-club",
    title: "Chef Club",
    description: "I helped build a community of amateur cooks, who wanted to learn cooking skills at their own pace with delcious paleo-inspired recipes.",
    linkText: "Get cookin' today",
    linkURL: "http://www.cookchefclub.com/"
  },{
    class: "cor",
    title: "Cor: Employee Wellness",
    description: "I was an early employee at Cor. We helped organizations put their employees first, by helping companies measure the impact of their wellness programs.",
    linkText: "Learn more on AngelList",
    linkURL: "https://angel.co/cor"
  },{
    class: "culture-camp",
    title: "Culture Camp DC",
    description: "I helped organize the first culture-obssessed unconference in Washington, DC to help folks learn how to build better, more human companies.",
    linkText: "Learn about the last conf",
    linkURL: "https://www.culturecampdc.com/"
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
