import React from 'react'
import PropTypes from 'prop-types'

export default class CaseStudyCard extends React.Component {
  render() {
    return (
      <li className="case-study-preview" onClick={this.props.onCardPressed}>
        <figure className={`case-study-image ${this.props.projectHeaderClass}`}></figure>
        <section className="case-study-content">
          <h5>{this.props.date} &middot; {this.props.role}</h5>
          <h3>{this.props.projectTitle}</h3>
          <p>{this.props.description}</p>

          <button className="button-link" onClick={this.props.onCardPressed}>Read the case study &rarr;</button>
        </section>
      </li>
    )
  }
}

CaseStudyCard.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  projectHeaderClass: PropTypes.string,
  projectTitle: PropTypes.string,
  onCardPressed: PropTypes.func,
}
