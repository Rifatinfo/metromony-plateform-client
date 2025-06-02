import BannerForm from "../BannerForm/BannerForm";

const Banner = () => {
  return (

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/romantic-couple-city-celebrating-engagement-together_23-2149488118.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="mt-30 text-center md:mt-40 w-full">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">We bring Jodidar together <br /> love unites them ...<br />
          </h1>
          <BannerForm />
          <div className="md:hidden px-4 w-full md:w-auto mt-2 md:mt-0">
            <button className="btn border-none shadow-none text-white bg-rose-600 w-full md:w-auto font-medium px-8 py-4 rounded ">SEARCH BY YOUR CHOOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;