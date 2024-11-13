import { Mail } from "lucide-react"
import Data from "@/config/Data.json"


const Hero = () => {
  return (
    <div className='mb-10'>
      <h1 id="name" className='text-4xl font-bold leading-12'>I'm <br /> {Data.name}</h1>
      <h6 className='text-base text-muted-foreground pt-3'>{Data.age}y/o Tech Enthusiast, {Data.address.country}</h6>
      <div className='mt-5 xl:w-3/4'>
        <h6 className='text-base text-muted-foreground'>{Data.description}</h6>
      </div>
      <div className='mt-5'>
        <h6 className='text-base text-muted-foreground'>Feel free to reach me out at&nbsp;
          <a href={Data.socials.instagram.link} target='_blank' className='dark:hover:text-white hover:text-black  duration-300'>@<b className='font-semibold underline underline-offset-2'><strong>{Data.socials.instagram.username}</strong></b> </a>
          or&nbsp;
          <a href={Data.socials.mail} className='dark:hover:text-white hover:text-black  duration-300'>
            <Mail size={18} className='inline-block' />
            <b className='font-semibold underline underline-offset-2'><strong>{Data.socials.gmail}</strong></b>
          </a>
          .
        </h6>
      </div>
      <div className='mt-4 flex flex-row'>
        <h6 className='text-base text-muted-foreground'>View my&nbsp;
          <a href="#resume" download={""} className='underline underline-offset-2 dark:hover:text-white hover:text-black duration-300 font-semibold'><strong>Resume</strong></a>&nbsp;&#10697;
        </h6>
      </div>
      <h1 id="name" className='text-4xl font-bold leading-12 pt-10'>About me</h1>
    </div>
  )
}

export default Hero
