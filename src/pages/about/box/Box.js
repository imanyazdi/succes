import React from 'react'
import "./Box.css"
import Child from './Child'
export default function Box() {
    const data = [
        { number: 132, exprient: "Happy Clients",icon:"bi bi-emoji-smile" },
        { number: 1035, exprient: "Hours of Support",icon:"bi bi-headset"},
        { number: 521, exprient: "Projects",icon:"bi bi-journal-richtext" },
        { number: 624, exprient: "Awards",icon:"bi bi-award" }
    ];
  return (
    <div className='row'>
            <Child data={data}/>
    </div>
  )
}
