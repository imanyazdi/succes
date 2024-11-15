import React from 'react'
import "./skills.css"
import ChildSkill from './ChildSkill'
export default function Skills() {
    const skillsData = [
        { name: "HTML", level: 100 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "PHP", level: 30 },
        { name: "WordPress", level: 90 },
        { name: "Photoshop", level: 55 },
    ]
    return (
        <ChildSkill data={skillsData}/>
    )
}
