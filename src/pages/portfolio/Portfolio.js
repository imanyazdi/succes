import React, { useState } from 'react'
import Filterimg from "./filter/Filterimg";
import Imgbox from "./imgbox/Imgbox";

export default function Portfolio() {
  const[filterset,setfilterset]=useState("")
  const imgs=[
    {src:"/img/portfolio/portfolio-3.jpg",id:"3",state:"app"},
    {src:"/img/portfolio/portfolio-5.jpg",id:"5",state:"card"},
    {src:"/img/portfolio/portfolio-1.jpg",id:"1",state:"app"},
    {src:"/img/portfolio/portfolio-4.jpg",id:"4",state:"card"},
    {src:"/img/portfolio/portfolio-9.jpg",id:"9",state:"web"},
    {src:"/img/portfolio/portfolio-2.jpg",id:"2",state:"app"},
    {src:"/img/portfolio/portfolio-7.jpg",id:"7",state:"web"},
    {src:"/img/portfolio/portfolio-8.jpg",id:"8",state:"web"},
    {src:"/img/portfolio/portfolio-6.jpg",id:"6",state:"card"},

  ]
  return (
    <div className='--box'>
      <div className='-box'>
        <p className='section'><h5>Portfolio_____</h5></p>
        <h1>My Works</h1>
      </div>
        <Filterimg filter={setfilterset}/>
        <Imgbox img={imgs} filter={filterset}/>
    </div>
  )
}
