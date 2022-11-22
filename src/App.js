import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import { useState } from 'react';

function App() {
  
  const [pages] = useState([ 
    {
    name: 'About'
  },
  {
    name: 'Portfolio'
  }, 
  {
    name: 'Skills'
  }, 
  {
    name: 'Contact'
  },
{
  name: 'Home'
}])
  let [tab, setTab] = useState(pages[0]);


  let changePage = (e) => {
    setTab(e);
  }



  return (
    <div className="mainContainer bg-slate-800">
      <div>
        <Navbar pages={pages} currentPage={tab} changePage={setTab} />
        <Home currentPage={tab} />
      </div>
    </div>

  )
}

export default App;
