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
                    <a href="https://www.linkedin.com/in/sadikislar/"
                        target="_blank">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/SadiKISLAR"
                        target="_blank">
                        <FaGithub />
                    </a>
                </li>
            </ul>

            <div style={{ paddingRight: "20rem" }}>© 2023 All Rights Reserved by Sh@dy</div>
        </footer>
    );
};

export default Footer;
