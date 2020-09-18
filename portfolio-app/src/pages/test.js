import React from "react"
//import { Link } from "gatsby"

//import Banner from "../components/banner"
import NavBar from "../components/navBar"
import SandGround from "../components/testCom"
import styles from "../components/componentStyles.module.css"

const PageTop = () => (
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
          className={"nobuffer col-md-3 primary-background"}
          style={{ maxHeight: "100%" }}
        >
          <NavBar></NavBar>
        </div>
        <div
          className={"nobuffer col-md-9 primary-background " + styles.fillpar}
        >
          <SandGround></SandGround>
        </div>
      </div>
    </div>
  </div>
)

export default PageTop
