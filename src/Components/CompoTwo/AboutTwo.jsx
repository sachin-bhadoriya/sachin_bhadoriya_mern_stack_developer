import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";
import { AboutData } from "./data";

const AboutTwo = () => {
  return (
    <div>
      <VantaBackground />
      <div className="container text-white">
        <div className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay" style={{marginBottom: "10px"}}>{AboutData.heading}</h2>
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
              {/* 👆 End Education */}
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

export default AboutTwo;
