import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/steps.css"
// eslint-disable-next-line react/prop-types
export default function Steps({ icon, head, para, calssActive }) {
    return (
        <div className="step">
            <div className={`icon ${calssActive}`}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="info">
                <h2>{head}</h2>
                <p style={{ fontSize: "15px", color: "#777", maxWidth: "250px", margin: "auto", lineHeight: "1.8" }}>{para}</p>
            </div>
        </div >
    )
}
