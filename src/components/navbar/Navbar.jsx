import React from 'react'
import "./navbar.css"



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'> -Şadi KIŞLAR- </div>
            <div className='menu'>
                <ul>
                    <li> <link rel="stylesheet" href="about" /> About </li>
                    <li> <link rel="stylesheet" href="skills" />Skills </li>
                    <li> <link rel="stylesheet" href="projects" /> Projects</li>
                    <li> <link to="contacts"></link> Contact</li>
                </ul>
            </div>

        </div >
    )
}

export default Navbar