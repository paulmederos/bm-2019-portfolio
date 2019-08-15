import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

console.log("Got the bundle...")

document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded...")
  const mountPoint = document.querySelectorAll('[data-react-component="App"]')[0]
  if (mountPoint) {
    console.log("Found mountpoint...")
    ReactDOM.render(<App />, mountPoint)
  }
});
