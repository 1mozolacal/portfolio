import React from "react"
import { Card, Button } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"
import Styling from "./componentStyles.module.css"
//import PropTypes from "prop-types"

const NavBar = () => (
  <div>
    <LinkNavBar></LinkNavBar>
    <AccordionSkills style={{ margin: "15px" }}></AccordionSkills>
  </div>
)

const LinkNavBar = () => {
  return (
    <ul class={"list-group list-group-flush " + Styling.nobuffer}>
      <li class={"list-group-item list-group-item-info  " + Styling.nobuffer}>
        Cras justo odio
      </li>
      <li class={"list-group-item list-group-item-light " + Styling.nobuffer}>
        Dapibus ac facilisis in
      </li>
      <li class="list-group-item list-group-item-info">Morbi leo risus</li>
      <li class="list-group-item list-group-item-info">
        Porta ac consectetur ac
      </li>
      <li class="list-group-item">Vestibulum at eros</li>
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
    "list-group-item d-flex justify-content-between align-items-center"
  )
  const listBadgeClass = readOffProps(
    props.listBadgeClass,
    "badge badge-primary badge-pill"
  )

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} eventKey={eventKey}>
          {header}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <ul class={listGroupClass}>
            {Object.keys(items).map((key, index) => {
              return (
                <li class={listItemClass}>
                  {key}
                  <span class={listBadgeClass}>{items[key]}</span>
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
          Python: "0/10",
          Java: "1/10",
          JavaScript: "1/10",
          LabVIEW: "1/10",
          C: "1/10",
          SQL: "1/10",
        }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Frameworks"
        items={{ calvin: "value", other: "1/10" }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Interests"
        items={{ calvin: "value", other: "1/10" }}
      ></GenerateSkillCard>
      <GenerateSkillCard
        header="Competitions"
        items={{ calvin: "value", other: "1/10" }}
      ></GenerateSkillCard>
    </Accordion>
  )
}

export default NavBar
