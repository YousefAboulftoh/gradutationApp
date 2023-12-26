
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faUserShield } from '@fortawesome/free-solid-svg-icons';
import "../Css/whyus.css"
import { useEffect, useRef, useState } from "react";
export default function WhyUs() {
    const [sec, setSec] = useState(0)
    const ref = useRef()
    const btn = useRef()
    window.onscroll = () => {
        if (window.scrollY > sec - 100) {
            btn.current.className += " active"
        } else {
            btn.current.className = "scroll"
        }
    }
    useEffect((() => {
        setSec(ref.current.offsetTop)
    }), [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div
            ref={ref}
            className="why-us" id="about">
            <h1 className="main-heading">Why Choose Us?</h1>
            <div className="container">
                <div className="box p-3">
                    <FontAwesomeIcon icon={faUserShield} className="icon" />
                    <h2>Fast And Safe</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis provident nihil mollitia dolores placeat! Praesentium, optio hic eos totam odio quas dolorem mollitia excepturi repellendus aspernatur quos enim, quod facere.</p>
                </div>
                <div className="box p-3">
                    <FontAwesomeIcon icon={faUserShield} className="icon" />
                    <h2>Fast And Safe</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis provident nihil mollitia dolores placeat! Praesentium, optio hic eos totam odio quas dolorem mollitia excepturi repellendus aspernatur quos enim, quod facere.</p>
                </div>
                <div className="box p-3">
                    <FontAwesomeIcon icon={faUserShield} className="icon" />
                    <h2>Fast And Safe</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis provident nihil mollitia dolores placeat! Praesentium, optio hic eos totam odio quas dolorem mollitia excepturi repellendus aspernatur quos enim, quod facere.</p>
                </div>
            </div>
            <button ref={btn} onClick={scrollToTop} className={"scroll"}><FontAwesomeIcon icon={faAngleUp} /></button>
        </div>
    )
}
