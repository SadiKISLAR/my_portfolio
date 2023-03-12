import React from "react";
import "./skills.css"
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div>
            <div className="skillsText">
                <h1>SKILLS</h1>

                <p>Skills and programs that I actively use on my projects</p>
            </div>
            <div className="app-skills">

                <motion.div className="logos "
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}>
                    <motion.div className="logo" >
                        <div className="img-div">
                            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="html" />
                            <div className="logo-name">HTML</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="css" />
                            <div className="logo-name">CSS</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react" />
                            <div className="logo-name">REACT</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="git" />
                            <div className="logo-name">GIT</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg" alt="javascript" />
                            <div className="logo-name">JS</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="github" />
                            <div className="logo-name">GITHUB</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="bootstrap" />
                            <div className="logo-name">BOOTSTRAP</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/jquery/jquery-ar21.svg" alt="jquery" />
                            <div className="logo-name">JQUERY</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vs" />
                            <div className="logo-name">VS</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg" alt="sass" />
                            <div className="logo-name">SASS</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg" alt="NPM" />
                            <div className="logo-name">NPM</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="vs" />
                            <div className="logo-name">VS</div>
                        </div>
                        <div className="img-div ">
                            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" />
                            <div className="logo-name">TAILWIND</div>
                        </div>
                    </motion.div>


                </motion.div>


            </div>
        </div>
    );
};

export default Skills;