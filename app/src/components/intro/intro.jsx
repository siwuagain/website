import Animation from "../animation/animation"
import githubSvg from "../../assets/icons/github.svg"
import linkedInSvg from "../../assets/icons/linkedin.svg"
import emailSvg from "../../assets/icons/email.svg"
import boy from "../../assets/animations/boy.gif"

const socials = [
  {href: "https://github.com/siwuagain", src: githubSvg},
  {href: "https://www.linkedin.com/in/wu-simon/", src: linkedInSvg},
  {href: "mailto:simonw011@outlook.com", src: emailSvg},
]

export default function Intro() {
  return (
    <div className="flex flex-col mt-40 px-18vw">
      <Animation/>
      <div key="socials" className="flex justify-center mt-40 space-x-8">
        {socials.map((item) => (
          <a href={item.href} target="_blank" className="hover:-translate-y-1 transition duration-300">
            <img src={item.src} />
          </a>
          ))}
      </div>
      <div className="mt-40 flex justify-center">
        <img className="" src={boy}></img>
      </div>
      <div className="flex flex-row items-center mt-20 justify-between">
        <div className="text-gray-300 text-2xl text-left">
          Hi! I'm Simon, currently studying Computer Science at McGill University. In my free time, 
          I enjoy building projects to discover and learn Web and Software Development. I am most
          experienced with JavaScript/TypeScript, and also well versed with Java, C, and Python. Some of
          my hobbies include the guitar, running, and weightlifting. Let's connect!

        </div>
      </div>
    </div>
  )
}