import React from 'react'
import './About.css'
import profile_image from '../../assets/devika.jpg'

const About = () => {

    //rendering
    return (
        <div className='about container-fluid  d-flex flex-column justify-content-center align-items-center gap-5' id='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>

            {/* ----------- About  container ----------  */}
            <div className="about-sections  d-flex justify-content-center  align-items-center">

                {/* ----- About left section ------- */}
                <div className="about-left h-100">
                    <div className="image-section ">
                        <img src={profile_image} alt="profile image" className='rounded-circle  object-fit-cover' />
                    </div>
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* -----About right section ------- */}
                <div className="about-right  d-flex flex-column align-items-center">
                    <p>I am a Junior Full Stack Developer specializing in the MERN stack, with a strong passion for creating dynamic, user-centric web applications. While I am still in the early stages of my career, I have a solid understanding of MongoDB, Express.js, React, and Node.js, and I am dedicated to improving my skills further with each project.</p>
                    <p>My enthusiasm for full-stack development drives me to stay up-to-date with industry trends and continuously improve my knowledge. I am eager to contribute to innovative projects and grow as a developer, bringing both creativity and dedication to every task I undertake.</p>
                </div>
            </div>
        </div>
    )
}

export default About
