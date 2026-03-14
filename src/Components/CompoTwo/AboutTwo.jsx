import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import RowImageContainer from "./Parts/RowImageContainer";
import { AboutData } from "./data";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTwo = () => {


  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.from(".col-md-4", {
      scale: 0,
      delay: 0.3,
      duration: 1.5,
      opacity: 0,
      ease: "elastic.out(1,0.2)",
    });

    tl.from(".txtonly .name", {
      y: -100,
      duration: 0.7,
      opacity: 0,
    });

    tl.from(".txtonly p", {
      y: -100,
      duration: 0.7,
      opacity: 0,
    });

    tl.from(".education-section", {
      scale: 0,
      duration: 0.7,
      opacity: 0,
      scrollTrigger: ".education-section"
    });
  }, []);

  return (
    <div>
      <VantaBackground />
      <div className="container text-white">
        <div ref={container} className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay" style={{ marginBottom: "10px" }}>{AboutData.heading}</h2>
              <p>{AboutData.description}</p>

              {/* 👇 Education Section */}
              <div className="education-section mt-4">
                <h4 className="fw-bold dmSerifText">Education</h4>
                <div className="table-responsive raleway">
                  <table className="table table-bordered table-light table-striped mt-3">
                    <thead>
                      <tr>
                        <th>Degree</th>
                        <th>Institute</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AboutData.education.map((edu, index) => (
                        <tr key={index}>
                          <td>{edu.degree}</td>
                          <td>{edu.institute}</td>
                          <td>{edu.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
