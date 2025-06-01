import { RiMenuAddFill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiCloverFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'My Matrimony', link: '/my-matrimony' },
        { name: 'Matches', link: '/matches' },
        { name: 'Search', link: '/search' },
        { name: 'Inbox', link: '/inbox' }
    ];
    
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute bg-transparent w-full top-0 left-0 z-50">
            <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
                    <span className="text-5xl">
                        <PiCloverFill />
                    </span>
                    Marry
                </div>
                {/* Marry icon nav */}
                <div 
                    onClick={() => setOpen(!open)} 
                    className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {open ? <IoClose /> : <IoMdMenu />}
                </div>
                <ul 
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-8 text-xl font-semibold md:my-0 my-7">
                            <a href={link.link} className="text-white hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    ))}
                    <button className="ml-8 font-semibold px-6 py-3 text-white bg-rose-600 rounded-3xl">Sign Up</button>
                </ul>
            </div>
        </div>
    );
};




export default Nav;