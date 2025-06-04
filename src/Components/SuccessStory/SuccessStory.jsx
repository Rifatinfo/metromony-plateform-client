import SuccessCart from "./SuccessCart";

const SuccessStory = () => {
    return (
        <div className="bg-[linear-gradient(135deg,_#fff5f6,_#fef2f3)] py-2">
            <div className="max-w-7xl mx-auto mt-30 ">
            {/* title */}
            <div className="text-center space-y-2 ">
                <h1 className="font-semibold text-4xl text-rose-600">Success Story</h1>
                <p>If you looking for the jodidar you have come to the  right place</p>
            </div>

            {/* cart */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-20">
                <SuccessCart/>
                <SuccessCart/>
                <SuccessCart/>
                <SuccessCart/>
            </div>
        </div>
        </div>
    );
};

export default SuccessStory;