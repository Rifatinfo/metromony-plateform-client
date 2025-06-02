const MatrimonyCard = () => {
  return (
    <div className="md:flex flex-col text-center items-center max-w-md  rounded-md shadow-xl  overflow-hidden border-transparent   hover:shadow-lg hover:scale-105 transition-all duration-300">
      {/* Profile Image */}
      <img
        src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?ga=GA1.1.860420525.1723460227&semt=ais_items_boosted&w=740"
        alt="Profile"
        className="w-46 h-46 object-cover mx-auto"
      />

      {/* Profile Info */}
      <div className="p-4 flex-1">
        <h2 className="text-lg font-semibold">
          Pratik Patel, <span className="font-normal">26</span>
        </h2>
        <p className="text-sm text-gray-600">Hindu</p>
        <p className="text-sm text-gray-600">Business Owner</p>
        <p className="text-sm text-gray-600">Ahmedabad, Gujarat</p>

        <button className="mt-3 btn bg-rose-600 text-white px-4 py-1 rounded-md text-sm hover:bg-rose-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default MatrimonyCard;
