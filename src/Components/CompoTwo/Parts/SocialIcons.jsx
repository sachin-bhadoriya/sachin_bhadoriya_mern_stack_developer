import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const SocialIcons = () => {
  return (
    <>
      <div className="iconsonly">
        <div className="socialIconMain">
          <Link
            to="https://github.com/sachin-bhadoriya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icons" />
          </Link>
        </div>
        <div className="socialIconMain">
          <Link
            to="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="icons" />
          </Link>
        </div>
        <div className="socialIconMain">
          <Link
            to="https://linkedin.com/in/sachin-bhadoriya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icons" />
          </Link>
        </div>
        <div className="socialIconMain">
          <Link
            to="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icons" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
