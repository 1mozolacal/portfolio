import React from "react"
import HomeWindow from "./HomeWindow"
import ProjectWindow from "./projectWindow"
import ExperienceWindow from "./experienceWindow"

const ContentWindow = props => {
  const window = props.window
  console.log("rendering with:" + props.window)
  switch (window) {
    case "Home":
      return <HomeWindow></HomeWindow>
    case "Projects":
      return <ProjectWindow></ProjectWindow>
    case "Experience":
      return <ExperienceWindow></ExperienceWindow>
    default:
      return <HomeWindow></HomeWindow>
  } //end switch
}

export default ContentWindow
