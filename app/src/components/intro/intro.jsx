import Animation from "../animation/animation"
import githubSvg from "../../assets/icons/github.svg"
import linkedInSvg from "../../assets/icons/linkedin.svg"
import emailSvg from "../../assets/icons/email.svg"

const socials = [
  {href: "https://github.com/siwuagain", src: githubSvg},
  {href: "https://www.linkedin.com/in/wu-simon/", src: linkedInSvg},
  {href: "mailto:simonw011@outlook.com", src: emailSvg},
]

export default function Intro() {
  return (
    <div className="flex flex-col mt-32 px-18vw">
      <Animation/>
      <div key="socials" className="flex justify-center mt-16 space-x-8">
        {socials.map((item) => (
          <a href={item.href} target="_blank" className="hover:-translate-y-1 transition duration-300">
            <img src={item.src} />
          </a>
          ))}
      </div>
      <div>
        <div className="text-gray-300 text-2xl mt-16 text-left">
          I currently study Computer Science at McGill University. What
          inspired me to choose this field of study is its significant 
          impact in shaping and evolving how we communicate and 
          share information. I am very eager to expand my knowledge and technical
          skillset through my studies, projects, and work experience. Let's connect!
        </div>
      </div>
    </div>
  )
}