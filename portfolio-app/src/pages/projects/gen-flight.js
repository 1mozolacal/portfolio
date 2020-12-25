import React, { useRef } from "react"

import GenericProject from "../../components/genericProjectPage.js"

import pic1 from "../../images/projects/Gen1.png"
import pic2 from "../../images/projects/Gen2.png"
import pic3 from "../../images/projects/Gen3.png"
import pic4 from "../../images/projects/Gen4.png"
import pic5 from "../../images/projects/Gen5.png"
import pic6 from "../../images/projects/Gen6.png"
import pic7 from "../../images/projects/Gen7.png"

const GenPage = () => {
  const mainText = [
    [
      "Summary",
      "The basic idea of the project is to use a neural network to control an 'air plane'(by air plane I am refereing to a 2D trigangle, the air plane simulation is not the main focus of this project). I am using it's position, speed and slight as inputs... INPUT LAYER -x position coordinate -y position coordinate -x speed velocity -y speed velocity -First slight line . . . -N slight line Originally I had two hidden layers but led to overfitting and the planes where memorizing the path and not learning intellegent behavious. It currently has no hidden layers. OUTPUT LAYER -forward -left -right -back -coast",
    ],
  ]
  const pic1Ref = useRef(pic1)
  const pic2Ref = useRef(pic2)
  const pic3Ref = useRef(pic3)
  const pic4Ref = useRef(pic4)
  const pic5Ref = useRef(pic5)
  const pic6Ref = useRef(pic6)
  const pic7Ref = useRef(pic7)
  return (
    <GenericProject
      title="Gen Flight"
      bannerImage={pic1Ref}
      text={mainText}
      git="https://github.com/1mozolacal/GenFlight"
      gallery={[pic1Ref, pic2Ref, pic3Ref, pic4Ref, pic5Ref, pic6Ref, pic7Ref]}
    ></GenericProject>
  )
}

export default GenPage
