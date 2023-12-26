import contanct from "../img/contact us.jpg"
import styles from "../Css/contact.module.css"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
export default function ContactUs() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    const controlY = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }
    const controlx = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className={styles["contact-us"]} id="contact">
            <h1 className="main-heading" style={{ color: "var(--main-color)" }}>Conact Us</h1>
            <div className={`container ${styles.container}`}>
                <motion.img
                    className="d-none d-md-block"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlx}
                    transition={{ duration: 1 }}
                    style={{ width: "150px" }}
                    src={contanct}
                    alt=""
                />
                <motion.form
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={controlY}
                    transition={{ duration: 1 }}
                    onSubmit={(e) => e.preventDefault()} style={styles.form}>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" placeholder="Your Name" id="userName" />
                    <label htmlFor="email">Your E-Mail</label>
                    <input type="email" placeholder="Your E-Mail" id="email" />
                    <label htmlFor="msg">Your Message</label>
                    <textarea placeholder="Your Message" id="msg"></textarea>
                    <button className="explore" type="submit" value="submit">submit</button>
                </motion.form>
            </div>
        </div >
    )
}
