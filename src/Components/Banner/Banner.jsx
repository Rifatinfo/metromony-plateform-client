import BannerForm from "../BannerForm/BannerForm";

const Banner = () => {
    return (
        
        <div
  className="hero min-h-screen "
  style={{
    backgroundImage:
      "url(https://img.freepik.com/free-photo/romantic-couple-city-celebrating-engagement-together_23-2149488118.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="  text-center md:mt-40 border w-full">
    <div className="">
      <h1 className="mb-5 text-xl md:text-5xl font-bold text-white">We bring Jodidar together <br/> love unites them <br/>
      </h1>
      <BannerForm/>
    </div>
  </div>
</div>
    );
};

export default Banner;