import React from 'react';
import './Skills.css';
import { icons } from '../../assets/icons';

const Skills = () => {
    return (
        <div className='container-fluid skills'>
            <div className='slider' style={{ '--width': '90px', '--height': '100px', '--quantity': icons?.length }}>
                <div className='list'>
                    {icons?.map((item, index) => {
                        return (
                            <div className='item' style={{ '--position': index + 1 }} key={index}>
                                <img src={item} className='skill-icon' alt={`Skill ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
