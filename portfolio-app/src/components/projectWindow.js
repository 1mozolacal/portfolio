import React from "react"
import Styling from "../style/componentStyles.module.sass"
import StylingProject from "../style/project.module.sass"

import { GitButton } from "./helperComponents.js"

import gfIcon from "../images/projects/Gen1.png"
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
        title="Gen Flight"
        description="Neutral Networks that a genetically trained to control simulated triangle airplanes"
        name="Card"
        git="https://github.com/1mozolacal/GenFlight"
        link="projects/gen-flight"
        icon={gfIcon}
      ></AnimatedCard>
      <AnimatedCard
        name="Card2"
        title="Data Science Challenge"
        description="Challenge from Salon everywhere for there data science and machine learning position"
        link="projects/saloneverywhere"
        // icon="https://media-exp1.licdn.com/dms/image/C560BAQEXWPx26hjweQ/company-logo_200_200/0/1607190192837?e=1616630400&v=beta&t=fXjK7cacsLKdfqFKYu_f2U9H-5RPSSY46Rc5Ef9bNLg"
        icon="https://www.vippng.com/png/detail/225-2256606_hair-salon-haircuts-icon-emblem.png"
        git="https://github.com/1mozolacal/DataScienceChallengeSaloneverywhere"
      ></AnimatedCard>
      <AnimatedCard
        name="Card3"
        title="Machine Learning Challenge"
        description="Challenge from Prepr for machine learning Internship position"
        link="projects/prepr"
        git="https://github.com/1mozolacal/Machine_Learning_Challenge"
        icon="data:image/png;base64,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"
      ></AnimatedCard>
      <AnimatedCard
        name="Card4"
        title="Shifter Module"
        description="Code for MKR1000 that controlled gear shifting of an FSAE formula car"
        git="https://github.com/1mozolacal/ShifterModule"
        icon="https://images.squarespace-cdn.com/content/v1/55e1e259e4b097fe3a3a691e/1597439467075-JFVGYUV50BGHRKMVB9GV/ke17ZwdGBToddI8pDm48kCpX2mwG9slVUzQCwhOMrQF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVDXM9yQ8sG6x3COIEUaadqpk9XPubC0H4MH9Az_c7nPqIjSxZ2rgD2_Fw9U6DWfsg/DSC_1491-Edit.jpg?format=500w"
      ></AnimatedCard>
      <AnimatedCard
        name="Card5"
        title="StarCraft2 AI"
        description="Use python-sc2 library to interface with StarCraft; a real-time strategy game. The goal is to create a bot that will be controlled via CNN that takes the battlefield as input that is able to beat me at the game. Currently a work in progress and only able to beat the built-in hard computer."
        git="https://github.com/1mozolacal/StarCraftAI.git"
        icon="https://www.sapphirenation.net/-/media/sites/sapphirenation/articles/2018/01/IMG_01-1-1024x576.jpg"
      ></AnimatedCard>
      <AnimatedCard
        name="Card6"
        title="FIRST Robotics"
        description="My experience with FIRST Robtics, from member to mentor."
        link="projects/first"
        icon="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-V.png"
      ></AnimatedCard>
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
    this.handleMouseOff = this.handleMouseOff.bind(this)
    this.redirectOnClick = this.redirectOnClick.bind(this)
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
      ele.style.transitionDuration = "0s"
      ele.style.transitionDelay = "0s"
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
      ele.style.opacity = "1"
      //ele.style.webkitBoxShadow = shadow - depricated
      //ele.style.mozBoxShadow = shadow
    }
  }

  handleMouseOff(params) {
    const ele = document.getElementById(this.id)
    if (ele) {
      ele.style.transitionDuration = "3s"
      ele.style.transitionDelay = "0.5s"
      ele.style.transform =
        "perspective(" + this.perspective + ") rotateX(0deg) rotateY(0deg)"
      const elePos = ele.getBoundingClientRect()
      ele.style.boxShadow =
        "inset " +
        0 +
        "px " +
        0 +
        "px " +
        Math.min(elePos.width, elePos.height) / 2 +
        "px 10px rgba(0,0,0,0.4)"
      ele.style.opacity = "0.65"
    }
  }

  redirectOnClick() {
    if (this.readMoreLink) {
      window.location.href = this.readMoreLink
    }
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouse}
        onMouseOut={this.handleMouseOff}
        className={StylingProject.projectitem}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id={this.id}
        onClick={this.redirectOnClick}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>{this.title}</h1>
          {this.icon && (
            <ProjectPictureButton link={this.icon}></ProjectPictureButton>
          )}
          <div className={StylingProject.summaryHolder}>{this.description}</div>
        </div>
        <div className="btn-group">
          {this.gitLink && (
            <div className="btn">
              <GitButton
                style={{ height: "4em", width: "4em" }}
                link={this.gitLink}
              ></GitButton>
            </div>
          )}
          {this.readMoreLink && (
            <div className="btn">
              <MoreButton link={this.readMoreLink}></MoreButton>
            </div>
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
      <a className={"btn " + StylingProject.seeMoreButton} href={this.link}>
        See more
      </a>
    )
  }
}

export default ProjectWindow
