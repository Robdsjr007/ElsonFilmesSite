import './NavBar.css';

import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import Toggle from './Toggle';

const NavBar = ({ isDark, setIsDark }) => {
    return (
        <nav id='navbar'>
            <h2><Link to="/"><BiCameraMovie/>MoviesLib</Link></h2>
            <form>
                <input className='searchInput' type="text" placeholder='Busque um filme' />
                <button type="submit"><BiSearchAlt2/></button>

            </form>
            <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
        </nav>
    )
}

export default NavBar