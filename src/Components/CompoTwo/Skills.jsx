import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import RowImageContainer from "./Parts/RowImageContainer";
import { SkillsData } from "./data";

const Skills = () => {
  return (
    <div>
      <VantaBackground />
      <div className="container  text-white">
        <div className="subContTwo">
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
