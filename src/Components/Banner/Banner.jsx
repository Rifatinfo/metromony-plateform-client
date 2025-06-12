import { Link } from "react-router-dom";
import BannerForm from "../BannerForm/BannerForm";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://astrologermaakalyani.com/wp-content/uploads/2022/11/Love-Marriage-Solutions.webp')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="mt-30 text-center md:mt-80 w-full">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">We Bring Hearts Together <br /> Love Keeps Them Close <br />
          </h1>
          <BannerForm />
          <div className="md:hidden px-4 w-full md:w-auto mt-2 md:mt-0">
            <Link to="/matching-profile"><button className="btn border-none shadow-none text-white bg-rose-600 w-full md:w-auto font-medium px-8 py-4 rounded">SEARCH BY YOUR CHOOSE</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;