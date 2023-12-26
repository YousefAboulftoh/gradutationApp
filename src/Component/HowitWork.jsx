import { faFilePen, faHandshake, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Steps from "./Steps";
import styles from "../Css/howit.module.css";

const HowitWork = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const controls = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            className={styles["how-it"]}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={controls}
            transition={{ duration: 1 }}
        >
            <span className={styles.how}>How It Works</span>
            <h2 className={styles.head}>Rent a Car in 3 Easy Steps</h2>
            <div className={`${styles.container} container`}>
                <Steps
                    head={"Choose Location"}
                    para={"See the nearest suitable car with a heavily discounted price"}
                    icon={faMapLocationDot}
                />
                <Steps
                    head={"Fill Some Data"}
                    para={"Easily fill in data like username and date you need, etc."}
                    icon={faFilePen}
                    calssActive={`active`}
                />
                <Steps head={"Book Your Car"} para={"Book the chosen car"} icon={faHandshake} />
            </div>
        </motion.div>
    );
};

export default HowitWork;
