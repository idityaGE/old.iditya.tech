import { Mail } from "lucide-react"
import { PersonalData } from "@/config/personal.config"
import { LinkData } from "@/config/links.config"


const Hero = () => {
  return (
    <div className='mb-10'>
      <h1 id="name" className='text-4xl font-bold leading-12'>I'm <br /> {PersonalData.name}</h1>
      <h6 className='text-base text-muted-foreground pt-3'>{PersonalData.age}y/o Tech Enthusiast, {PersonalData.address.country}</h6>
      <div className='mt-5 xl:w-3/4'>
        <h6 className='text-base text-muted-foreground'>{PersonalData.description}</h6>
      </div>
      <div className='mt-5'>
        <h6 className='text-base text-muted-foreground'>Feel free to reach me out at&nbsp;
          <a href={LinkData.twitter} target='_blank' className='dark:hover:text-white hover:text-black  duration-300' about="Instagram Link">@<b className='font-semibold underline underline-offset-2'><strong>{LinkData.twitter.split('/').pop()}</strong></b> </a>
          or&nbsp;
          <a href={LinkData.mail} className='dark:hover:text-white hover:text-black  duration-300' about="Mail Link">
            <Mail size={18} className='inline-block' />
            <b className='font-semibold underline underline-offset-2'><strong>{LinkData.gmail}</strong></b>
          </a>
          .
        </h6>
      </div>
      <div className='mt-4 flex flex-row'>
        <h6 className='text-base text-muted-foreground'>View my&nbsp;
          <a
            href="./resume.pdf"
            download="Aditya_Resume.pdf"
            className='underline underline-offset-2 dark:hover:text-white hover:text-black duration-300 font-semibold'
            about="Resume Link"
            onClick={(e) => {
              e.preventDefault()
              alert("Haven't made it yet 😔, Working on it !")
            }}
          >
            <strong>Resume</strong>
          </a>
          &nbsp;&#10697;
        </h6>
      </div>
      <h1 id="name" className='text-4xl font-bold leading-12 pt-10'>About me</h1>
    </div>
  )
}

export default Hero
