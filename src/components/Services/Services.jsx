import React from 'react';
import './Services.css';
import development from '../../assets/development.jpg';
import design from '../../assets/design.jpg';
import discover from '../../assets/discover.jpg';

const Services = () => {
    //render
    return (
        <div className="container-fluid services" id='service'>

            {/* ---------- Main heading for service ---------- */}
            <div className="services-title">
                <h1>My Services</h1>
            </div>

            {/* -------------------- Container to display all the Services --------------------  */}
            <div className="services-container">

                {/*----------  DISCOVER ----------*/}
                <div className="service">
                    <img src={discover} alt="Discover" />
                    <div className="overlay">
                        <p>Uncover innovative solutions and explore new possibilities in web development.</p>
                    </div>
                    <h3>DISCOVER</h3>
                </div>

                {/* ---------- DESIGN ---------- */}
                <div className="service">
                    <img src={design} alt="Design" style={{ objectFit: 'cover' }} />
                    <div className="overlay">
                        <p>Craft intuitive and visually stunning interfaces for seamless user experiences.</p>
                    </div>
                    <h3>DESIGN</h3>
                </div>

                {/* ---------- DEVELOPMENT ---------- */}
                <div className="service">
                    <img src={development} alt="Development" />
                    <div className="overlay">
                        <p>Build high-performance, scalable website that engage and delight users.</p>
                    </div>
                    <h3>DEVELOPMENT</h3>
                </div>

            </div>
        </div>
    );
};

export default Services;
