import './NavBar.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import Toggle from './Toggle';

const NavBar = ({ isDark, setIsDark }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id='navbar'>
            <h2><Link to="/"><BiCameraMovie/>MoviesLib</Link></h2>
            <form onSubmit={handleSubmit}>
                <input className='searchInput' type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
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