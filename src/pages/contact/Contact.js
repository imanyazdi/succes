import React from 'react'
import Contactbox from './box/Contactbox'
import Contactform from './form/Contactform'

export default function Contact() {
  const array=[
    {title:"My Address",information:"A108 Adam Street, New York, NY 535022",icon:"bx bx-map"},
    {title:"Social Profiles",information:"inistagram",icon:"bx bx-share-alt"},
    {title:"Email Me",information:"contact@example.com",icon:"bx bx-envelope"},
    {title:"Call Me",information:"+1 5589 55488 55",icon:"bx bx-phone-call"},
  ]
  return (
    <div className='--box'>
      <div className='-box'>
        <p className='section'><h5>Contact</h5></p>
        <h1>Contact Me</h1>
      </div>
      <Contactbox array={array}/>
      <Contactform/>
    </div>
  )
}
