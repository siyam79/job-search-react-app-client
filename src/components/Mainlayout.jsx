import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer";
import { useEffect } from "react";


const Mainlayout = () => {
    useEffect(() => {
        document.title = " Job Search | Main Layout ";
    }, []);
    return (
        <div className=" w-[98%] mx-auto  ">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;