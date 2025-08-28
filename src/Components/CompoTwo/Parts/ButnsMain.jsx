import { Link } from 'react-router-dom'
const ButnsMain = () => {
  return (
    <div>
         <div className="btns mb-4">
              <Link to="/hireme"><button className="hireme">Hire Me</button></Link>
              <Link to="/contact"><button className="contactme">Contact Me</button></Link>
            </div>
    </div>
  )
}

export default ButnsMain