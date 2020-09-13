import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import PropTypes from "prop-types";

const Banner = ( {title, message}) =>(
    <Jumbotron fluid>
<Container>
    <h1>{title}</h1>
    <p>
    {message}
    </p>
</Container>
</Jumbotron>
)

Banner.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
  }
  
  Banner.defaultProps = {
    title: 'Welcome',
    message: 'My name is Calvin Mozola',
  }
  

export default Banner;