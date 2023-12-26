import ContactUs from "../Component/ContactUs";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import HeroContent from "../Component/HeroContent";
import HowitWork from "../Component/HowitWork";
import AutoPlay from "../Component/InfinteSlider";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";
import ClientsSays from "../Component/ClientsSays";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <HeroContent />
            <AutoPlay />
            <HowitWork />
            <WhyUs />
            <Services />
            <ClientsSays />
            <ContactUs />
            <Footer />
        </div>
    )
}
