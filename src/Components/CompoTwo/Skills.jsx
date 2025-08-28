import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";

// Your skills data:
export const SkillsData = {
  heading: "Skills",
  categories: {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    backend: ["Node.js", "Express.js", "React Native"],
    database: ["MongoDB"],
    tools: ["VS Code", "Vercel", "Render", "Railway"],
    others: ["MS Office", "Adobe Photoshop", "Canva"]
  }
};

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
              <h2 className="name notoSerifDisplay" style={{marginBottom: "10px"}}>{SkillsData.heading}</h2>
              
              {/* Skill categories display */}
              {Object.entries(SkillsData.categories).map(([category, skills]) => (
                <div key={category} className="mb-3">
                  <h5 className="text-capitalize">{category}</h5>
                  <ul className="list-inline">
                    {skills.map((skill, index) => (
                      <li key={index} className="list-inline-item badge bg-secondary me-2 mb-2 p-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default Skills;
