import React from 'react';
import { CvDataSoftSkills } from '../data';

const SoftSkills = () => {
    return (
        <>
            <div className="profileSection topMarginContainer">
                <div className="heading borderBottom dmSerifDisplay">SOFT SKILLS</div>
                <div className='dataContentDesc'>
                    <ul>
                        {CvDataSoftSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SoftSkills