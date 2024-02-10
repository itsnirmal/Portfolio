import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { faUser, faDiagramProject, faFile } from '@fortawesome/free-solid-svg-icons';
import { FiMenu, FiX } from 'react-icons/fi'; // Add this import for the hamburger icon
import Pdf from '../assets/resume.pdf';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-zinc-900 w-screen h-14 top-0 z-3 absolute flex flex-wrap md:flex-nowrap items-center">
      <Link className="block px-14 py-auto md:py-0 order-1" to="/">
        <span className="transition-all ease-in-out delay-150 block mx-14 my-auto font-bold text-2xl hover:scale-110">itsnirmal</span>
      </Link>
      <button onClick={toggleMenu} className="transition-all ease-in-out delay-150 hover:scale-125 md:hidden text-white p-2 absolute right-16">
        {showMenu ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`md:flex md:space-x-12 absolute right-0 pr-24 mr-12 md:mr-0 ${showMenu ? 'flex flex-col absolute top-14' : 'hidden'}`}>
        <NavLink className="transition-all ease-in-out delay-150 hover:underline" exact to="/about">
          <FontAwesomeIcon icon={faUser} color="white" />
          <span className="mx-2 my-auto font-bold">About</span>
        </NavLink>
        <NavLink className="transition-all ease-in-out delay-150 hover:underline" exact to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} color="white" />
          <span className="mx-2 my-auto font-bold">Projects</span>
        </NavLink>
        <a className="transition-all ease-in-out delay-150 hover:underline" target="_blank" rel="noreferrer" href={Pdf}>
          <FontAwesomeIcon icon={faFile} color="white" />
          <span className="mx-2 my-auto font-bold">Resume</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
