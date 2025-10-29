import './notFound.css'
import VantaBackgroundTwo from "./VantaBackgroundTwo"

const NotFound = () => {
    return (
        <VantaBackgroundTwo>
            <div className="error-box-main">
                <div className="error-box-container">
                    <div className="error-box-header">
                        <div className="dots-container">
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                            <div className="dot3"></div>
                        </div>
                    </div>
                    <div className="error-box-content text-white">
                        <h4>ERROR</h4>
                        <h2>404</h2>
                        <h6>Oops! The page you requested could not be found.</h6>
                    </div>
                </div>
            </div>
        </VantaBackgroundTwo>
    )
}

export default NotFound