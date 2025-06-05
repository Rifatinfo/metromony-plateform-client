const AddProfile = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-2">
        <h1 className="font-semibold text-4xl text-rose-600">Add Profile</h1>
        <p>It's Trusted for You</p>
      </div>

      {/* form area  */}
      <div className="max-w-5xl mx-auto mt-16 p-8 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-rose-600">
          Matrimony Profile Setup
        </h2>
        <form className="grid sm:grid-cols-2 gap-6">
          {/* Profile Name */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              Profile Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Profile Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              Your Height<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option>Select...</option>
              <option>5'0"</option>
              <option>5'5"</option>
              <option>6'0"</option>
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              State<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option>Select...</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option>Select...</option>
              <option>Gulshan</option>
              <option>Mirpur</option>
            </select>
          </div>

          {/* Dietary Preference */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              Dietary Preference<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option>Select...</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>

          {/* Sub-Community */}
          <div>
            <label className="block text-rose-700 font-medium mb-1">
              Your Sub-Community<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <option>Select...</option>
              <option>Sunni</option>
              <option>Shia</option>
              <option>Other</option>
            </select>
          </div>

          {/* Live with parents */}
          <div className="sm:col-span-2">
            <label className="block text-rose-700 font-medium mb-2">
              Do you live with your parents?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="parents"
                  className="form-radio text-rose-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="parents"
                  className="form-radio text-rose-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </form>

        {/* Continue Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;


