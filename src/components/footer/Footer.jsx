import React from "react";
import "./Footer.scss";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Footer = () => {

    return (
        <footer
            className="app__footer app__flex"

        >
            <ul className="app__footer-social app__flex">
                <li>
                    <a href="https://www.linkedin.com/in/sadikislar/">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/SadiKISLAR">
                        <FaGithub />
                    </a>
                </li>
            </ul>

            <div>© 2023 Sh@dy</div>
        </footer>
    );
};

export default Footer;
