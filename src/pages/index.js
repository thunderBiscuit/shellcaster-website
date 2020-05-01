import React from "react"

import "../styles/global.scss"

import Layout from "../components/layout"
import shellcaster from "../images/shellcaster-logo.png"

function LandingPage() {
  return (
    <Layout>
      <div className="hero">
        <img id="rockingferris" src={shellcaster} alt="Ferris Rocking in the Free World" />
      </div>
      <div className="main-section">
        <p className="shellcaster-title anim-typewriter">ShellCaster</p>
        <p className="elevator-pitch">A lightweight command line podcast manager</p>
      </div>
      <div className="buttons-section">
        <button className="button is-large main-button">Read Our Docs</button>
        <button className="button is-large main-button">Download the Binaries</button>
        <a className="button is-large main-button" href="https://github.com/jeff-hughes/shellcaster" target="_blank" rel="noopener noreferrer">Compile from Source</a>
      </div>
    </Layout>
  )
}

export default LandingPage
