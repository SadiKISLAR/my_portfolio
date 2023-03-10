import React from 'react'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

const Home = () => {
    return (
        <div>
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </div>
    )
}

export default Home