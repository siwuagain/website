import NutroPNG from '../../assets/projects/nutropng.png'
import RDD from '../../assets/projects/rdd.png'
import Zen from '../../assets/projects/zen.png'
import DrooVe from '../../assets/projects/droove.png'
import pickAxe from '../../assets/animations/pickaxe.gif'
import MyAEye from '../../assets/projects/myaeye.gif'
const projects = [

  {
    name: 'My A-Eye', 
    href: 'https://github.com/LawrenceLiang02/My-A-Eye-Frontend',  
    description: "Virtual assistant capable of conversating on the external physical environment through a camera to aid people with visual impairments in navigating and better understanding their surroundings."
    ,tools: "React, Tailwind, Flask, Whisper API, OpenAI"
    ,img: MyAEye
  },
  { name: 'NutroPNG', 
    href: 'https://github.com/siwuagain/mchacks', 
    description: "Web application that displays nutritional information of food using Vision AI's pre-trained ML models. The application can be paired with a camera. Awarded '3rd Best Project' at McHacks 10"
    ,tools: "Vue.js, Flask, Google Vision API"
    ,img: NutroPNG 
  },
  { name: 'ReadyDoneData', 
    href: 'https://github.com/siwuagain/ConUHacks2023', 
    description: "Web application that displays graphical patterns based on large samples (200, 000 +) of equity market exchanges treated with Apache Spark."
    ,tools: "Next.js, Flask, Apache Spark"
    ,img: RDD
  },
  { name: 'Zen Bot', 
    href: 'https://github.com/deemo-o/Zen', 
    description: "Multi-functional bot used for popular VoIP social platform Discord, tailored for a chatroom for people to interact with peers sharing common interests."
    ,tools : "Python, SQLite" 
    ,img: Zen
  },
  { name: 'DrooVe', 
    href: 'https://github.com/siwuagain/DrooVE',  
    description: "Itinerary optimization system for truck drivers that lists recommended rest stops based on starting location, destination, and time slept. Awarded 'Best Beginner Project' at CodeJam 12."
    ,tools: "Node.js, TailwindCSS"
    ,img: DrooVe
  },
]


export default function Projects() {
  return (
    <div className="text-center mt-40 px-18vw text-gray-300">
      <div className='flex flex-col justify-center'>
        <img src={pickAxe} className='size-16 self-center'/>
        <h1 className="mb-16" id="projects" style={{ fontFamily: 'pixel', fontWeight: 'bold'}}>
          Projects
        </h1>
      </div>
      <div key={projects} className="flex flex-col"> 
        {projects.map((item) => (
          <a href={item.href} target="_blank">
            <div className="hover:scale-105 transition duration-200 flex md:flex-row flex-col shadow-2xl mb-12 p-8 rounded-lg space-x-4 items-center">
              <div className="flex flex-col text-left w-3/5">
                <div className='text-3xl mb-4 text-amber-100' style={{ fontFamily: 'pixel'}}>{item.name}</div>
                <div className='text-xl mb-4 text-gray-300'>{item.description}</div>
                <div className='text-lg text-gray-400'>{item.tools}</div>
              </div>
              <div className='w-2/5 sm:mt-2'>
                <img className='rounded-lg object-fill'  src={item.img} />
              </div>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}