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
        <p>
          Makes meaningful products &amp; services<br />
          centered around human experiences.
        </p>

        <ol className="brief-resume">
          <li>
            <span className="time-space-continuum">2015 - Present</span>
            <span className="the-gig">Senior Designer at <a href="https://www.microsoft.com" target="_blank">Microsoft</a> — O365 (Outlook, Powerpoint) 💻</span>
          </li>
          <li>
            <span className="time-space-continuum">2013 - 2015</span>
            <span className="the-gig">Product design lead at <a href="https://www.elementum.com" target="_blank">Elementum</a> — Transport 🚚</span>
          </li>
          <li>
            <span className="time-space-continuum">2012 ~ 2013</span>
            <span className="the-gig">UX/UI designer at <a href="https://u.group" target="_blank">Rock Creek Strategic Marketing</a> 🏛</span>
          </li>
          <li>
            <span className="time-space-continuum">2010 ~ 2012</span>
            <span className="the-gig">User experience at <a href="http://writing.enchant.co" taget="_blank">Enchant Design</a> &mdash; a product + design studio 🎨</span>
          </li>
        </ol>
      </header>
    )
  }
}

Header.propTypes = {
  shouldAnimate: PropTypes.bool
}
