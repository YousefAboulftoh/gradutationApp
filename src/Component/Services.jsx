import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import "../Css/services.css"
import image from "../img/car.webp"
import Serv from "./Serv"
import { faCreditCard, faPhoneFlip, faUserGear } from "@fortawesome/free-solid-svg-icons"
export default function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })
    const controlsY = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }
    const controlsX = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className="services" id="services">
            <div className="container d-flex gap-5 justify-content-between align-items-center">
                <motion.div
                    ref={ref}
                    animate={!inView ? "hidden" : "visible"}
                    variants={controlsY}
                    initial="hidden"
                    transition={{ duration: 1 }}
                    className="image">
                    <img src={image} alt="" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    variants={controlsX}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 1 }}
                    className="content">
                    <h1>All The Services We Will Provide You</h1>
                    {/* <p>Explore tailored solutions for your car rental business, from seamless online booking to strategic digital marketing. Our dedicated team ensures innovation and excellence, enhancing your brand`s online presence.</p> */}
                    <div className="serv-count mt-3">
                        <Serv iconType={faUserGear} header={"Safe & Fast"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem optio alias, praesentium dignissimos."} />
                        <Serv iconType={faPhoneFlip} header={"Customer Services"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem optio alias, praesentium dignissimos."} />
                        <Serv margin={"mb-3"} iconType={faCreditCard} header={"No Cradit Need"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatem optio alias, praesentium dignissimos."} />
                    </div>
                    <button className="explore">Explore Now</button>
                </motion.div>
            </div>
        </div>
    )
}
