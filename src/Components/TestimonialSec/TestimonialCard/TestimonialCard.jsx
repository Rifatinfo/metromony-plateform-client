import { Quote } from "lucide-react";
// import tes_1 from '../../../assets/download.jpeg'
const TestimonialCard = () => {
  return (
    <div className="py-16  px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-700">Happy Jodidar's</h2>
      <p className="text-gray-600 mt-2">
        {" "}
        Know their story how they met on My Jodidar Platform
      </p>

      <div className="max-w-3xl mx-auto mt-10 relative">
        <Quote className="text-rose-400 w-10 h-10 mx-auto mb-4" />

        <p className="italic text-gray-700 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* <img
            className="md:w-16 md:h-16"
            src={tes_1}
            alt="Couple"
           
          /> */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="text-left">
            <h4 className="text-rose-600 font-semibold">Peter & Sarah James</h4>
            <p className="text-sm text-gray-500">Bangalore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
