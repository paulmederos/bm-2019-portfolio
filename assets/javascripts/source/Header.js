import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  render() {
    return (
      <header className={`wrap title ${this.props.shouldAnimate && "animated fadeIn"}`}>
        <div className="headshots-container">
          <img src="assets/images/headshot-01.jpg" className="headshot first" />
          <img src="assets/images/headshot-02.jpg" className="headshot second" />
          <img src="assets/images/headshot-03.jpg" className="headshot third" />
        </div>

        <h2>Brittany Mederos</h2>
        <p style={{maxWidth: "440px"}}>
          Principal Design & Research Manager at Microsoft,
          leading design strategy for generative AI-powered
          experiences. Passionate about building strong teams,
          championing user-centered design, and pushing the
          boundaries of what's possible with AI.
        </p>

        <ol className="brief-resume">
          <li>
            <span className="time-space-continuum">2025 - Present</span>
            <span className="the-gig">Principal Design & Research Manager at <a href="https://www.microsoft.com" target="_blank">Microsoft</a> — AI Learning</span>
          </li>
          <li>
            <span className="time-space-continuum">2021 - 2025</span>
            <span className="the-gig">Principal Designer & Manager at <a href="https://www.microsoft.com" target="_blank">Microsoft</a> — Designer, Copilot</span>
          </li>
          <li>
            <span className="time-space-continuum">2019 - 2021</span>
            <span className="the-gig">Principal Design Lead at <a href="https://www.microsoft.com" target="_blank">Microsoft</a> — PowerPoint AI</span>
          </li>
          <li>
            <span className="time-space-continuum">2015 - 2019</span>
            <span className="the-gig">Senior Designer & Manager at <a href="https://www.microsoft.com" target="_blank">Microsoft</a> — Outlook, StaffHub</span>
          </li>
          <li>
            <span className="time-space-continuum">2013 - 2015</span>
            <span className="the-gig">Product Design Lead at <a href="https://www.elementum.com" target="_blank">Elementum</a> — Supply Chain</span>
          </li>
          <li>
            <span className="time-space-continuum">2010 - 2013</span>
            <span className="the-gig">UX Designer — <a href="http://writing.enchant.co" target="_blank">Enchant</a>, Rock Creek, Foster.ly</span>
          </li>
        </ol>
      </header>
    )
  }
}

Header.propTypes = {
  shouldAnimate: PropTypes.bool
}
