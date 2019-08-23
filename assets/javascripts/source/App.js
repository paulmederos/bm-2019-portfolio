import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import Projects from './Projects'
import Contact from './Contact'

import CFPBCollege from './projects/CFPBCollege'
import CFPBReport from './projects/CFPBReport'
import ElementumTransport from './projects/ElementumTransport'
import ElementumSituation from './projects/ElementumSituation'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleProject: null
    }

    this.handleCardPressed = this.handleCardPressed.bind(this)
    this.handleWorkPageClosed = this.handleWorkPageClosed.bind(this)
  }

  componentWillMount(){
    var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/')[0]
    location ? location : null

    this.setState({
      animateHome: true,
      visibleProject: location,
    })
  }

  render() {
    return this.state.visibleProject ?
              this.renderProject(this.state.visibleProject) :
              this.renderHome()
  }

  renderHome(){
    return (
      <div>
        <Header shouldAnimate={this.state.shouldAnimateHome} />
        <Portfolio shouldAnimate={this.state.shouldAnimateHome} onCardPressed={this.handleCardPressed}/>
        <Projects shouldAnimate={this.state.shouldAnimateHome} />
        <Contact shouldAnimate={this.state.shouldAnimateHome} />
      </div>
    )
  }

  renderProject(project){
    switch(project) {
      case 'elementum-transport':
        return <ElementumTransport onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'elementum-situation':
        return <ElementumSituation onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'cfpb-college':
        return <CFPBCollege onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'cfpb-report':
        return <CFPBReport onClosePressed={this.handleWorkPageClosed}/>
        break;
    }
  }

  handleCardPressed(project){
    console.log("Card pressed for project: ", project)
    this.setState({
      visibleProject: project
    })
    window.location.hash = project
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  handleWorkPageClosed(){
    this.setState({
      shouldAnimateHome: false,
      visibleProject: null
    })
    window.location.hash = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
