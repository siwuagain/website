import Animation from "../animation/animation"
import githubSvg from "../../assets/github.svg"
import linkedInSvg from "../../assets/linkedin.svg"
import emailSvg from "../../assets/email.svg"
export default function Intro() {
  return (
    <div className="flex flex-col mt-32 px-25vw">
      <Animation/>
      <div className="flex justify-center mt-16 space-x-8">
        <a href="https://github.com/siwuagain" target="_blank">
          <img src={githubSvg} />
        </a>
        <a href="https://www.linkedin.com/in/wu-simon/" target="_blank">
          <img src={linkedInSvg} />
        </a>
        <a href="mailto:simonw011@outlook.com">
          <img src={emailSvg}/>
        </a>
      </div>
      <div>
        <div className="text-gray-300 text-2xl mt-16 text-left">
          I currently study Computer Science at McGill University. What
          inspired me to choose this field of study is its significant 
          impact in shaping and evolving how we communicate and 
          share information. I am very eager to expand my knowledge and technical
          skillset through my studies, projects, and work experiences. Let's connect!
        </div>
      </div>
    </div>
  )
}