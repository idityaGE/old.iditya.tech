import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <h1 id="name" className='text-4xl font-bold leading-12'>I'm <br /> Aditya</h1>
      <h6 className='text-base text-[#52525B] dark:text-[#A1A1A1] pt-3'>19y/o Tech Enthusiast, India</h6>
      <div className='mt-5 xl:w-3/4'>
        <h6 className='text-base text-[#52525B] dark:text-[#A1A1A1]'>I'm a software developer based in India. I have a passion for developing software that improves the lives of those around me. I specialize in building web applications and have professional experience working with JavaScript, TypeScript, React, and Node.js.</h6>
      </div>
      <div className='mt-5'>
        <h6 className='text-base text-[#52525B] dark:text-[#A1A1A1]'>Feel free to reach me out at&nbsp;
          <Link to="#" className='dark:hover:text-white hover:text-black  duration-300'>@<i className='font-semibold underline underline-offset-2'>idity_dx</i> </Link>
          or
          <Link to="#" className='dark:hover:text-white hover:text-black  duration-300'> &#9993; <i className='font-semibold underline underline-offset-2'>adiimaurya02@gamil.com</i> </Link>
          .
        </h6>
      </div>
      <div className='mt-4 flex flex-row'>
        <h6 className='text-base text-[#52525B] dark:text-[#A1A1A1]'>View my&nbsp;
          <a href="#resume" download={""} className='underline underline-offset-2 dark:hover:text-white hover:text-black duration-300 font-semibold'>Resume</a>&nbsp;&#10697;
        </h6>
      </div>
    </div>
  )
}

export default Hero