import React from "react"
import Styling from "../style/componentStyles.module.css"
import StylingProject from "../style/project.module.css"

import { GitButton } from "./helperComponents.js"

import catIcon from "../images/cat-look-up.jpg"
// import gitIcon from "../images/git-icon.png"

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
      <AnimatedCard
        title="Calvin"
        description="Stuff and stuff and muffStuffStuff nd more stuff"
        name="Card"
        git="yes"
        link="more"
        icon={catIcon}
      ></AnimatedCard>
      <AnimatedCard
        name="Card2"
        title="Calvin"
        description="Stuff and stuff and muffStuffStuff nd more stuff"
        link="more"
        icon={catIcon}
      ></AnimatedCard>
      <AnimatedCard
        title="Calvin"
        description="Studdff and stuff and muffStuffStuff nd more stuff"
        git="yes"
        icon={catIcon}
      ></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
      <AnimatedCard></AnimatedCard>
    </div>
  </div>
)

class AnimatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title
    this.description = props.description
    this.icon = props.icon
    this.gitLink = props.git
    this.readMoreLink = props.link
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
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id={this.id}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>{this.title}</h1>
          {this.icon && (
            <ProjectPictureButton link={this.icon}></ProjectPictureButton>
          )}
          {this.description}
        </div>
        <div className="btn-group" style={{ height: "10%" }}>
          {this.gitLink && <GitButton link={this.gitLink}></GitButton>}
          {this.readMoreLink && (
            <MoreButton link={this.readMoreLink}></MoreButton>
          )}
        </div>
      </div>
    )
  }
}

class ProjectPictureButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
  }
  render() {
    return (
      <div>
        <img
          alt="Project Icon"
          src={this.link}
          style={{ width: "80%" }}
          className="mx-auto d-block rounded-circle"
        ></img>
      </div>
    )
  }
}
class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
  }
  render() {
    return (
      <a className="btn btn-primary" style={{ width: "150%" }} href={this.link}>
        See more
      </a>
    )
  }
}

export default ProjectWindow
