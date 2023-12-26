import Slider from "react-slick";
import avatar from "../img/avatar.jpg";
import styles from "../Css/clients.module.css";
import { motion } from "framer-motion";
import Rate from "./Rate";
import "../Css/clients.css"
import { useInView } from "react-intersection-observer";
const ClientsSays = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    const controlY = {
        hidden: { opacgraity: 0, y: -100 }, visible: { opacity: 1, y: 0 }
    }
    return (
        <div className={`${styles.clients} container`}>
            <div className={styles.container}>
                <motion.div
                    ref={ref}
                    animate={inView ? "visible" : "hidden"}
                    initial="hidden"
                    variants={controlY}
                    transition={{ duration: 1 }}
                    className={`${styles.content} text-center`}>
                    <h1 className="fw-bold">What our clients say</h1>
                    <p>Client testimonials: Showcasing valuable feedback and positive experiences from our satisfied clients.</p>
                </motion.div>
                <div className={styles.carousel}>
                    <Fade />
                </div>
            </div>
        </div>
    );
};

const Fade = () => {
    const settings = {
        autoplay: true,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles["carsoul-inner"]}>
            <Slider {...settings}>
                <Rate name={"Yousef Aboulftoh"} job={"Engineer"} imgSrc={avatar} Number={5} />
                <Rate name={"Yousef Ahmed"} job={"Engineer"} imgSrc={avatar} Number={3} />
                <Rate name={"Mooamen"} job={"Engineer"} imgSrc={avatar} Number={4} />
                <Rate name={"Nada"} job={"Engineer"} imgSrc={avatar} Number={5} />
                <Rate name={"Enas"} job={"Engineer"} imgSrc={avatar} Number={3} />
            </Slider>
        </div>
    );
};

export default ClientsSays;
