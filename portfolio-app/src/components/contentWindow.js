import React from "react"
import HomeWindow from "./HomeWindow"
import ProjectWindow from "./projectWindow"
import WorkWindow from "./workWindow"

const ContentWindow = props => {
  const window = props.window
  console.log("rendering with:" + props.window)
  switch (window) {
    case "Home":
      return <HomeWindow></HomeWindow>
    case "Projects":
      return <ProjectWindow></ProjectWindow>
    case "Previous Work":
      return <WorkWindow></WorkWindow>
    case "Extra Curricular":
      break
  } //end switch
  return <ProjectWindow></ProjectWindow>
}

export default ContentWindow
