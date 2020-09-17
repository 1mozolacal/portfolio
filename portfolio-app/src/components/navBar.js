import React from "react"
import { Card, Button } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"
//import PropTypes from "prop-types"

const NavBar = () => <AccordionSkills></AccordionSkills>

const AccordionSkills = () => {
  const listGroupClass = "list-group"
  const listItemClass =
    "list-group-item d-flex justify-content-between align-items-center"
  const listBadgeClass = "badge badge-primary badge-pill"
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="0">
            Languages
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul class={listGroupClass}>
              <li class={listItemClass}>
                Python
                <span class={listBadgeClass}>6/10</span>
              </li>
              <li class={listItemClass}>
                Java
                <span class={listBadgeClass}>2/10</span>
              </li>
              <li class={listItemClass}>
                JavaScript
                <span class={listBadgeClass}>1/10</span>
              </li>
              <li class={listItemClass}>
                C<span class={listBadgeClass}>1/10</span>
              </li>
              <li class={listItemClass}>
                HTML/CSS
                <span class={listBadgeClass}>1/10</span>
              </li>
              <li class={listItemClass}>
                LabVIEW
                <span class={listBadgeClass}>1/10</span>
              </li>
              <li class={listItemClass}>
                SQL
                <span class={listBadgeClass}>1/10</span>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="1">
            Frameworks
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul class={listGroupClass}>
              <li class={listItemClass}>
                React
                <span class={listBadgeClass}>1/10</span>
              </li>
              <li class={listItemClass}>
                Django
                <span class={listBadgeClass}>2/10</span>
              </li>
              <li class={listItemClass}>
                Gatsby
                <span class={listBadgeClass}>1/10</span>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="2">
            Interests
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <ul class={listGroupClass}>
              <li class={listItemClass}>
                Python
                <span class={listBadgeClass}>6/10</span>
              </li>
              <li class={listItemClass}>
                Java
                <span class={listBadgeClass}>2/10</span>
              </li>
              <li class={listItemClass}>
                JavaScript
                <span class={listBadgeClass}>1/10</span>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} eventKey="3">
            Competitions
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <ul class={listGroupClass}>
              <li class={listItemClass}>
                Python
                <span class={listBadgeClass}>6/10</span>
              </li>
              <li class={listItemClass}>
                Java
                <span class={listBadgeClass}>2/10</span>
              </li>
              <li class={listItemClass}>
                JavaScript
                <span class={listBadgeClass}>1/10</span>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default NavBar
