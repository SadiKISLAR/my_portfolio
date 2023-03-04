import React from 'react';
import MyPhoto from '../assets/images/bg.png'

const About = () => {
    return (
        <div className='about'>
            <div className="image">
                <img src={MyPhoto} alt="" className='about-img' />
            </div>
            <div className="text">
                <h1>Şadi KIŞLAR</h1>
                <br />
                <h2>Fullstack Developer</h2>
                <br />
                <p>Having 4+ years experienced in IT and 1+ an expert front-end developer, interested in writing codes, skilled at developing complex solutions, creating responsive designs, possessing strong creative thinking skills, high energy and integrity.
                    Ability to create algorithms effectively, and interact positively and communicate appropriately with team members. Quickly grasp new technologies and concepts to develop innovative and creative solutions to problems.
                    Always eager to learn various technologies, tools and libraries. Especially interested in the Frontend / Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime student.</p></div>
        </div>

    )
}

export default About