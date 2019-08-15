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

        <h2>Paul Mederos</h2>
        <p>
          Makes meaningful products &amp; services<br />
          centered around human experiences.
        </p>

        <ol className="brief-resume">
          <li>
            <span className="time-space-continuum">2018 - Present</span>
            <span className="the-gig">Founder at <a href="https://www.circleofmana.com" target="_blank">Circle of Mana</a> 🌿</span>
          </li>
          <li>
            <span className="time-space-continuum">2014 - 2017</span>
            <span className="the-gig">Led product design at <a href="https://www.territoryfoods.com" target="_blank">Territory</a> (formerly <a href="https://technical.ly/dc/2017/05/09/power-supply-now-territory-foods/" target="_blank">Power Supply</a>) 🥗</span>
          </li>
          <li>
            <span className="time-space-continuum">2013 ~ 2014</span>
            <span className="the-gig">Led user experience crew at <a href="http://www.americanparkour.com" target="_blank">American Parkour</a> 🤸‍♀️</span>
          </li>
          <li>
            <span className="time-space-continuum">2006 ~ 2014</span>
            <span className="the-gig">Ran <a href="http://enchant.co" taget="_blank">Enchant Design</a> &mdash; a product + design studio 🎨</span>
          </li>
        </ol>
      </header>
    )
  }
}

Header.propTypes = {
  shouldAnimate: PropTypes.bool
}
