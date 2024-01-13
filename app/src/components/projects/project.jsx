import NutroPNG from '../../assets/projects/nutropng.png'
import RDD from '../../assets/projects/rdd.png'
import Zen from '../../assets/projects/zen.png'
import DrooVe from '../../assets/projects/droove.png'
const projects = [
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
  }
]


export default function Projects() {
  return (
    <div className="text-center mt-32 px-18vw text-gray-300">
      <h1 className="mb-16">
        Projects
      </h1>
      <div key={projects} className="flex flex-col"> 
        {projects.map((item) => (
          <a href={item.href} target="_blank">
            <div className="hover:scale-105 transition duration-200 flex flex-row shadow-2xl mb-12 space-x-8 p-8 rounded-lg">
              <div className="flex flex-col text-left">
                <div className='text-3xl mb-4 text-amber-100'>{item.name}</div>
                <div className='text-xl mb-4 text-gray-300'>{item.description}</div>
                <div className='text-lg text-gray-400'>{item.tools}</div>
              </div>
              <div className="flex flex-col">
                <div className='box-content h-32 w-48 object-cover'>
                  <img className='rounded-lg '  src={item.img} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}