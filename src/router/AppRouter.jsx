import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contacts from '../components/contacts/Contacts'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='skills' element={<Skills />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contacts' element={<Contacts />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter