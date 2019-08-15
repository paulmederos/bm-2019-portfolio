import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import Adventures from './Adventures'
import Contact from './Contact'

import TerritoryLaunch from './projects/TerritoryLaunch'
import PSExpansion from './projects/PSExpansion'
import PSFood from './projects/PSFood'

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
        <Adventures shouldAnimate={this.state.shouldAnimateHome} />
        <Contact shouldAnimate={this.state.shouldAnimateHome} />
      </div>
    )
  }

  renderProject(project){
    switch(project) {
      case 'territory-brand':
        return <TerritoryLaunch onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'ps-expansion':
        return <PSExpansion onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'ps-food':
        return <PSFood onClosePressed={this.handleWorkPageClosed}/>
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
