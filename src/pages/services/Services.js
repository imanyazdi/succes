import React from 'react'
import "./Services.css"
const Servicess = ({ icon, title, total }) =>
(
  <div className='services-box col-md-5 col-lg-3'>
    <div className='icon-box'> 
    <div className='icon'><i className={`${icon}`}></i></div>
    <h4>{title}</h4>
    <p>{total}</p>
    </div>
  </div>
)

export default function Services() {
  const servises = [
    {
      icon: "bx bxl-dribbble",
      title: "Lorem Ipsum",
      total: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      icon: "bx bx-file",
      title: "Sed ut perspiciatis",
      total: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      icon: "bx bx-tachometer",
      title: "Magni Dolores",
      total: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
      icon: "bx bx-world",
      title: "Nemo Enim",
      total: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
      icon: "bx bx-slideshow",
      title: "Dele cardo",
      total: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
    },
    {
      icon: "bx bx-arch",
      title: "Divera don",
      total: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
    },
  ]
  return (
    <div className='--box'>
      <div className='-box'>
        <p className='section'><h5>Servises_____</h5></p>
        <h1>My Services</h1>
      </div>
      <div className='services-boxs'>
        {servises.map((param, index) => (
          <Servicess
            key={index}
            icon={param.icon}
            title={param.title}
            total={param.total}
          />
        ))}
      </div>
    </div>
  )
}
