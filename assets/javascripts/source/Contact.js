import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <section className={`contact ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <div className="a-floating-card-maybe-what-do-you-think-this-is-omg">
            <h2>Let's connect</h2>
            <p style={{lineHeight: "1.6"}}>
              Send me a note via <a href="mailto:bm@enchant.co" target="_blank">email</a> or
              connect on <a href="https://www.linkedin.com/in/brittanymederos/" target="_blank">LinkedIn</a>.
              I'd love to chat about design, AI, leadership, or your next big idea.
            </p>
          </div>
        </div>

        <footer className="footer-footer-footer">
          <p>Made with &#9829; in California.</p>
        </footer>
      </section>
    )
  }

}
