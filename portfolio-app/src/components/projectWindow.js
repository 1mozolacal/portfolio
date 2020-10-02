import React from "react"
import Styling from "../style/componentStyles.module.css"
import StylingProject from "../style/project.module.css"

const ProjectWindow = () => (
  <div className={Styling.homepagebackground + " " + Styling.hidescroll}>
    <div
      className={StylingProject.flexcontainer}
      style={{
        color: "black",
        position: "relative",
        top: "10%",
      }}
    >
      <AnimatedCard name="Card"></AnimatedCard>
      <AnimatedCard name="Card2"></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
    </div>
  </div>
)

class AnimatedCard extends React.Component {
  constructor(props) {
    super()
    this.handleMouse = this.handleMouse.bind(this)
    this.ele = React.createRef()
    this.perspective = "100em"
    this.maxRot = 25
    if (props.name) {
      this.id = props.name
    } else {
      this.id = "ranID-aniCard-" + Math.floor(Math.random() * 1000000)
    }
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  handleMouse(params) {
    const ele = document.getElementById(this.id)
    if (ele) {
      const elePos = ele.getBoundingClientRect()
      let xRot =
        ((params.clientX - elePos.x - elePos.width / 2) / elePos.width) *
        (this.maxRot * 2)
      let yRot =
        ((params.clientY - elePos.y - elePos.height / 2) / elePos.height) *
        (this.maxRot * 2)
      // console.log("rot X:" + xRot)
      //console.log("rot Y:" + yRot)
      ele.style.transform =
        "perspective(" +
        this.perspective +
        ") rotateX(" +
        yRot +
        "deg) rotateY(" +
        -xRot +
        "deg)"
      // ele.style.boxShadow = "insert 10px 10px 25px rgba(0,0,0,0.6)"
      let shadow =
        "inset " +
        (params.clientX - elePos.x - elePos.width / 2) +
        "px " +
        (params.clientY - elePos.y - elePos.height / 2) +
        "px " +
        Math.min(elePos.width, elePos.height) / 2 +
        "px 10px rgba(0,0,0,0.4)"

      ele.style.boxShadow = shadow
      //ele.style.webkitBoxShadow = shadow - depricated
      //ele.style.mozBoxShadow = shadow
    }
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouse}
        className={StylingProject.projectitem}
        id={this.id}
      >
        Hello stuff Random testing is a black-box software testing technique
        where programs are tested by generating random, independent inputs.
      </div>
    )
  }
}

export default ProjectWindow
