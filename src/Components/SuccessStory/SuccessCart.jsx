
const SuccessCart = () => {
    return (
        <div className="max-w-xs mx-auto bg-white border-pink-200 rounded-xl shadow-xl overflow-hidden">
            {/* image */}
            <img className="w-full h-48 object-cover" src="https://t4.ftcdn.net/jpg/02/77/68/51/360_F_277685185_UAYxm224UPelni1rxsuAUZQbfhly0RpL.jpg" alt="" />

            <div className="bg-rose-400 h-3 w-full"></div>

            <div class="flex justify-center -mt-7">
                <div class="bg-white p-2 rounded-full border-2 border-pink-200 shadow">
                    <svg class="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
             4.42 3 7.5 3c1.74 0 3.41 0.81 
             4.5 2.09C13.09 3.81 14.76 3 
             16.5 3 19.58 3 22 5.42 22 8.5c0 
             3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                </div>
            </div>

            {/* <!-- Text Content --> */}
            <div class=" px-4 py-4">
                <p class="text-sm text-gray-700 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                </p>
                <p class="font-bold text-gray-900 mt-6 text-xl hover:underline">John Doe</p>
            </div>
        </div>
    );
};

export default SuccessCart;