import React, { useRef } from "react"
import styling from "../style/projectPage.module.sass"

import { GitButton, GalleryButton } from "./helperComponents.js"

const GenericProject = props => {
  const testRef = useRef("test")
  return (
    <div>
      <div className={styling.bannerContainer}>
        <img
          alt="Banner"
          className={styling.bannerImage}
          src={props.bannerImage.current}
        ></img>
        <div className={styling.bannerTextWrapper}>
          <h1 className={styling.bannerText}>{props.title}</h1>
        </div>
      </div>
      <GenButton
        data={props.text}
        git={props.git}
        gallery={props.gallery}
      ></GenButton>
      <div>{props.customTop && props.customTop.current}</div>
      <div>{props.otherContributors}</div>
      <GenMainText data={props.text}></GenMainText>
      <div>{props.customBottom && props.customBottom.current}</div>
      {props.gallery && (
        <div
          id="Gallery"
          className={(styling.textContainer, styling.galleryHolder)}
        >
          <Gallery data={props.gallery}></Gallery>
        </div>
      )}
    </div>
  )
}

const GenMainText = props => {
  const genBlock = item => {
    return (
      <div id={item[0]} className={styling.textContainer}>
        <h2 className={styling.gallery}>{item[0]}</h2>
        <div className={styling.textText}>{item[1]}</div>
      </div>
    )
  }
  return <div>{props.data.map(genBlock)}</div>
}

const GenButton = props => {
  return (
    <div className={styling.buttonHolder}>
      {props.git && (
        <GitButton className={styling.gitButton} link={props.git}></GitButton>
      )}

      {props.data &&
        props.data.map(item => {
          return (
            <a href={"#" + item[0]} className={styling.liquidButton}>
              {item[0]}
            </a>
          )
        })}

      {props.gallery && (
        <GalleryButton
          className={styling.gitButton}
          link="#Gallery"
        ></GalleryButton>
      )}
    </div>
  )
}

const Gallery = props => {
  return (
    <ul className={styling.gallery}>
      {props.data.map(item => {
        return (
          <li className={styling.gallery} key={item.current}>
            <img
              alt="Gallery display"
              className={styling.galleryImage}
              src={item.current}
            ></img>
          </li>
        )
      })}
    </ul>
  )
}

export default GenericProject
