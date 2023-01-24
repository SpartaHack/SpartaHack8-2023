import React from 'react'
import gabrielPhoto from '../../materials/team/gabriel.png'
import aarhamPhoto from '../../materials/team/aarham.png'
import arefPhoto from '../../materials/team/aref.png'
import khushiPhoto from '../../materials/team/khushi.png'
import jordanPhoto from '../../materials/team/jordan.png'
import shreyPhoto from '../../materials/team/shrey.png'
import joelPhoto from '../../materials/team/joel.png'
import leoPhoto from '../../materials/team/leo.png'
import mannPhoto from '../../materials/team/mann.png'
import TeamMember from './TeamMember'
import SectionHeading from './SectionHeading'

function TeamSection() {
  const membersData = [
    {
      name: "Gabriel Sotelo",
      position: "Co-Director",
      about: "Gabriel is a junior from Peru double majoring in Computer Science & Mathematics. This is his second consecutive year on the SpartaHack organizing team.",
      photoPath: gabrielPhoto,
      width: 6,
      linkedin: "https://www.linkedin.com/in/gabriel-sotelo/",
      github: "https://github.com/Gabaloo1",
      website: "https://www.gabrielsotelo.com"
    },
    {
      name: "Aarham Wasit Khan",
      position: "Co-Director",
      about: "Aarham is a sophomore from Bangladesh double majoring in Computer Science & Mathematics. This is his second consecutive year on the SpartaHack organizing team.",
      photoPath: aarhamPhoto,
      width: 6,
      linkedin: "http://www.linkedin.com/in/wasit",
      github: "",
      website: ""
    },
    {
      name: "Aref Zeitoun",
      position: "Operations Lead",
      about: "Aref is a senior from Lebanon lived most of his life in Gambia, Africa, and is majoring in Computer Science.",
      photoPath: arefPhoto,
      width: 3,
      linkedin: "https://www.linkedin.com/in/aref-zeitoun/",
      github: "",
      website: ""
    },
    {
      name: "Khushi Vora",
      position: "Marketing Lead",
      about: "Khushi is a junior from India majoring in Computer Science with minors in Cognitive Science and Information Communication Technology for Development.",
      photoPath: khushiPhoto,
      width: 3,
      linkedin: "https://www.linkedin.com/in/khushivoraa/",
      github: "",
      website: ""
    },
    {
      name: "Jordan Arnold",
      position: "Finance Lead",
      about: "Jordan is a senior from Highland, Michigan majoring in Mechanical Engineering with a concentration in Aerospace.",
      photoPath: jordanPhoto,
      width: 3,
      linkedin: "https://www.linkedin.com/in/arnold-jordan/",
      github: "",
      website: ""
    },
    {
      name: "Shrey Kohli",
      position: "Logistics Lead",
      about: "Shrey is a sophomore from Sharjah, UAE majoring in Computer Science.",
      photoPath: shreyPhoto,
      width: 3,
      linkedin: "https://www.linkedin.com/in/shrey-kohli",
      github: "",
      website: ""
    },
    {
      name: "Joel Nataren",
      position: "Web Developer - Backend",
      about: "Joel is a junior from El Salvador majoring in Computer Science with a minor in Business. He is in charge of backend website development.",
      photoPath: joelPhoto,
      width: 4,
      linkedin: "",
      github: "",
      website: ""
    },
        {
      name: "Mann Aswal",
      position: "Designer & Web Developer - Frontend",
      about: "Mann is a freshman from Gurgaon, India majoring in Computer Science. He is in charge of brand design, and frontend website development.",
      photoPath: mannPhoto,
      width: 4,
      linkedin: "",
      github: "",
      website: ""
    },
    {
      name: "Leonardo Specht",
      position: "Web Developer - Backend",
      about: "Leo is a sophomore from Brasil majoring in Computer Science with a minor in Business. He is mainly in charge of backend website development.",
      photoPath: leoPhoto,
      width: 4,
      linkedin: "",
      github: "",
      website: ""
    },

  ]
  return (
    <div className=' h-fit'>
      <SectionHeading text="Meet the Team" />
      {false && 
      <div hidden>
        <div className="lg:col-span-3"></div>
        <div className="lg:col-span-4"></div>
        <div className="lg:col-span-6"></div>
      </div>
      }
      <div className='w-full h-full grid grid-cols-12 gap-3 justify-evenly items-center'>
        {membersData.map((member) => {
          return (
            <TeamMember className={"lg:col-span-" + member.width}
              photoPath={member.photoPath}
              name={member.name}
              position={member.position}
              about={member.about}
              website={member.website}
              github={member.github}
              linkedin={member.linkedin}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TeamSection