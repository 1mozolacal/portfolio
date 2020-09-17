import React from "react"
//import { Link } from "gatsby"

import Banner from "../components/banner"
import NavBar from "../components/navBar"
import SandGround from "../components/testCom"
import styles from "../components/componentStyles.module.css"

const PageTop = () => (
  <div
    className={"flexbox container " + styles.fillpar + " " + styles.nobuffer}
    style={{ width: "100%", maxWidth: "100%" }}
  >
    <Banner></Banner>
    <div
      className={"container " + styles.nobuffer}
      style={{ flex: 1, width: "100%", maxWidth: "100%" }}
    >
      <div
        className={"row " + styles.fillpar + " " + styles.nobuffer}
        style={{ maxWidth: "100%" }}
      >
        <div className="col-md-3 bg-primary" style={{ maxHeight: "100%" }}>
          <NavBar></NavBar>
        </div>
        <div
          className={"col-md-9 bg-danger " + styles.fillpar}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <SandGround></SandGround>
        </div>
      </div>
    </div>
  </div>
)

export default PageTop
