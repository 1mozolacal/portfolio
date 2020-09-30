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
      <AnimatedCard name="Card"></AnimatedCard>
    </div>
  </div>
)

class AnimatedCard extends React.Component {
  constructor(props) {
    super()
    this.handleMouse = this.handleMouse.bind(this)
    this.ele = React.createRef()
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
        (25 * 2)
      let yRot =
        ((params.clientY - elePos.y - elePos.height / 2) / elePos.height) *
        (25 * 2)
      // console.log("rot X:" + xRot)
      console.log("rot Y:" + yRot)
      ele.style.transform = "rotateX(" + yRot + "deg) rotateY(" + -xRot + "deg)"
      // ele.style.boxShadow = "insert 10px 10px 25px rgba(0,0,0,0.6)"
      ele.style.boxShadow =
        "inset " +
        (params.clientX - elePos.x - elePos.width / 2) +
        "px " +
        (params.clientY - elePos.y - elePos.height / 2) +
        "px " +
        Math.min(elePos.width, elePos.height) / 2 +
        "px 10px rgba(0,0,0,0.4)"
    }
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouse}
        style={{
          width: "300px",
          backgroundColor: "#4432a8",
          transformStyle: "preserve-3d",
        }}
        id={this.id}
      >
        Hello stuff
      </div>
    )
  }
}

export default ProjectWindow
