import React from "react";
import imageObj from "../../assets/skillsImg/pictures";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div id="skills" className="app__skills">
            <h2 className="app__head">My Skills</h2>
            <motion.div
                className="app__skills-logos app__flex"
                initial={{ opacity: 0 }}
                whileInView={{ scale: [0, 1.5, 0.2, 1] }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                {imageObj.map((logo, index) => (
                    <motion.div className="app__skills-logo" key={index}>
                        <div className="img-div app__flex">
                            <img src={logo.img} alt="" />
                            <div className="logo-name">{logo.name}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
