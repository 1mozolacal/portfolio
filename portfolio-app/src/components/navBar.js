import React from "react"
import { Card, Button } from "react-bootstrap"
import { BrowserView } from "react-device-detect"
import Accordion from "react-bootstrap/Accordion"
import Styling from "../style/componentStyles.module.sass"
//import PropTypes from "prop-types"

const NavBar = props => (
  <div className={Styling.hidescroll + " " + Styling.navbarbackground}>
    <LinkNavBar
      select={props.select}
      linkHandler={props.linkHandler}
    ></LinkNavBar>
    <BrowserView>
      <AccordionSkills style={{ margin: "15px" }}></AccordionSkills>
    </BrowserView>
    <HideButton onClick={props.navBarCallBack}></HideButton>
  </div>
)

const HideButton = props => {
  return (
    <div onClick={() => props.onClick(false)} className={Styling.navhidebutton}>
      ←
    </div>
  )
}

const LinkNavBar = props => {
  var selection = readOffProps(props.select, "Home")
  var handler = props.linkHandler
  var listItemClass = [
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
    case "Experience":
      listItemClass[2] = selectedFormate
      break
    default:
      listItemClass[0] = selectedFormate
      break
  }
  return (
    <ul className={"list-group list-group-flush " + Styling.nobuffer}>
      <li className={listItemClass[0]} onClick={() => handler("Home")}>
        Home
      </li>
      <li className={listItemClass[1]} onClick={() => handler("Projects")}>
        Projects
      </li>
      <li className={listItemClass[2]} onClick={() => handler("Experience")}>
        Experience
      </li>
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
          <ul className={listGroupClass}>
            {Object.keys(items).map((key, index) => {
              return (
                <li className={listItemClass}>
                  {key}
                  <span
                    style={{ "white-space": "pre-wrap" }}
                    className={listBadgeClass}
                  >
                    {items[key]}
                  </span>
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
  var style = ""
  if (props.style) {
    style = props.style
  }
  return (
    <Accordion style={style}>
      <GenerateSkillCard
        header="Languages"
        items={{
          Python: "8/10",
          Java: "5/10",
          JavaScript: "5/10",
          LabVIEW: "3/10",
          C: "4/10",
          SQL: "4/10",
          "HTML/CSS": "4/10",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Frameworks"
        items={{ Django: "6/10", React: "4/10", Gatsby: "2/10" }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Dev Ops tools"
        items={{ Git: "7/10", Docker: "3/10", Agile: "5/10" }}
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
          "Ontario skills - robotics and control systems": "Gold",
          "Halton skills - robotics and control systems": "Gold",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Concepts"
        items={{
          OOP: "8/10",
          Robotics: "5/10",
          "PID Controllers": "2/10",
          "Data Structures": "6/10",
          "Computer Vision": "3/10",
          Algorithms: "6/10",
        }}
      ></GenerateSkillCard>
    </Accordion>
  )
}

export default NavBar
