import { useState } from "react";
import { Link } from "react-router-dom";
import "./CssFile/NavbarTwo.css";
import menuOne from "../../assets/image/menuOne.png";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";





const NavbarTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container changa">
      <div className="navTwoContainer">
        <div className="logo ">
          <span className="">Sachin Bhadoriya</span>
        </div>

        {/* Desktop Menu */}
        <div className="linksMain desktopOnly">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            {/* <li><Link to="/service">Service</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
           
              <div className="CvDownBtn desktopOnly">
                <div className="CvBtn">
                  <Link to="Cv">
                    <button>View CV</button>
                  </Link>
                </div>
              </div>
           

          </ul>
        </div>



        {/* Hamburger Icon */}
        <div className="linksMenu" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <CgMenuRight size={25} className="mobileMenuIconCross" /> : <RxCross2 size={25} className="mobileMenuIconCross" /> }
          {/* {!menuOpen ? <img src={menuOne} alt="menu" /> : <>O</>} */}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobileDrawerTwo ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          {/* <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li> */}
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <div className="CvDownBtn desktopOnly">
              <div className="CvBtn">
                <Link  onClick={() => setMenuOpen(false)} to="Cv">
                  <button>View CV</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTwo;
