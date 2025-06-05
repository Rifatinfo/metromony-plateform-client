import AboutJodidar from "../../Components/AboutJodidar/AboutJodidar";
import AddProfile from "../../Components/AddProfile/AddProfile";
import Banner from "../../Components/Banner/Banner";
import Counting from "../../Components/Counting/Counting";
import HowWorking from "../../Components/HowWorking/HowWorking";
import MatrimonyCardSec from "../../Components/MatrimonyCardSec/MatrimonyCardSec";
import OTPForm from "../../Components/OTPForm/OTPForm";
import Stikar from "../../Components/Stikar/Stikar";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import TestimonialSec from "../../Components/TestimonialSec/TestimonialSec";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Login from "../Login/Login";

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
            <OTPForm/>
            <AddProfile/>
            <TestimonialSec/>
            <Login/>
        </div>
    );
};

export default Home;