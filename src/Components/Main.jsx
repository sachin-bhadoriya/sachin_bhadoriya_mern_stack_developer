import { Routes, Route } from "react-router-dom";
import NavbarTwo from "./CompoTwo/NavbarTwo";
import HomeTwo from "./CompoTwo/HomeTwo";
import AboutTwo from "./CompoTwo/AboutTwo";
// import ProjectTwo from "./CompoTwo/ProjectTwo";
import ContactTwo from "./CompoTwo/ContactTwo";
import Skills from "./CompoTwo/Skills";
// import NotFound from "./NotFound";
import CvPdf from "./CompoTwo/CvPdf";

const Main = () => {
  return (
    <>
      <NavbarTwo />

      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="about" element={<AboutTwo />} />
        {/* <Route path="projects" element={<ProjectTwo />} /> */}
        <Route path="contact" element={<ContactTwo />} />
        <Route path="skills" element={<Skills />} />
        <Route path="/cv" element={<CvPdf />} />
        <Route path="/*" element={<HomeTwo />} />
      </Routes>
    </>
  );
};

export default Main;
