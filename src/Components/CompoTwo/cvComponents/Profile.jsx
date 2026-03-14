import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <div className="name-heading-section text-center">
                <p className='nameCv'>SACHIN BHADORIYA</p>
                <p className='socialLinksCv'>
                    <span>
                        <Link to="mailto: bhadoriyasachin33@gmail.com"><IoMailOpenOutline size={20} /> bhadoriyasachin33@gmail.com</Link>
                    </span>
                    <span>
                        <Link to="https://github.com/sachin-bhadoriya"><FaGithub size={18} /> sachin-bhadoriya</Link>
                    </span>
                    <span>
                        <Link to="https://www.linkedin.com/in/sachin-bhadoriya/"><FaLinkedin size={18} /> sachin-bhadoriya</Link>
                    </span>
                    <span>
                        <Link to="tel:8839190794"> <TfiHeadphoneAlt size={18} /> +91 88391 90794</Link>
                    </span>
                </p>
            </div>
        </>
    )
}

export default Profile