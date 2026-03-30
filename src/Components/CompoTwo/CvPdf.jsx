import VantaBackgroundTwo from "../VantaBackgroundTwo";
import "./Cv.css";
import myCV from "../../assets/sachin-bhadoriya-frontend-dev.pdf"

const Cv = () => {
    return (
        <>
            <VantaBackgroundTwo />
            <div style={{margin: "auto"}}>
                <div style={{
                    width: "80%",
                    margin: "auto",
                    height: "80vh"
                }}>
                    <embed className="pdf"
                        src={myCV}
                        width="100%"
                        style={{
                            height: "85vh"
                        }}></embed>

                </div>
            </div>

        </>
    )
}

export default Cv;
