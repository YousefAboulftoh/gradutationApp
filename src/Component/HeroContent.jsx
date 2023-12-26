import car from "../img/car.webp"
import { motion } from 'framer-motion';
import "../Css/herocontent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HeroContent() {
    return (
        <div className="hero-content" id="home">
            <div className="container hero position-relative d-flex align-items-center">
                <motion.div className="info"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Premium Rental car in egypt</h1>
                    <p>Explore seamless travel experiences with our luxury rental cars. Embark with utmost comfort and ease - your adventure awaits.</p>
                    <button className="explore">Explore</button>
                    <div className="social">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </div>
                </motion.div>
                <motion.div className="right-side"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <img className="car" src={car} />
                </motion.div>
            </div>
        </div>
    )
}
