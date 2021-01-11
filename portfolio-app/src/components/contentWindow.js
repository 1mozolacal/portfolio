import React from "react"
import HomeWindow from "./HomeWindow"
import ProjectWindow from "./projectWindow"
import ExperienceWindow from "./experienceWindow"

import styles from "../style/componentStyles.module.sass"

const ContentWindow = props => {
  const window = props.window
  console.log("changing to " + window)
  var htmlWindow = null
  switch (window) {
    case "Home":
      htmlWindow = <HomeWindow></HomeWindow>
      break
    case "Projects":
      htmlWindow = <ProjectWindow></ProjectWindow>
      break
    case "Experience":
      htmlWindow = <ExperienceWindow></ExperienceWindow>
      break
    default:
      htmlWindow = <HomeWindow></HomeWindow>
      break
  } //end switch
  if (props.navBarCallBack) {
    return (
      <div>
        {htmlWindow}
        <div
          className={styles.navhidebutton}
          onClick={() => props.navBarCallBack(true)}
          style={{ left: 0 }}
        >
          ↦
        </div>
      </div>
    )
  } else {
    return htmlWindow
  }
}

export default ContentWindow
