import AboutJodidar from "../../Components/AboutJodidar/AboutJodidar";
import Banner from "../../Components/Banner/Banner";
import Counting from "../../Components/Counting/Counting";
import HowWorking from "../../Components/HowWorking/HowWorking";
import MatrimonyCardSec from "../../Components/MatrimonyCardSec/MatrimonyCardSec";
import Stikar from "../../Components/Stikar/Stikar";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <MatrimonyCardSec/>
            <AboutJodidar/>
             <Counting/>
             <HowWorking/>
             <SuccessStory/>
             <Stikar/>
            <WhyChooseUs />
        </div>
    );
};

export default Home;