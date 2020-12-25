import React from "react"
//import { Card } from "react-bootstrap"
//import Button from "react-bootstrap/Button"
//import PropTypes from "prop-types"
import styling from "../style/componentStyles.module.sass"

const SandGround = () => (
  <div className={styling.homepagebackground}>
    <div
      className="display-1 d-flex justify-content-center align-items-center"
      style={{
        color: "black",
        position: "relative",
        left: "20%",
        top: "20%",
        width: "60%",
      }}
    >
      <h1>
        <b style={{ frontSize: "200%" }}>Hello!</b>
        <small className="w-25">
          I am a Computer Science student in Ryerson who is interest in web
          development, robotics, and ML
        </small>
      </h1>
    </div>
  </div>
)

export default SandGround
