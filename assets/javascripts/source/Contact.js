import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <section className={`contact ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <div className="a-floating-card-maybe-what-do-you-think-this-is-omg">
            <h2>Let's design together ✨</h2>
            <p style={{lineHeight: "1.6"}}>
              Send me a note via <a href="mailto:bm@enchant.co" target="_blank">email</a> or <a href="https://www.linkedin.com/in/brittanymederos/" target="_blank">LinkedIn</a>,
              or say hi over on <a href="https://www.twitter.com/brim" target="_blank">Twitter</a>. I'll normally respond back within a few days!
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
