import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./CssFile/NavbarTwo.css";
// import menuOne from "../../assets/image/menuOne.png";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);


const NavbarTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const container = useRef();
  const mobileDrawerTwo = useRef();
  useGSAP(() => {
    gsap.from('.logo', {
      y: -100,
      opacity: 0,
      duration: 2,
      stagger: 0.3
    });
    gsap.from('.linksMain .animatedicon', {
      y: -100,
      opacity: 0,
      duration: 1.3,
      stagger: 0.4,
    });
    gsap.from('.linksMenu', {
      y: -100,
      opacity: 0,
      duration: 1.3,
    });
  }, { scope: container });

  useGSAP(() => {
    gsap.from("li", {
      y: -100,
      opacity: 0,
      duration: 5,
    });
  }, { scope: mobileDrawerTwo });


  return (
    <div className="container changa">
      <div ref={container} className="navTwoContainer">
        <div className="logo ">
          <span className="">Sachin Bhadoriya</span>
        </div>

        {/* Desktop Menu */}
        <div className="linksMain desktopOnly">
          <ul>
            <li className="animatedicon"><Link to="/">Home</Link></li>
            <li className="animatedicon"><Link to="/about">About</Link></li>
            <li className="animatedicon"><Link to="/skills">Skills</Link></li>
            {/* <li><Link to="/service">Service</Link></li> */}
            <li className="animatedicon"><Link to="/contact">Contact</Link></li>

            <div className="CvDownBtn animatedicon desktopOnly">
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
          {!menuOpen ? <CgMenuRight size={25} className="mobileMenuIconCross" /> : <RxCross2 size={25} className="mobileMenuIconCross" />}
          {/* {!menuOpen ? <img src={menuOne} alt="menu" /> : <>O</>} */}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div ref={mobileDrawerTwo} className={`mobileDrawerTwo ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          {/* <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li> */}
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <div className="CvDownBtn desktopOnly">
              <div className="CvBtn">
                <Link onClick={() => setMenuOpen(false)} to="Cv">
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
