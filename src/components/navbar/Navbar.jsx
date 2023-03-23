import React from 'react'
import { Link } from "react-scroll";
import "./navbar.css"



const Navbar = () => {
    let navLinks = ["about", "skills", "projects", "certificates", "contacts"];

    return (
        <div className='navbar'>
            <div className='name'> -Şadi KIŞLAR- </div>
            <div className='menu'>
                <ul className="navbar-links app__flex">
                    {navLinks.map((item, index) => (
                        <li
                            className={"app_flex"}
                            key={index}
                        // onClick={() => setIsActive(index)}
                        >
                            <Link
                                className="link"
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-200}
                                duration={300}
                            >
                                {item}
                                <div />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div >
    )
}

export default Navbar