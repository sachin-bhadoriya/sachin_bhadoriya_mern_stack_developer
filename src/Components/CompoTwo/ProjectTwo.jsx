import { Link } from 'react-router-dom'
import VantaNetBackground from '../VantaBackgroundTwo'
import "./CssFile/Project.css"
import { projectsData } from "./data"
import { useState } from 'react'

const ProjectTwo = () => {

  const [category, setCategory] = useState("all")

  const filteredProject = category === "all" ? projectsData : projectsData.filter(p => p.type === category)

  return (
    <>
      <VantaNetBackground />
      <div className="project-header">
        <ul>
          <li onClick={() => setCategory("all")}>All Projects</li>
          <li onClick={() => setCategory("Full Stack Project")}>Full Stack Projects</li>
          <li onClick={() => setCategory("Frontend Project")}>Frontend Projects</li>
          <li onClick={() => setCategory("Backend Project")}>Backend Projects</li>
          <li onClick={() => setCategory("React Native Project")}>React Native Projects</li>
        </ul>
      </div>

      <div className="project-cards-container">
        {filteredProject.map((item, index) => (
          <div to={item.github} key={index} className="project-card">
            <div className="hover-link-project">
              <b>Type :</b> <span>{item.type} </span><br />
              <b>Topic :</b><span> {item.topic} </span><br />
              <b>Github :</b> <span><Link to={item.github}>Click Here...</Link></span> <br />
              <b>Live :</b> <span><Link to={item.live}>Click Here...</Link></span>
            </div>
            {item.img == "no" ?
              <>
                <iframe
                  src={item.live}
                  scrolling='no'
                  style={{ border: "none", scrollbarWidth: "none", width: "100%", height: "100%", boxSizing: "border-box", borderRadius: "5px", overflow: "hidden" }}>
                </iframe>
              </>
              :
              <>
                <img src={item.live} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "5px", overflow: "hidden" }} alt="" />
              </>}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectTwo