import AboutComponent from "./AboutComponent";
import CallbackComponent from "./CallbackComponent";
import CarouselComponent from "./CarouselComponent";
import FeaturesComponent from "./FeaturesComponent";
import HeaderComponent from "./HeaderComponent";
import Projects from "./Projects";
import ServiceComponent from "./ServiceComponent";
import WebinarComponent from "./WebinarComponent";

function Home(){
    return (
        <>
            <HeaderComponent/>
            <CarouselComponent/>
            <AboutComponent/>
            <WebinarComponent/>
            <FeaturesComponent/>
            <ServiceComponent/>
            <CallbackComponent/>
            <Projects/>
        </>
    );    
}

export default Home;