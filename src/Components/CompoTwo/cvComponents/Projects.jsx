import React from 'react'
import { Link } from 'react-router-dom'
import { CvDataProjects } from '../data'


const Projects = () => {
    return (
        <>
            <div className="profileSection topMarginContainer">
                <div className="heading borderBottom dmSerifDisplay">PROJECTS</div>
                {CvDataProjects.map((i, index) => (
                    <div key={index} className='dataContentDesc'>
                        <div className='d-flex' style={{ justifyContent: "space-between" }}>
                            <div>
                                <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                    {i.title} {/* Agar tu title data me store kiya hai */}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <Link to={i.gitHubLink} style={{ textDecoration: "none" }}>Github</Link>
                                </span>
                                <span style={{ marginLeft: "10px" }}>
                                    <Link to={i.liveLink} style={{ textDecoration: "none" }}>Live</Link>
                                </span>
                            </div>
                        </div>
                        <span>{i.description}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects