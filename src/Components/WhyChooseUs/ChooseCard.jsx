import { FaUserShield, FaHeart, FaHeadset } from "react-icons/fa";

const ChooseCard = () => {
    const cards = [
        {
            icon: <FaUserShield className="text-6xl text-pink-600" />,
            title: "Verified Profiles",
            description: "All profiles are verified to ensure trust and authenticity."
        },
        {
            icon: <FaHeart className="text-6xl text-rose-500" />,
            title: "Success Stories",
            description: "Thousands have found their perfect match through our platform."
        },
        {
            icon: <FaHeadset className="text-6xl text-purple-400" />,
            title: "24/7 Support",
            description: "Our support team is here to help you anytime, any day."
        }
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
            {cards.map((card, index) => (
                <div key={index} className="card bg-base-100 w-96 border-transparent  border-[3px] hover:border-rose-600 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg">
                    <figure className="px-10 pt-10">
                        {card.icon}
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-rose-600">{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChooseCard;
