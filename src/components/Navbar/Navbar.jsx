import { useState } from 'react'
import {ImHome} from 'react-icons/im'



const Navbar = () => {
  const [navigation, setNavigation] = useState(false)
  const navClick = () => setNavigation(!navigation)
  return (
    <div className="navbarConatiner bg-slate-800 text text-[20px] text-blue-300 w-auto h-auto flex justify-between items-center">
      <div>
        <nav className="navbar bg-slate-800 text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5">
          <a type="button" id="NavBTN" class="naviBTN font-mono text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" href=""><ImHome/>Home</a>
          <a type="button" id="NavBTN" class="naviBTN bg-slate-800 font-mono text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" href="">Portfolio</a>
          <a type="button" id="NavBTN" class="naviBTN font-mono text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" href="">Experience</a>
          <a type="button" id="NavBTN" class="naviBTN font-mono text-[20px] text-blue-300 w-auto h-auto flex justify-around items-center p-5" href="">About Me & Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;