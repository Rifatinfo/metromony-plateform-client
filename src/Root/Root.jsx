import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;