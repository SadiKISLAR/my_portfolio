import React from 'react'
import "./navbar.css"


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'> -Şadi KIŞLAR- </div>
            <div className='menu'>
                <ul>
                    <li> <a href="../about/About.jsx">About</a> </li>
                    <li> <a href="../skills/Skills.jsx"></a> Skills</li>
                    <li> <a href="#"></a> Projects</li>
                    <li> <a href="#"></a> Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar