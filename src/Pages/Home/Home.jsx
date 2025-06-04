import AboutJodidar from "../../Components/AboutJodidar/AboutJodidar";
import Banner from "../../Components/Banner/Banner";
import Counting from "../../Components/Counting/Counting";
import HowWorking from "../../Components/HowWorking/HowWorking";
import MatrimonyCardSec from "../../Components/MatrimonyCardSec/MatrimonyCardSec";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyChooseUs/>
            <MatrimonyCardSec/>
            <AboutJodidar/>
             <Counting/>
             <HowWorking/>
        </div>
    );
};

export default Home;