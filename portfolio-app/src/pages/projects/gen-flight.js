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
      "The basic idea of the project is to use a neural network to control an 'airplane' which is represented by a triangle. The Planes sight is feed into the network and the output determines which action it will perform.",
    ],
    [
      "Network",
      "I decided on a shallow network without hidden layers. The program has the capability to have up to 2 hidden layers (reference the gallery to see a network with 0 and 2 hidden layers) but I found that I was running into issues of overfitting with hidden layers so I removed them. The values in the network, both connection values and node values, are normalized and remain between -1 and 1. The normalization is done with the arctan function.\nINPUT\nx position coordinate \ny position coordinate \nx speed velocity \ny speed velocity \nN amount of sightlines.\nThe sightlines are a representation of the nearest object from the plan for a given angle. See that gallery for sightlines depiction.\nOUTPUT\nUp\nDown\nLeft\nRight\nCoast",
    ],
    [
      "Map",
      "This is not only one map it just that the ‘funnel’ map that is shown in the gallery is the best map that I made for training the planes. Maps are created using the map editor and are saved as a text file which has to be properly referenced in the main code to be used.",
    ],
    [
      "Results",
      "The goal of this project was to teach planes how to navigate a given course and more importantly learn about the basics of what a neural network is. The planes were able to learn basic obstacle avoidance behaviors but unable to fly collision-free. I hoped to get more impressive results than this but I did learn a lot about neural networks considering that I created the networks from scratch.",
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
