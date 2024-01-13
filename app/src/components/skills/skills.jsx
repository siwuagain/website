import '../../assets/fonts.css'
import pickAxe from '../../assets/animations/pickaxe.gif'
const languages = ["Java", "JavaScript", "TypeScript", "R", "Python", "Bash", "C/C++"];
const frameworks = ["Angular", "React", "Ionic", "Vue", "Flask", "Tailwind", "..."];
const categories = [
  { title: "Languages", items: languages },
  { title: "Frameworks", items: frameworks },
];

export default function Skills() {
  return (
    <div className="text-center mt-40 px-18vw text-gray-300 mb-40">
      <div className='flex flex-col justify-center'>
        <img src={pickAxe} className='size-16 self-center'/>
        <h1 className="mb-16" id="skills" style={{ fontFamily: 'pixel', fontWeight: 'bold'}}>Skills</h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {categories.map((category) => ( 
          <div key={category.title} className="flex flex-col space-y-2 items-center mb-8 w-1/3">
            <h2 className="text-amber-100 text-3xl mb-4" style={{ fontFamily: 'pixel', fontWeight: 'normal'}}>{category.title} </h2>
            {category.items.map((item) => (
              <div key={item} className="text-xl text-gray-300 w-full rounded-md py-4 shadow-md">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
