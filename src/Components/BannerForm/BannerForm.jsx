
const BannerForm = () => {
    const ageOption = [];
    for (let i = 18; i <= 100; i++) {
        ageOption.push(
            <option key={i} value={i}>{i}</option>
        )
    }
    return (
        <div className="hidden md:flex md:h-30 border max-w-6xl mx-auto items-center justify-center rounded-md bg-white text-black">
            <div className=" bg-opacity-90 p-4 rounded-md  w-full mx-auto">
                <form className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3">
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-[12px] md:text-[16px] font-medium whitespace-normal">I'm looking for a</span>
                        <select className="border-2 text-rose-600 outline-rose-500 rounded px-6 py-2 text-sm w-full md:w-auto">
                            <option>Women</option>
                            <option>Man</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-sm font-medium">aged</span>
                        <select className="border text-rose-600 outline-rose-500 rounded px-2 py-2 text-sm w-full md:w-auto">{ageOption}</select>
                        <span className="text-[12px] md:text-[16px] font-medium">to</span>
                        <select className="border outline-rose-500 text-rose-600 rounded px-2 py-2 text-sm w-full md:w-auto">{ageOption}</select>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">of religious</span>
                        <select className="border outline-rose-500 text-rose-600  rounded px-2 py-2 text-sm w-full md:w-auto">
                            <option>Islam</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">and mother tongue</span>
                        <select className="border border-rose-600 text-rose-600  rounded px-2 py-2 text-sm w-full md:w-auto">
                            <option>Select</option>
                            <option>English</option>
                            <option>Bengali</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="w-full md:w-auto mt-2 md:mt-0">
                      <button className="btn border-none shadow-none text-white bg-rose-600 w-full md:w-auto font-medium px-8 py-4 rounded ">SEARCH</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BannerForm;