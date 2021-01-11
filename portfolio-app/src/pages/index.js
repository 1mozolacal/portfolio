import React from "react"
import NavBar from "../components/navBar"
// import { isMobile } from "react-device-detect"
import ContentWindow from "../components/contentWindow"
import styles from "../style/componentStyles.module.sass"
import "../style/custom.sass"
import "../style/global.css"
import { isMobile } from "react-device-detect"

class HomePage extends React.Component {
  constructor() {
    super()
    //this.linkSelected = "Projects"
    this.upDateSelected = this.upDateSelected.bind(this)
    this.setNavBarVisibility = this.setNavBarVisibility.bind(this)
    this.navBarOpen = true
    this.state = {
      navBarOpen: true,
      linkSelected: "Home",
    }
  }

  upDateSelected(redirect) {
    console.log(redirect)
    const lastSelection = this.state.linkSelected
    var linkSelected = this.state.linkSelected
    switch (redirect) {
      case "Home":
        linkSelected = "Home"
        break
      case "Projects":
        linkSelected = "Projects"
        break
      case "Experience":
        linkSelected = "Experience"
        break
      case "Extra Curricular":
        linkSelected = "Extra Curricular"
        break
      default:
        break
    } //end switch
    this.setState({ linkSelected: linkSelected })
    if (isMobile) {
      if (lastSelection != redirect) {
        this.setNavBarVisibility(false)
      }
    }
  }

  setNavBarVisibility(isVis) {
    console.log("I MA testing")
    this.setState({ navBarOpen: isVis })
  }

  render() {
    var content = null
    if (this.state.navBarOpen) {
      content = (
        <div
          className={"nobuffer row " + styles.fillpar}
          style={{ maxWidth: "100%" }}
        >
          <div
            className={
              styles.mobileshrink + " nobuffer col-md-3 primary-background"
            }
          >
            <NavBar
              select={this.state.linkSelected}
              linkHandler={this.upDateSelected}
              navBarCallBack={this.setNavBarVisibility}
            ></NavBar>
          </div>
          <div
            className={
              styles.mobileshrink +
              " nobuffer col-md-9 primary-background " +
              styles.fillpar
            }
          >
            <ContentWindow window={this.state.linkSelected}></ContentWindow>
          </div>
        </div>
      )
    } else {
      content = (
        <div
          className={"nobuffer row " + styles.fillpar}
          style={{ maxWidth: "100%" }}
        >
          <div
            className={
              styles.mobileshrink +
              " nobuffer col-md-12 primary-background " +
              styles.fillpar
            }
          >
            <ContentWindow
              window={this.state.linkSelected}
              navBarCallBack={this.setNavBarVisibility}
            ></ContentWindow>
          </div>
        </div>
      )
    }

    return (
      <div
        className={"nobuffer flexbox container " + styles.fillpar}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <div
          className={"nobuffer container"}
          style={{ flex: 1, width: "100%", maxWidth: "100%" }}
        >
          {content}
        </div>
      </div>
    )
  }
}

export default HomePage
