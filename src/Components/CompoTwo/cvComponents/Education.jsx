import React from 'react'
import { CvDataEducation } from '../data'

const Education = () => {
    return (
        <div className="profileSection topMarginContainer">
            <div className="heading borderBottom dmSerifDisplay">EDUCATION</div>
            {CvDataEducation.map((i, index) => (
                <div key={index} className='d-flex' style={{ justifyContent: "space-between", marginTop: "5px" }}>
                    <div className='d-flex justify-content-between w-100 mb-2'>
                        <div>
                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                {i.university}
                            </span>
                            <br />
                            <span>{i.degAndPercentage}</span>
                        </div>
                        <div>{i.session}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education
