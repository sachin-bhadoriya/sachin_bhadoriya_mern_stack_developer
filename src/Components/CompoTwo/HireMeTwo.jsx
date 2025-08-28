import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";
import { WhyHireMeData } from "./data";

const HireMeTwo = () => {
  return (
    <div>
      <VantaBackground />
      <div className="container mainTwoContainer text-white ">
        <div className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt ">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay">Hire Me</h2>
              <ul className="whyHireMeList list-disc list-inside">
                {WhyHireMeData.points.map((point, idx) => (
                  <li key={idx} className="mb-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* <SocialIcons /> */}
            {/* <ButnsMain /> */}
          </div>
        </div>
      </div>
      {/* <ExperienceContainer /> */}
    </div>
  );
};

export default HireMeTwo;
