import React from 'react'
import "./About.css"
import Title from "./aboutTitle/AboutTitle";
import Box from "./box/Box";
import Img from "../../img/me.jpg";
import Skills from './skills/Skills';
export default function About() {
  return (
    <div className='--box'>
      <div className='-box'>
        <p className='section'><h5>About_____</h5></p>
        <h1>Learn more about me</h1>
      </div>
        <Title img={Img} />
        <Box />
        <p className='section'><h4> Skills_____</h4></p>
        <Skills></Skills>
    </div>
  )
}
