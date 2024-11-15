import React from 'react';
import './Resume.css';

const PersonalInfo = ({ name, title, contact }) => (
  <div className='resume-item pb-0'>
    <h4>{name}</h4>
    <p><em>{title}</em></p>
    <ul>
      {contact.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  </div>
);

const Educationn = ({ green, year, sss, exprient }) => (
  <div className='resume-item'>
    <h4>{green}</h4>
    <h5>{year}</h5>
    <p><em>{sss}</em></p>
    <p>{exprient}</p>
  </div>
);
const ExperienceItem = ({ jobTitle, year, company, responsibilities }) => (
  <div className='resume-item'>
    <h4>{jobTitle}</h4>
    <h5>{year}</h5>
    <p><em>{company}</em></p>
    <ul>
      {responsibilities.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

export default function Resume() {
  const personalInfo = {
    name: "Alice Barkley",
    title: "Innovative and deadline-driven Graphic Designer with 3+ years of experience.",
    contact: [
      "Portland par 127, Orlando, FL",
      "(123) 456-7891",
      "alice.barkley@example.com"
    ]
  };

  const experience = [
    {
      jobTitle: "Senior graphic design specialist",
      year: "2019 - Present",
      company: "Experion, New York, NY",
      responsibilities: [
        "Lead in the design, development, and implementation...",
        "Delegate tasks to the 7 members of the design team...",
        "Supervise the assessment of all graphic materials...",
        "Oversee the efficient use of production project budgets..."
      ]
    },
    {
      jobTitle: "Graphic design specialist",
      year: "2017 - 2018",
      company: "Stepping Stone Advertising, New York, NY",
      responsibilities: [
        "Developed numerous marketing programs...",
        "Managed up to 5 projects or tasks at a given time...",
        "Recommended and consulted with clients...",
        "Created 4+ design presentations and proposals a month..."
      ]
    }
  ];
  const Education = [
    {
      green: "Master of Fine Arts & Graphic Design",
      year: "2015 - 2016",
      sss: "Rochester Institute of Technology, Rochester, NY",
      exprient: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend"
    },
    {
      green: "Bachelor of Fine Arts & Graphic Design",
      year: "2010 - 2014",
      sss: "Rochester Institute of Technology, Rochester, NY",
      exprient: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
    },
  ]
  return (
    <div className='--box'>
      <div className='-box'>
        <p className='section'><h5>Resume_____</h5></p>
        <h1>Check My Resume</h1>
      </div>

      <div className="resume">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <PersonalInfo
              name={personalInfo.name}
              title={personalInfo.title}
              contact={personalInfo.contact}
            />

            <h3 className="resume-title">Education</h3>
            {Education.map((param,index)=>(
              <Educationn
              key={index}
              green={param.green}
              year={param.year}
              sss={param.sss} 
              exprient={param.exprient} 

              />
            ))}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((exp, index) => (
              <ExperienceItem
                key={index}
                jobTitle={exp.jobTitle}
                year={exp.year}
                company={exp.company}
                responsibilities={exp.responsibilities}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
