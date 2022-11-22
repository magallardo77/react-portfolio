import React from 'react'
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
const Home = ({currentPage}) => {
  let init = () => {
    switch (currentPage.name) {
      case 'About': return <About />;
      case 'Portfolio': return <Portfolio />;
      case 'Skills': return <Skills />;
      case 'About Me': return <About />;
      case 'Contact': return <Contact />;
    }
  }
  console.log(currentPage.name)
  console.log(init())
  return (
    <div className='homeContainer bg-slate-800 h-full p-10 '>
        <h1 className='introName text-[50px] text-white flex justify-center'>
            Miguel Gallardo
        </h1>
        <h2 className='introTitle text-[35px] text-sky-600 flex justify-center'>
            Full Stack Web Developer
        </h2>
        <p className='introDescrip text-[20px] text-sky-600 flex justify-center'>
            
        </p>
        {init()}
    </div>
  )
}

export default Home