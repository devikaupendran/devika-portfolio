import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className='container-fluid footer'>

            {/* -------------- footer top section -------------- */}
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Devika</h1>
                    <p>I'm a Junior Full-Stack MERN Developer from Kerala.</p>
                </div>
                <div className="social-buttons">
                    <a href="https://www.linkedin.com/in/devikaur/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                        <span className="social-button__inner">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                    </a>
                    <a href="https://github.com/devikaupendran/" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                        <span className="social-button__inner">
                            <i className="fab fa-github"></i>
                        </span>
                    </a>
                </div>
            </div>

            <hr />

            {/* -------------- footer bottom section -------------- */}
            <div className="footer-bottom">
                <p className='footer-bottom-left'>&copy; {year} Devika U.R . All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer