import React from 'react'
import Skills from '../skills/Skills'
import { Link } from "react-scroll";
import "./navbar.css"



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'> -Şadi KIŞLAR- </div>
            <div className='menu'>
                <ul>
                    <li> <link rel="stylesheet" href="about" /> About </li>
                    <li><a href={Skills}>asdkşl</a></li>
                    <li> <link rel="stylesheet" href="Skills" />Skills </li>
                    <li> <link rel="stylesheet" href="skills" />Skills </li>
                    <li> <Link to={Skills}></Link> Projects</li>
                    <li> <link to="contacts"></link> Contact</li>
                </ul>
            </div>

        </div >
    )
}

export default Navbar