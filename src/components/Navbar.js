import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom'
import { faUser, faDiagramProject, faFile } from '@fortawesome/free-solid-svg-icons'
import Pdf from '../assets/resume.pdf';

const Navbar = () => (
    <div className = "bg-zinc-900 w-screen h-14 top-0 z-3 absolute flex items-center">
        <Link className = "block px-14 py-auto" to = "/">
            <span className="transition-all ease-in-out delay-150 block mx-14 my-auto font-bold text-2xl hover:scale-110">itsnirmal</span>
        </Link>
        <nav className='space-x-12 absolute right-0 pr-24 mr-12'>
            <NavLink className = "transition-all ease-in-out delay-150 hover:underline" exact = "true" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "white" />           
                <span className="mx-2 my-auto font-bold">About</span>
            </NavLink>
            <NavLink className = "transition-all ease-in-out delay-150 hover:underline" exact = "true" to = "/projects">
                <FontAwesomeIcon icon={faDiagramProject} color = "white" />           
                <span className="mx-2 my-auto font-bold">Projects</span>
            </NavLink>
            <a className = "transition-all ease-in-out delay-150 hover:underline5" target = "_blank" rel = "noreferrer" href={Pdf}>
            <FontAwesomeIcon icon={faFile} color = "white" />
            <span className="mx-2 my-auto font-bold">Resume</span>
            </a>
        </nav>
    </div>
)

export default Navbar;