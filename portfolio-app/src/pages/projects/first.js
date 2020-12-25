import React, { useRef } from "react"

import GenericProject from "../../components/genericProjectPage.js"

import pic1 from "../../images/projects/First1.jpg"
import pic2 from "../../images/projects/First2.jpg"
import pic3 from "../../images/projects/First3.jpg"
import pic4 from "../../images/projects/First4.jpg"
import pic5 from "../../images/projects/First5.jpg"

const TempPage = () => {
  const mainText = [
    [
      "FIRST",
      "(F)or (I)nspiration and (R)ecognition of (S)cience and (T)echnology. FIRST is a global organization that seeks to engage students in the STEM field, I am one of those students.",
    ],
    [
      "Team Member",
      "During all 4 years of highschool I was on my high school's robotics team, team 4992. In my last two years I was the programming lead of my team and worked on providing teleoperated control of the robot as well as crate routes for autmous control of the robot.",
    ],
    [
      "Team Mentor",
      "After I graduated high school I still had the 'FIRST fever' and join a school close to my university as a mentor, team 5834. I was the software mentor and taught the students coding, probleming solving, and robotics concepts like PID.",
    ],
  ]
  const bannerRef = useRef(
    "https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-V.png"
  )
  const pic1Ref = useRef(pic1)
  const pic2Ref = useRef(pic2)
  const pic3Ref = useRef(pic3)
  const pic4Ref = useRef(pic4)
  const pic5Ref = useRef(pic5)

  return (
    <GenericProject
      bannerImage={bannerRef}
      title="First Robotics"
      text={mainText}
      gallery={[pic1Ref, pic2Ref, pic3Ref, pic4Ref, pic5Ref]}
    ></GenericProject>
  )
}

export default TempPage
