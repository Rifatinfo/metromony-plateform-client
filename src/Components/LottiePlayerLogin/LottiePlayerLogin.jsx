import Lottie from "lottie-react";
import animationData from '../../../public/animationData.json'
const LottiePlayerLogin = () => {
  return (
    <div>
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default LottiePlayerLogin;
