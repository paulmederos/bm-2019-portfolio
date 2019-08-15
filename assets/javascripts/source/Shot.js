import React from 'react'

export default class Shot extends React.Component {
  render() {
    const { fileName } = this.props

    return (
      <figure
        className="source-shot"
        style={{ backgroundImage: `url(assets/images/shots/${fileName}.png)` }}
      />
    )
  }
}
