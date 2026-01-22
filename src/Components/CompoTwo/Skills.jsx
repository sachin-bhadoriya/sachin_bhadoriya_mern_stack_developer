import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import RowImageContainer from "./Parts/RowImageContainer";
import { SkillsData } from "./data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const Skills = () => {

  const container = useRef()
  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.from(".col-md-4", {
      scale: 0,
      delay: 0.3,
      duration: 1.5,
      opacity: 0,
      ease: "elastic.out(1,0.2)",
    })
    tl.from(".txtonly .name", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".txtonly h5", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".txtonly ul", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
  })

  return (
    <div>
      <VantaBackground />
      <div className="container  text-white">
        <div ref={container} className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay" style={{ marginBottom: "10px" }}>Skills</h2>
              {SkillsData.map((i, index) => (
                <div key={index} className="mb-3">
                  <h5 className="text-capitalize">{i.title}</h5>
                  <ul className="list-inline">
                    {i.skill.map((s, idx) => (
                      <li key={idx} className="list-inline-item badge bg-secondary me-2 mb-2 p-2">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
