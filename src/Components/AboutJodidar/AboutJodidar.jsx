import about_img from  '../../assets/about_img.jpg';

const AboutJodidar = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6  overflow-hidden">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        {/* Left Images */}
        <div className=" space-y-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src={about_img}
              alt=""
              className="mx-auto w-96 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">About My Jodidar</h2>
          <p className="text-sm text-gray-600 mt-2 italic">
            Discover how we help you find your perfect life partner with trust and tradition
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            My Jodidar is a modern matrimony platform that connects individuals seeking meaningful and lasting relationships. We believe in the value of compatibility, shared goals, and cultural understanding.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether you're searching for love or companionship, our platform is designed to make your journey smooth, safe, and successful. Let us help you take the first step toward your future with someone special.
          </p>
          <button className="mt-6 px-5 py-2 bg-rose-500 text-white font-medium rounded hover:bg-rose-600 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutJodidar;
