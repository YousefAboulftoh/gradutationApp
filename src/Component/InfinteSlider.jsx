import first from "../img/audi.jpg"
import sec from "../img/aston.jpg"
import third from "../img/ben.jpg"
import eight from "../img/rols.jpg"
import Slider from "react-slick";
import "../Css/slider.css"

export default function AutoPlay() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="auto-slide" >
            <Slider {...settings}>
                <img src={first} />
                <img src={sec} />
                <img src={third} />
                <img src={eight} />
            </Slider>
        </div>
    );
}