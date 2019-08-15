import React from 'react'
import PropTypes from 'prop-types'

export default class CaseStudyPage extends React.Component {

  render() {
    const { companyName, projectTitle } = this.props

    return (
      <main className="project-page">
        <nav className="project-nav">
          <button className="fab fab-back" onClick={this.props.onClosePressed}>
            <i className="icon icon-back" />
          </button>
          <p className="project-meta"><b>{companyName}</b> - {projectTitle}</p>
        </nav>

        <section className="project-content animated animated-short fadeIn">
          { this.props.children }
        </section>

        <footer className="wrap mid-wrap project-footer">
          <button onClick={this.props.onClosePressed}>&larr; Back to the rest of the work</button>
        </footer>
      </main>
    )
  }

}

CaseStudyPage.propTypes = {
  companyName: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  onClosePressed: PropTypes.func.isRequired,
}
