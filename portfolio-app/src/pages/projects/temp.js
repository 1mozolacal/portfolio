import React, { useRef } from "react"

import GenericProject from "../../components/genericProjectPage.js"

import catImage from "../../images/cat-look-up.jpg"

const TempPage = () => {
  const mainText = [["stuff", "THIIS_IS_STUFF"]]
  const catRef = useRef(catImage)

  return (
    <GenericProject
      bannerImage={catRef}
      title="title"
      text={mainText}
    ></GenericProject>
  )
}

export default TempPage
