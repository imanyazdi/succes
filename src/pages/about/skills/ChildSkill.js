import React, { useEffect, useState } from 'react';
import './skills.css';

export default function ChildSkill({ data }) {
    const[scrol,setscrol]=useState(true)
    useEffect(()=>{
        const handelscrol=()=>{
            if (window.scrollY>300) {
                setscrol(true)
            }else{
                setscrol(false)
            }
        }
        window.addEventListener("scroll",handelscrol)
        return()=>window.removeEventListener("scroll",handelscrol)
    },[])
    console.log(scrol);
    return (
        <div className='skills row'>
            {data.map((skill, index) => (
                <div key={index} className='skill-item col-lg-5 col-11 mb-4'>
                    <span className="skill">
                        {skill.name} <i className="val">{skill.level}%</i>
                    </span>
                    <div className='progress'>
                        {scrol&&<div
                            className='progress-bar'
                            style={{
                                '--final-width': `${skill.level}%`,
                            }}
                        ></div>}
                    </div>
                </div>
            ))}
        </div>
    );
}
