import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "../Css/footer.module.css"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { useInView } from "react-intersection-observer"
export default function Footer() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    const controlY = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }
    const controlX = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    const [date, setDate] = useState("")
    useEffect((() => {
        setDate(new Date().getFullYear())
    }), [])
    return (
        < div className={styles.footer} >
            <div className={`container ${styles.container}`}>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlX}
                    transition={{ duration: 1 }}
                    className={styles.logo}>
                    <a href="#" style={{ fontWeight: "bold", textDecoration: "none", color: "white", fontSize: "22px" }}><span className="logo-name">RENT</span>CAR</a>
                    <p className={styles.desc}>
                        An intuitive online platform offering a diverse range of rental cars,
                    </p>
                </motion.div>
                <motion.ul
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlX}
                    transition={{ duration: 1 }}
                    className={styles.nav}>
                    <li>Company</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">About</a></li>
                </motion.ul>
                <motion.ul
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlX}
                    transition={{ duration: 1 }}
                    className={styles.nav}>
                    <li>Customer Services</li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Report For Problem</a></li>
                </motion.ul>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlY}
                    transition={{ duration: 1 }}
                    className={styles.join}>
                    <h2>Join Us</h2>
                    <div className="social">
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                    </div>
                </motion.div>
            </div>
            <hr />
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={controlX}
                transition={{ duration: 1 }}
                className="copy text-center w-100">
                Allright Reserved for <span style={{ color: "var(--main-color)", fontSize: "20px" }}>Yousef Aboulftoh</span> | {date} <FontAwesomeIcon icon={faCopyright} />
            </motion.div>
        </ div>
    )
}
