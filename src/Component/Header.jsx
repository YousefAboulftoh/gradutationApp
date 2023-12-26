import "../Css/header.css"
import { useEffect } from "react"
export default function Header() {
    useEffect((() => {
        if (localStorage.getItem(`class`)) {
            document.documentElement.style.setProperty(`--main-color`, `#f4511e`)
            document.documentElement.style.setProperty(`--sec-color`, `#ff7043`)
        }
    }), [])
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container px-3 ">
                <a className="navbar-brand" href="#" style={{ fontWeight: "bold" }}><span className="logo-name">RENT</span>CAR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse flex-grow-0 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" >Contact Us</a>
                        </li>
                    </ul>
                    <div className="register d-md-block d-lg-none">
                        <button className="sign-in">sign-in</button>
                    </div>
                </div>
                <div className="register d-none d-sm-none d-md-none d-lg-block ">
                    <button className="sign-in">sign-in</button>
                </div>
            </div>
        </nav >
    )
}
