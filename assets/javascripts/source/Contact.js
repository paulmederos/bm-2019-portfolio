import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <section className={`contact ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <div className="a-floating-card-maybe-what-do-you-think-this-is-omg">
            <h2>Let's build together ✨</h2>
            <p style={{lineHeight: "1.6"}}>
              Send me a note via <a href="mailto:pvm@enchant.co" target="_blank">email</a> or <a href="https://www.linkedin.com/in/pmederos/" target="_blank">LinkedIn</a>,
              or say hi over on <a href="https://www.twitter.com/pvm" target="_blank">Twitter</a>. I'll normally respond back within a few days!
            </p>
          </div>
        </div>

        <footer className="footer-footer-footer">
          <p>Made with &#9829; in California. Check out <a href="http://v14.paulmederos.com/" target="_blank">V14</a>.</p>
        </footer>
      </section>
    )
  }

}
