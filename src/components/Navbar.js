import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom'
import { faUser, faDiagramProject, faFile } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div className = "bg-zinc-900 w-screen h-14 top-0 z-3 absolute flex items-center">
        <Link className = "block px-14 py-auto" to = "/">
            <span className="block mx-14 my-auto font-bold text-2xl">itsnirmal</span>
        </Link>
        <nav className='space-x-12 absolute right-0 pr-24 mr-12'>
            <NavLink className = "opacity-80 transition-all ease-in-out delay-150 hover:opacity-100" exact = "true" activeclassname = "active" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "#9CA3AF" />           
                <span className="mx-2 my-auto font-bold">About</span>
            </NavLink>
            <NavLink className = "opacity-80 transition-all ease-in-out delay-150 hover:opacity-100" exact = "true" activeclassname = "active" to = "/projects">
                <FontAwesomeIcon icon={faDiagramProject} color = "#9CA3AF" />           
                <span className="mx-2 my-auto font-bold">Projects</span>
            </NavLink>
            <NavLink className = "opacity-80 transition-all ease-in-out delay-150 hover:opacity-100" exact = "true" activeclassname = "active" to = "/resume">
                <FontAwesomeIcon icon={faFile} color = "#9CA3AF" />           
                <span className="mx-2 my-auto font-bold">Resume</span>
            </NavLink>
        </nav>
    </div>
)

export default Navbar;