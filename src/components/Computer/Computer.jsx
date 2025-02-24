import React from 'react'
import computerImg from '../../assets/computer.png'
import './Computer.css'
import robot from '../../assets/robot.png'

const Computer = () => {
    return (
        <div className='container-fluid computer d-flex justify-content-between align-items-end'>
            <div className="computer-left">
                <img src={robot} alt="robot image" />
            </div>
            <div className="computer-right">
                <img src={computerImg} alt="computer image" />
            </div>

        </div>
    )
}

export default Computer
