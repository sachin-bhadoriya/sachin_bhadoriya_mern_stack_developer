import VantaBackground from "../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";
import { ServiceData } from "./data"; // adjust import path as needed

const ServiceTwo = () => {
  return (
    <div>
      <VantaBackground />
      <div className="container mainTwoContainer text-black">
        <div className="subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay text-white">Services</h2>

              {/* Map through ServiceData and display each */}
              <div className="service-list mt-4">
                {ServiceData.map((service, idx) => (
                  <div key={idx} className="service-card mb-4 p-3 bg-light rounded">
                    <h4 className="fw-bold">{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
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

export default ServiceTwo;
