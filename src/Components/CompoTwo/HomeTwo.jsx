import { useState, useEffect, useRef } from "react";
import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import { HeroData } from "./data"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"


const HomeTwo = () => {

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
    tl.from(".hello", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".name", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".quality", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".para", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
    tl.from(".socialIconDiv", {
      y: -100,
      duration: 0.7,
      opacity: 0
    })
  }, { scope: container })

  const roles = ["Frontend Developer", "MERN Stack Developer", "React Native Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentRole = roles[index];

    if (!deleting && subIndex === currentRole.length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <div className="portfolioContainer">
      <VantaBackground />
      <div className="container mainTwoContainer text-white ">
        <div ref={container} className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h4 className="lineHeightHome hello merienda">Hello I'm</h4>
              <h2 className="lineHeightHome name notoSerifDisplay">
                <span className="sachin" style={{
                  // color: "#a11e49",
                  fontWeight: "bold",
                  background: "linear-gradient(to left, #a11e49, #fff,  #a11e49)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  backgroundSize: "300% 300%",
                  animation: "scrolling 6s infinite"
                }}>
                  Sachin
                </span>{" "}
                <span>Bhadoriya</span>
              </h2>
              <h4 className="lineHeightHome quality raleway mb-2">
                And I'm a{" "}
                <span style={{
                  // color: "#a11e49",
                  fontWeight: "bold",
                  background: "linear-gradient(to left, #fff, #a11e49,  #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  backgroundSize: "300% 300%",
                  animation: "scrolling 6s infinite"
                }}>
                  {roles[index].substring(0, subIndex)}
                </span>
              </h4>
              <p className="para raleway">
                {HeroData.description}
              </p>
            </div>
            <div className="socialIconDiv">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
