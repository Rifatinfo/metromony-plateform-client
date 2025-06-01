
const BannerForm = () => {
    const ageOption = [];
    for(let i = 18; i <= 100 ; i++){
        ageOption.push(
            <option key={i} value={i}>{i}</option>
        )
    }
    return (
        <div className="h-40 border w-full">
            <div className="text-white bg-opacity-90 p-4 rounded-md  w-full mx-auto">
                <form className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3">
                   <div className="flex items-center gap-2 w-full md:w-auto">
                    <span className="text-sm font-medium whitespace-normal">I'm looking for a</span>
                       <select className="border border-gray-300 rounded px-2 py-1 text-sm w-full md:w-auto">
                            <option>Women</option>
                            <option>Man</option>
                       </select>
                   </div>

                   <div>
                    
                   </div>
                </form>
            </div>
        </div>
    );
};

export default BannerForm;