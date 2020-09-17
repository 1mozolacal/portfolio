import React from "react"
//import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
//import PropTypes from "prop-types"
import styling from "./componentStyles.module.css"

const SandGround = () => (
  <div className={styling.homepagebackground}>
    <Button variant="primary">Primary</Button>{" "}
    <Button variant="secondary">Secondary</Button>{" "}
    <Button variant="success">Success</Button>{" "}
    <Button variant="warning">Warning</Button>{" "}
    <Button variant="danger">Danger</Button>{" "}
    <Button variant="info">Info</Button> <Button variant="light">Light</Button>{" "}
    <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
  </div>
)

export default SandGround
