import React from 'react'
import "./Filterimg.css"
export default function Filterimg({filter}) {
  return (
    <div>
      <ul className='botton nav'>
        <li className='nav-item active' onClick={()=>filter("")}>all</li>
        <li className='nav-item' onClick={()=>filter("app")}>app</li>
        <li className='nav-item' onClick={()=>filter("card")}>card</li>
        <li className='nav-item' onClick={()=>filter("web")}>web</li>
      </ul>
    </div>
  )
}
