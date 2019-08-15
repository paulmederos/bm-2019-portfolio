import React from 'react'
import PropTypes from 'prop-types'

export default class CaseStudyFigure extends React.Component {
  render() {
    return (
      <figure className="image-container">
        <img
          src={this.props.imageUrl}
          alt={this.props.altText}
        />
        { this.props.subText &&
          <p className="image-subtext">
            { this.props.subText }
          </p>
        }
      </figure>
    )
  }
}

CaseStudyFigure.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  subText: PropTypes.string,
}
