import { useEffect } from "react";
import carrer from "../assets/carrer.png"

const Blogs = () => {

    useEffect(() => {
        document.title = " Job Search | Blog ";
    }, []);
    return (
        <div className=" md:px-2 p-4 w-full mx-auto mt-6 hover:translate-y-4 transition-all duration-500 ">
            <div className="gradientBg rounded-xl  rounded-br-[80px] md:p-9 px-4 py-9  ">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10  ">
                    <div>
                        <img className="w-[500px]  " src={carrer} alt="" />
                    </div>

                    <div className="md:w-3/5">
                        <h1 className="md:text-4xl text-2xl font-bold text-white mb-6 leading-relaxed  ">Develop Your Skills <br /> Without diligance </h1>
                        <p className=" md:text-2xl text-lg font-normal text-white  ">Energistically iterate effective data whereas is to highly efficient e-business. Conveniently and productivate leang  models visa visaa wireless ideas.</p>
                        <div className=" mt-2  ">
                            <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-xl font-bold mr-2  hover:bg-cyan-700 "> Get Started</button>
                            <button className="bg-cyan-600 text-white px-6 py-2 rounded-xl font-bold  hover:bg-fuchsia-700 "> Dis Connect</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;