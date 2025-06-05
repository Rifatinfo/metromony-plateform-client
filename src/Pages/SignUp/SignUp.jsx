import { Link } from "react-router-dom";
import LottiePlayerLogin from "../../Components/LottiePlayerLogin/LottiePlayerLogin";

const SignUp = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="flex justify-center items-center ">
            <LottiePlayerLogin />
          </div>
          <div>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
              <div className="card-body space-y-4">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>

                <form>
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label" htmlFor="password">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-neutral w-full mt-2">
                    Login
                  </button>

                  <p className="text-sm text-gray-600 mt-2">
                    Haven't you registered yet?
                    <Link to="/login"><a href="" className="text-pink-600 hover:underline">
                      Sign In
                    </a></Link>
                  </p>
                </form>

                <div className="divider">or</div>

                {/* Social Login Buttons */}
                <div className="flex flex-col gap-2">
                  <button className="btn btn-outline w-full">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
