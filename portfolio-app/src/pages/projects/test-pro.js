import React, { useRef } from "react"

import GenericProject from "../../components/genericProjectPage.js"

import cat from "../../images/cat-look-up.jpg"
import wires from "../../images/green-bottom.jpg"
import circuit from "../../images/dark-circuit.jpg"
import circle from "../../images/circle.jpg"
import point from "../../images/points.jpg"

const SecondPage = () => {
  const catRef = useRef(cat)
  const wireRef = useRef(wires)
  const aRef = useRef(circuit)
  const bRef = useRef(circle)
  const cRef = useRef(point)

  const mainText = [
    ["GEN Flight", "Somestuf about the flights"],
    ["ENding", "Ohhhh no it is over :("],
    ["ENdinga", "Ohhhh no it is over :("],
    ["ENdingb", "Ohhhh no it is over :("],
    ["ENdingc", "Ohhhh no it is over :("],
  ]

  return (
    <GenericProject
      title="title of the greatness"
      bannerImage={catRef}
      text={mainText}
      git="test"
      gallery={[catRef, wireRef, aRef, bRef, cRef]}
    ></GenericProject>
  )
}

export default SecondPage
