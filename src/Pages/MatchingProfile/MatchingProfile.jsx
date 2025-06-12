import ProfileCard from "./ProfileCard/ProfileCard";

const MatchingProfile = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-4 min-h-screen mt-20">
                   <div className="md:w-1/5 w-full border-2 border-rose-600"></div>
                   <div className="md:w-4/5 w-full border-2 border-rose-600"><ProfileCard/></div>
            </div>
        </div>
    );
};

export default MatchingProfile;