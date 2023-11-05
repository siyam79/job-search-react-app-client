import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";


const Mainlayout = () => {
    return (
        <div className=" w-[98%] mx-auto  ">
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;