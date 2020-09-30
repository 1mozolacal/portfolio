import React from "react"
import styling from "../style/componentStyles.module.css"

const ProjectWindow = () => (
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
      <h1>My Projects</h1>
    </div>
  </div>
)

export default ProjectWindow
