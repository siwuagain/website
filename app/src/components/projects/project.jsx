const projects = [
  { name: 'NutroPNG', href: '#', description: ""},
  { name: 'ReadyDoneData', href: '#', description: ""},
  { name: 'Zen Bot', href: '#', description: ""},
  { name: 'DrooVe', href: '', description: ""}
]


export default function Projects() {
  return (
    <div className="text-center mt-32 px-25vw text-gray-300">
      <h1 className="text-gray-300">
        Projects
      </h1>
      <div className="flex flex-col"> 
        {projects.map((item) => (
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div>{item.name}</div>
              <div>{item.description}</div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}