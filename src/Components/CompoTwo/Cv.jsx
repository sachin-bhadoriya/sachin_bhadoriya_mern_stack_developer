import { useRef, useState } from 'react';
import React from 'react';
import VantaBackgroundTwo from "../VantaBackgroundTwo";
import "./Cv.css";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import html2pdf from 'html2pdf.js';
import { Link } from 'react-router-dom';

const Cv = () => {
    const [isLoading, setIsLoading] = useState(true);
    const cvRef = useRef();

    const handlePdfExport = () => {
        setIsLoading(false)
        setTimeout(() => {
            const element = cvRef.current;
            html2pdf()
                .set({
                    margin: 0,
                    filename: 'Sachin_Bhadoriya_CV.pdf',
                    image: { type: 'pdf', quality: 1 },
                    html2canvas: { scale: 3 },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                })
                .from(element)
                .save();
            setIsLoading(true);
        }, 1000);
    };

    const handlePrinting = () => {
        setIsLoading(false);
        setTimeout(() => {
            window.print();
            setIsLoading(true);
        }, 1000);
    }

    return (
        <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
            <VantaBackgroundTwo />

            {/* Export buttons */}
            <div className='importsBtns CvBtn rajdhani'>
                <button onClick={handlePrinting}>{isLoading ? "PRINT PAGE" : "PRINTING"}</button>
                <button onClick={handlePdfExport}>{isLoading ? "EXPORT TO PDF" : "EXPORTING"}</button>
            </div>

            {/* CV Page */}
            <div className="mobileViewCv">
                <div className="cvPage" ref={cvRef} style={{ background: "" }}>
                    <div className="insideCv" style={{ background: "" }}>
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

                        <div className="contentDataCv">
                            {/* profile section */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">PROFILE</div>
                                <p className='dataContentDesc'>
                                    Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs.
                                </p>
                            </div>

                            {/* education */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">EDUCATION</div>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <div>
                                        <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                            Jiwaji University, Gwalior, M.P., India
                                        </span>
                                        <br />
                                        <span>Bachelor’s in Computer Science</span>
                                    </div>
                                    <div>2023-2026</div>
                                </div>
                                <div className='d-flex' style={{ justifyContent: "space-between", marginTop: "5px" }}>
                                    <div>
                                        <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                            Jawahar Navodaya Vidyalaya, Gwalior, Madhya Pradesh
                                        </span>
                                        <br />
                                        <span>CBSE Board (Class XII), 79%</span>
                                    </div>
                                    <div>2020-2021</div>
                                </div>
                            </div>

                            {/* skills */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">SKILLS</div>
                                <div className='dataContentDesc'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    Frontend <br /> Backend & Programming Language <br /> Database <br /> Tool & Platforms <br /> Other Skills
                                                </th>
                                                <td style={{ paddingLeft: "15px" }}>
                                                    HTML, CSS, JavaScript, Bootstrap, React.js <br />
                                                    Node.js, Express.js, React Native <br />
                                                    MongoDB <br />
                                                    VS Code, Vercel, Render, Railway <br />
                                                    MS Office, Adobe Photoshop, Canva
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* work experience */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">WORK EXPERIENCE</div>
                                <div className='dataContentDesc'>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div>
                                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                                YOUTHCONNEKT RESEARCH & DEVELOPMENT INDIA Pvt. Ltd., Gwalior, India
                                            </span>
                                            <br />
                                            <span>
                                                Job Role : Website Handling, Social Media Handling, Graphic Designing, convert Papers into Code etc.
                                            </span>
                                        </div>
                                        <div>Feb 2024</div>
                                    </div>
                                </div>
                            </div>

                            {/* projects */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">PROJECTS</div>
                                <div className='dataContentDesc'>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div>
                                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                                Hill View Escape – Hotel Booking Website
                                            </span>
                                        </div>
                                        <div style={{ textDecoration: "none" }}>
                                            <span><Link to="https://github.com/sachin-bhadoriya/Hill_View_Escape-Frontend-only" style={{ textDecoration: "none" }}>Github</Link></span>
                                            <span style={{ marginLeft: "10px" }}> <Link to="https://hill-view-escape-frontend-only.vercel.app/" style={{ textDecoration: "none" }}>Live</Link> </span>
                                        </div>
                                    </div>
                                    <span>Developed and deployed a full-stack hotel booking website with live room reservation functionality. Integrated email automation to send instant booking confirmations to users. Built using React for the frontend, Node.js/MongoDB for backend APIs, and hosted on Vercel, Render & Railway for seamless deployment.</span>
                                </div>
                                <div className='dataContentDesc' style={{ marginTop: "10px" }}>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div>
                                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                                Project Portfolio – Sachin Bhadoriya
                                            </span>
                                        </div>
                                        <div style={{ textDecoration: "none" }}>
                                            <span><Link to="https://github.com/sachin-bhadoriya/my-portfolio" style={{ textDecoration: "none" }}>Github</Link></span>
                                            <span style={{ marginLeft: "10px" }}> <Link to="http://sachin-bhadoriya.vercel.app/" style={{ textDecoration: "none" }}>Live</Link> </span>
                                        </div>
                                    </div>
                                    <span>
                                        Designed and deployed a personal portfolio website to showcase my projects, skills, and contact information. Built with React and Bootstrap 5, the site is fully responsive and optimized for all screen sizes. Hosted on Vercel with fast load times and smooth user experience.
                                    </span>
                                </div>
                                <div className='dataContentDesc' style={{ marginTop: "10px" }}>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div>
                                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                                My Personal Portfolio Website
                                            </span>
                                        </div>
                                        <div style={{ textDecoration: "none" }}>
                                            <span><Link to="https://github.com/sachin-bhadoriya/sachin_bhadoriya_mern_stack_developer" style={{ textDecoration: "none" }}>Github</Link></span>
                                            <span style={{ marginLeft: "10px" }}> <Link to="https://sachin-bhadoriya-mern-stack-develop.vercel.app/" style={{ textDecoration: "none" }}>Live</Link> </span>
                                        </div>
                                    </div>
                                    <span>
                                        Designed and deployed a personal portfolio website using React with simple HTML and CSS, featuring an interactive Three.js animated background. The site showcases my projects, skills, and contact information, and includes a fully functional contact form powered by Node.js and Express APIs, with MongoDB used to store submitted data. The site is fully responsive across devices and delivers a smooth, engaging user experience.                                    </span>
                                </div>
                                <div className='dataContentDesc' style={{ marginTop: "10px" }}>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div>
                                            <span className='playFair' style={{ fontSize: "16px", fontWeight: "700" }}>
                                                Here are my some Sample designs using Adobe Photoshop
                                            </span>
                                        </div>
                                        <div style={{ textDecoration: "none" }}>
                                            <span style={{ marginLeft: "10px" }}> <Link to="https://drive.google.com/drive/folders/18N9Nh3xejMJWIkM8_rizgCqDR5UmvFX2?usp=sharing" style={{ textDecoration: "none" }}>Live</Link> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* soft skills */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">SOFT SKILLS</div>
                                <div className='dataContentDesc'>
                                    <ul>
                                        <li>Problem Solving & Analytical Thinking</li>
                                        <li>Communication Skill</li>
                                        <li>Leadership & Mentorship</li>
                                        <li>Team Collaboration</li>
                                        <li>Adaptability & Quick Learning</li>
                                        <li>Creativity & Innovation</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cv
