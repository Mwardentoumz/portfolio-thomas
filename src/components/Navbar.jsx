// IMPORTS
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


// COMPONENTS
export default function Navbar({ toggleDarkMode, executeScroll }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
    console.log(e)
  };

  return (
    <>
      <nav className="w-full h-[80px] flex justify-between items-center dark:text-white text-[#8892b0] border-b-2 border-b-from-[#8892b0]to-white">
        <p className="font-burtons font-bold md:text-3xl text-xl relative w-max">
          <span>Developped By Thomas</span>
        </p>

        {/* Menu */}

        <ul className="hidden md:flex font-burtons">
          <li className="hover:text-teal-600 "><button>Accueil</button></li>
          <li  className="hover:text-teal-600 "><button onClick={executeScroll}>Projects</button></li>
          <li className="hover:text-teal-600 ">Contact</li>
          <button onClick={toggleDarkMode}>{<BsFillMoonStarsFill />}</button>
        </ul>


        {/* Hamburger */}

        <div  className="z-10 md:hidden flex gap-3">
          <button onClick={toggleDarkMode}>{<BsFillMoonStarsFill />}</button>
          {!isOpen ? <FaBars onClick={toggle}/> : <FaTimes onClick={toggle}/> }
          
        </div>

        {/* Mobile Menu */}

        <ul className={!isOpen ? 'hidden' : 'text-slate-900 absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-900 text-slate-900 flex flex-col justify-center items-center dark:text-white'}>
          
          <li className="py-6 text-4xl">Accueil</li>
          <li onClick={executeScroll} className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
          
        </ul>

        


      </nav>
    </>
  );
}