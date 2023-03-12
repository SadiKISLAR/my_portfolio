import React from 'react'
import "./navbar.css"
import { Link } from "react-scroll";

import Skills from '../skills/Skills'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'> -Şadi KIŞLAR- </div>
            <div className='menu'>
                <ul>
                    <li>  <a href="#About">About</a> </li>
                    <li> <Link to={Skills} smooth={true} offset={-200} duration={300}>Skills</Link> </li>
                    <li> <a href="#Projects"></a> Projects</li>
                    <li> <a href="#Contacts"></a> Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar