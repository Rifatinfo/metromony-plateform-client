import otp_img from "../../assets/login.png";
const OTPForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20">
        <div>
          <img src={otp_img} className="rounded-lg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className=" md:w-[500px] bg-white shadow-md rounded-xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Let's get you there!
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Haven't you registered yet?
                <a href="" className="text-pink-600 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Email ID /Mobile No."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button className="w-full py-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">
                Send OPT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
