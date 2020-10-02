import React from "react"
import NavBar from "../components/navBar"
import ContentWindow from "../components/contentWindow"
import styles from "../style/componentStyles.module.css"

class HomePage extends React.Component {
  constructor() {
    super()
    this.linkSelected = "Projects"
    this.state = {
      linkSelected: "Home",
    }
    this.upDateSelected = this.upDateSelected.bind(this)
  }

  upDateSelected(redirect) {
    console.log(redirect)
    var linkSelected = this.state.linkSelected
    switch (redirect) {
      case "Home":
        linkSelected = "Home"
        break
      case "Projects":
        linkSelected = "Projects"
        break
      case "Previous Work":
        linkSelected = "Previous Work"
        break
      case "Extra Curricular":
        linkSelected = "Extra Curricular"
        break
    } //end switch
    this.setState({ linkSelected: linkSelected })
  }

  render() {
    return (
      <div
        className={"nobuffer flexbox container " + styles.fillpar}
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <div
          className={"nobuffer container"}
          style={{ flex: 1, width: "100%", maxWidth: "100%" }}
        >
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
        </div>
      </div>
    )
  }
}

export default HomePage
