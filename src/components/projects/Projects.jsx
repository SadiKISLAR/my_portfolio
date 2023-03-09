import React from 'react'
import "./projects.css"
import movie_app from "../../assets/projects/movie-app.gif"

const Projects = () => {
    return (
        <div className='projects'>
            <div className="project p1">
                <a href="https://github.com/SadiKISLAR/movie-app-with-react"
                    target="_blank">
                    <img src={movie_app} alt="movie-app" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p2">
                <a href="https://github.com/SadiKISLAR/movie-app-with-react"
                    target="_blank">
                    <img src={movie_app} alt="movie-app" width="100%" height="100%" />
                </a>
            </div>
            <div className="project p3"></div>
            <div className="project p4"></div>
            <div className="project p5"></div>
            <div className="project p6"></div>
            <div className="project p7"></div>
            <div className="project p8"></div>
            <div className="project p9"></div>


        </div>
    )
}

export default Projects