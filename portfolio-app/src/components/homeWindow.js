import React from "react"
import styling from "../style/componentStyles.module.sass"

const HomeWindow = () => (
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
          I am a Computer Science student at Ryerson who is interested in web
          development, robotics, and ML
        </small>
      </h1>
    </div>
  </div>
)

export default HomeWindow
