import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../Css/sidebar.css"
import { faGear } from "@fortawesome/free-solid-svg-icons"
export default function SideBar() {
    const orangeColor = () => {
        localStorage.setItem(`class`, `active`)
        document.documentElement.style.setProperty(`--main-color`, `#f4511e`)
        document.documentElement.style.setProperty(`--sec-color`, `#ff7043`)
    }
    const blueColor = () => {
        window.localStorage.removeItem(`class`)
        document.documentElement.style.setProperty(`--main-color`, `#16588E`)
        document.documentElement.style.setProperty(`--sec-color`, `#81C4FF`)
    }
    const toggleSide = (e) => {
        e.target.parentElement.classList.toggle(`active`)
    }
    return (
        <div className="sidebar">
            <h4 className="heading">choose Color</h4>
            <ul className="ul">
                <li onClick={blueColor}></li>
                <li onClick={orangeColor}></li>
            </ul>
            <div onClick={toggleSide} className="gear">
                <FontAwesomeIcon pointerEvents={"none"} spin icon={faGear} />
            </div>
        </div >
    )
}
