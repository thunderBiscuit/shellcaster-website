import React from "react"

import "../styles/global.scss"

import Layout from "../components/layout"
import shellcaster from "../images/shellcaster-logo.png"

function LandingPage() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <img src={shellcaster} alt="Ferris Rocking in the Free World" style={{ maxWidth: "300px" }}/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        <h1
          class="title hero-title"
          style={{ marginBottom: "0rem", fontWeight: 400 }}
        >
          <p class="line-1 anim-typewriter">ShellCaster</p>
        </h1>
      </div>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <p className="elevator-pitch">A lightweight command line podcast manager</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <button className="button is-large is-primary main-button">Read Our Docs</button>
        <button className="button is-large is-info main-button">Download the Binaries</button>
        <button className="button is-large is-info main-button">Compile from Source</button>
      </div>
    </Layout>
  )
}

export default LandingPage
