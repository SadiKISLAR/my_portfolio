import React from 'react'
import "./projects.css"
import movie_app from "../../assets/projects/movie-app.gif"
import recipe from "../../assets/projects/recipe app.gif"
import random from "../../assets/projects/random user.gif"
import tour from "../../assets/projects/tour places.gif"
import flag from "../../assets/projects/flag app.gif"

const Projects = () => {
    return (
        <div id="projects" className='projects'>
            <div className="project p1">
                <a href="https://github.com/SadiKISLAR/movie-app-with-react"
                    target="_blank">
                    <img src={movie_app} alt="movie-app" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p2">
                <a href="https://github.com/SadiKISLAR/recipe-app-with-react"
                    target="_blank">
                    <img src={recipe} alt="recipe-app" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p3">
                <a href="https://github.com/SadiKISLAR/random-user-with-react"
                    target="_blank">
                    <img src={random} alt="random-user" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p4">
                <a href="https://github.com/SadiKISLAR/tour-pages"
                    target="_blank">
                    <img src={tour} alt="tour-pages" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p5">
                <a href="https://github.com/SadiKISLAR/flags"
                    target="_blank">
                    <img src={flag} alt="countries" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p6"></div>
            <div className="project p7"></div>
            <div className="project p8"></div>
            <div className="project p9"></div>


        </div>
    )
}

export default Projects