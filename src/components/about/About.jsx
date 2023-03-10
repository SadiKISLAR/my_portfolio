import React from 'react';
import MyPhoto from '../../assets/images/bg.png'
import "./about.css"

const About = () => {
    return (
        <div className="i">
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={MyPhoto} alt="" className="i-img" />
            </div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Şadi KIŞLAR</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">React.js Developer</div>
                            <div className="i-title-item">Python-Django Developer</div>
                            <div className="i-title-item">Fullstack Developer</div>

                        </div>
                    </div>
                    <p className="i-desc">
                        I develop services for customers of all sizes, specializing inreting
                        stylish,modern websites, web services and online stores.
                    </p>
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/%C5%9Fadiki%C5%9Flar/"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <p>linkedin</p>
                            <i
                                className="fa-brands fa-linkedin-in"
                                style={{ color: 'black' }}
                            ></i>
                        </a>
                        <a
                            href="https://github.com/SadiKISLAR"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>gitgub</p>
                            <i
                                className="fa-brands fa-github"
                                style={{
                                    color: "#005c53"
                                }}
                            ></i>
                        </a>
                        <a
                            href=" https://wa.me/+905416121683"
                            target="_blank"
                            rel="noreferrer"
                        >

                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About