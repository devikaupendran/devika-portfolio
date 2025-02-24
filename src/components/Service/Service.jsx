import React from 'react';
import './Service.css';
// import development from '../../assets/development.png';
// import design from '../../assets/design.png';
// import discover from '../../assets/discover.png';

const Service = () => {
    // render
    return (
        <div className="container-fluid service" id="service">

            {/* ---------- Main heading for service ---------- */}
            <div className="service-title">
                <h1>My Services</h1>
            </div>

            {/* -------------------- Container to display all the Services -------------------- */}
            <div className="service-container">

                {/* ---------- DISCOVER ----------*/}
                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <div><img src={discover} alt="Discover" className='rounded-circle object-fit-cover' /></div>
                    <h3>DISCOVER</h3>
                </div>

                {/* ---------- DESIGN ---------- */}
                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <div><img src={design} alt="Design" className='rounded-circle object-fit-cover'/></div>
                    <h3>DESIGN</h3>
                </div>

                {/* ---------- DEVELOPE ---------- */}
                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <div><img src={development} alt="Development" className='rounded-circle object-fit-cover' /></div>
                    <h3>DEVELOPMENT</h3>
                </div>

            </div>
        </div>
    );
};

export default Service;
