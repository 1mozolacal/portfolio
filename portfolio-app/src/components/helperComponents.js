import React from "react"

import gitIcon from "../images/git-icon.png"
import galleryIcon from "../images/gallery.png"

class GitButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
    if (props.icon) {
      this.icon = props.icon
    } else {
      this.icon = gitIcon
    }
    this.styling = props.className
  }
  render() {
    return (
      <a href={this.link}>
        <img
          alt="Github Logo"
          className={this.styling}
          style={{ maxHeight: "100%" }}
          src={this.icon}
        ></img>
      </a>
    )
  }
}

class GalleryButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
    if (props.icon) {
      this.icon = props.icon
    } else {
      this.icon = galleryIcon
    }
    this.styling = props.className
  }
  render() {
    return (
      <a href={this.link}>
        <img
          alt="Gallery icon"
          className={this.styling}
          style={{ maxHeight: "100%" }}
          src={this.icon}
        ></img>
      </a>
    )
  }
}

export { GitButton, GalleryButton }
