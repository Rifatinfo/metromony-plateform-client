import ChooseCard from "./ChooseCard";

const WhyChooseUs = () => {
    return (
        <div className=" bg-[linear-gradient(135deg,_#fff5f6,_#fef2f3)]">
            {/* title section */}
            <div className="text-center space-y-2 ">
                <h1 className="font-semibold text-4xl text-rose-600">Why Choose My Jodidar ?</h1>
                <p>If you looking for the jodidar you have come to the  right place</p>
            </div>

            {/* cart section  */}
             <ChooseCard/>
        </div>
    );
};

export default WhyChooseUs;