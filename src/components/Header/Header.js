import React from 'react'
import "./Header.scss"
import { GiMusicalNotes } from 'react-icons/gi';


const Header = ({ setSidebarVisibility }) => {
    return (
        <header className='header'>
            <h2>Ilgar's Playlist</h2>
            <button
             className="library"
                onClick={() => setSidebarVisibility((prevState) => !prevState)}
             >
                Library
                <GiMusicalNotes/>
            </button>
        </header>
    )
}

export default Header