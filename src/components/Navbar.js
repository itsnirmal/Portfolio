import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom'
import { faUser, faDiagramProject, faFile } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div className = "bg-zinc-900 w-screen h-14 top-0 z-3 absolute flex items-center">
        <Link className = "block px-14 py-auto" to = "/">
            <span className="transition-all ease-in-out delay-150 block mx-14 my-auto font-bold text-2xl hover:text-orange-300">itsnirmal</span>
        </Link>
        <nav className='space-x-12 absolute right-0 pr-24 mr-12'>
            <NavLink className = "transition-all ease-in-out delay-150 hover:text-orange-300" exact = "true" to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "orange-300" />           
                <span className="mx-2 my-auto font-bold">About</span>
            </NavLink>
            <NavLink className = "transition-all ease-in-out delay-150 hover:text-orange-300" exact = "true" to = "/projects">
                <FontAwesomeIcon icon={faDiagramProject} color = "orange-300" />           
                <span className="mx-2 my-auto font-bold">Projects</span>
            </NavLink>
            <a className = "transition-all ease-in-out delay-150 hover:text-orange-300" target = "_blank" rel = "noreferrer" href="https://www.linkedin.com/in/nirmal-gautam/details/featured/1707151875814/single-media-viewer/?profileId=ACoAADR_d_0BmHHZlm7jmq8DrLbrR8w3Ani0Pa4">
            <FontAwesomeIcon icon={faFile} color = "orange-300" />
            <span className="mx-2 my-auto font-bold">Resume</span>
            </a>
        </nav>
    </div>
)

export default Navbar;