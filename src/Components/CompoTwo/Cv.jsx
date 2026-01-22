import html2pdf from 'html2pdf.js';
import { useRef, useState } from 'react';
import { useReactToPrint } from "react-to-print";
import VantaBackgroundTwo from "../VantaBackgroundTwo";
import "./Cv.css";
import Profile from './cvComponents/Profile';
import Education from './cvComponents/Education';
import Skills from './cvComponents/Skills';
import WorkExp from './cvComponents/WorkExp';
import Projects from './cvComponents/Projects';
import SoftSkills from './cvComponents/SoftSkills';
import { useGSAP } from "@gsap/react";
import gsap from "gsap"


const Cv = () => {
    gsap.registerPlugin(useGSAP); 
    
    const container = useRef()
    const cvContainer = useRef()
    const tl = gsap.timeline()
    useGSAP(() => {
        gsap.from("button", {
            y: 100,
            duration: 1,
            opacity: 0
        })
    }, { scope: container })
    useGSAP(() => {
        gsap.from(".cvPage", {
            scale: 0,
            duration: 1,
            opacity: 0
        })
    }, { scope: cvContainer })
    
    const [isLoading, setIsLoading] = useState(true);
    const cvRef = useRef()

    const handlePdfExport = () => {
        setIsLoading(false);
        setTimeout(() => {
            const element = cvRef.current;

            const opt = {
                margin: [10, 0, 10, 0],
                filename: 'Sachin_Bhadoriya_CV.pdf',
                image: { type: 'png', quality: 1 },
                html2canvas: { scale: 3, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['legacy'] }
            };
            html2pdf().set(opt).from(element).save();
            setIsLoading(true);
        }, 1000);
    };


    const handlePrinting = useReactToPrint({
        contentRef: cvRef,
        documentTitle: "Sachin_Bhadoriya_CV"
    });





    return (
        <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
            <VantaBackgroundTwo />

            {/* Export buttons */}
            <div ref={container} className='importsBtns CvBtn rajdhani'>
                <button onClick={handlePrinting}>{isLoading ? "PRINT PAGE" : "PRINTING"}</button>
                <button onClick={handlePdfExport}>{isLoading ? "EXPORT TO PDF" : "EXPORTING"}</button>
            </div>

            {/* CV Page */}
            <div ref={cvContainer} className="mobileViewCv">
                <div className="cvPage" ref={cvRef} style={{ background: "" }}>
                    <div className="insideCv" style={{ background: "" }}>
                        <Profile />
                        <div className="contentDataCv">
                            {/* profile section */}
                            <div className="profileSection">
                                <div className="heading borderBottom dmSerifDisplay">PROFILE</div>
                                <p className='dataContentDesc'>
                                    Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills. Adept in various social media platforms and office technology programs.
                                </p>
                            </div>
                            <Education />
                            <Skills />
                            <WorkExp />
                            <Projects />
                            <SoftSkills />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cv;