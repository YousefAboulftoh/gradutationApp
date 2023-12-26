import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Css/clients.module.css"; // Assuming you're using CSS modulese
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Rate({ name, job, imgSrc, Number }) {
    const [count,] = useState(Number)

    return (
        <div>
            <img src={imgSrc} className={styles["carsoul-image"]} />
            <h2 className="name">{name}</h2>
            <span className="job">{job}</span>
            <div className={styles.rate}>
                {[...Array(count)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className={styles.stars} />
                ))}
            </div>
            <p className={styles.feedback}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem porro sed at voluptatem impedit ipsa! Sint, in? Vitae facilis nisi atque eos at! Ipsum sit facere placeat assumenda maxime.</p>
        </div>
    )
}
