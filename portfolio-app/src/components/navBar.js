import React from "react"
import { Card, Button } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"
import Styling from "../style/componentStyles.module.css"
//import PropTypes from "prop-types"

const NavBar = () => (
  <div
    className={Styling.hidescroll + " " + Styling.navbarbackground}
    style={{ maxHeight: "100vh" }}
  >
    <LinkNavBar></LinkNavBar>
    <AccordionSkills style={{ margin: "15px" }}></AccordionSkills>
  </div>
)

const LinkNavBar = props => {
  var selection = readOffProps(props.select, "Projects")
  var listItemClass = [
    "list-group-item menu-not-selcted " + Styling.nobuffer,
    "list-group-item menu-not-selcted " + Styling.nobuffer,
    "list-group-item menu-not-selcted " + Styling.nobuffer,
    "list-group-item menu-not-selcted " + Styling.nobuffer,
    "list-group-item menu-not-selcted " + Styling.nobuffer,
  ]
  var selectedFormate = "list-group-item menu-selcted " + Styling.nobuffer
  switch (selection) {
    case "Home":
      listItemClass[0] = selectedFormate
      break
    case "Projects":
      listItemClass[1] = selectedFormate
      break
    case "Passed Work":
      listItemClass[2] = selectedFormate
      break
  }
  return (
    <ul className={"list-group list-group-flush " + Styling.nobuffer}>
      <li className={listItemClass[0]}>Home</li>
      <li className={listItemClass[1]}>Projects</li>
      <li className={listItemClass[2]}>Privious work</li>
      <li className={listItemClass[3]}>Extra curricular</li>
      <li className={listItemClass[4]}>Something</li>
    </ul>
  )
}

const GenerateSkillCard = props => {
  const header = readOffProps(props.header, "header")
  const items = readOffProps(props.items, {})
  const eventKey = readOffProps(
    props.eventKey,
    Math.floor(Math.random() * 1000000)
  )
  const listGroupClass = readOffProps(props.listGroup, "list-group")
  const listItemClass = readOffProps(
    props.listItemClass,
    "list-group-item d-flex justify-content-between align-items-center super-dark-background"
  )
  const listBadgeClass = readOffProps(
    props.listBadgeClass,
    "badge badge-primary badge-pill"
  )

  return (
    <Card className="dark-background">
      <Card.Header>
        <Accordion.Toggle
          className="skill-button"
          as={Button}
          eventKey={eventKey}
        >
          {header}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <ul class={listGroupClass}>
            {Object.keys(items).map((key, index) => {
              return (
                <li className={listItemClass}>
                  {key}
                  <span className={listBadgeClass}>{items[key]}</span>
                </li>
              )
            })}
          </ul>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

function readOffProps(readVal, defaultVal) {
  if (readVal) {
    return readVal
  } else {
    return defaultVal
  }
}

const AccordionSkills = props => {
  const listGroupClass = "list-group"
  const listItemClass =
    "list-group-item d-flex justify-content-between align-items-center"
  const listBadgeClass = "badge badge-primary badge-pill"
  var style = ""
  if (props.style) {
    style = props.style
  }
  return (
    <Accordion style={style}>
      <GenerateSkillCard
        header="Languages"
        items={{
          Python: "7/10",
          Java: "5/10",
          JavaScript: "3/10",
          LabVIEW: "3/10",
          C: "3/10",
          SQL: "2/10",
          "HTML/CSS": "",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Frameworks"
        items={{ Django: "5/10", React: "3/10", Gatsby: "1/10" }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Dev Ops tools"
        items={{ Git: "8/10", Docker: "3/10", Agile: "1/10" }}
      ></GenerateSkillCard>

      <GenerateSkillCard
        header="Interests"
        items={{
          Swimming: "",
          "Rock climbing": "",
          Drawing: "",
          "Learning Languages": "",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Competitions"
        items={{
          "Code to Win": "60-70 out of 1000+",
          "Hack the North": "",
          "Hack the Valley": "",
          "Ontario skills - robotics and control systems": "gold",
          "Halton skills - robotics and control systems": "gold",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Concepts"
        items={{
          CCP: "5/10",
          Robotics: "3/10",
          "PID Conrollers": "1/10",
          "Data Structures": "",
          "Computer Vision": "",
          Algorithms: "",
        }}
      ></GenerateSkillCard>
    </Accordion>
  )
}

export default NavBar
