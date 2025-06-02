import CardPagination from "./CardPagination/CardPagination";
import MatrimonyCard from "./MatrimonyCard/MatrimonyCard";

const MatrimonyCardSec = () => {
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            {/* title section */}
            <div className="text-center space-y-2 ">
                <h1 className="font-semibold text-4xl text-rose-600">Profile May You Interested</h1>
                <p>If you looking for the jodidar you have come to the  right place</p>
            </div>

            {/* cart section  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-20">
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
                <MatrimonyCard/>
            </div>
            <div>
                <CardPagination/>
            </div>
        </div>
    );
};

export default MatrimonyCardSec;