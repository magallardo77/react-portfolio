import { useState } from 'react'
import {ImHome} from 'react-icons/im'
import {AiFillFolderOpen} from 'react-icons/ai'
import {FaBrain} from 'react-icons/fa'
import {BsPatchQuestion} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'



const Navbar = ({pages, changePage, currentPage}) => {
  console.log(currentPage)
  return (
    
    <div className="navbarConatiner bg-slate-800 text text-[20px] text-blue-300 w-auto h-auto flex justify-between items-center">
      <div>
        <nav className="navbar bg-slate-800 text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5">
          {/* <a type="button" id="NavBTN" className="naviBTN font-sans text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" onClick={() => changePage(pages[4])}><ImHome/>Home</a> */}
          <a type="button" id="NavBTN" className="naviBTN bg-slate-800 font-sans text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" onClick={() => changePage(pages[1])}><AiFillFolderOpen/>Portfolio</a>
          <a type="button" id="NavBTN" className="naviBTN font-sans text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" onClick={() => changePage(pages[2])}><FaBrain/>Skills</a>
          <a type="button" id="NavBTN" onClick={() => changePage(pages[0])} className='font-sans text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5' ><BsPatchQuestion/>About Me</a>
          <a type="button" id="NavBTN" onClick={() => changePage(pages[3])} className='font-sans text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5' ><MdEmail/>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;