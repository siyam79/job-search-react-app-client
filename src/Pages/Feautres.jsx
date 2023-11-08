import logo1 from "../assets/creative.jpg"
import logo2 from "../assets/code2.jpg"
import logo4 from "../assets/abstract-4jpg.jpg"
import logo3 from "../assets/flat-design3.jpg"
import { useEffect } from "react";



const Feautres = () => {

    useEffect(() => {
        document.title = " Job Search | Features ";
    }, []);
    return (
        <div className="my-10 md:px-10 px-4 w-full mx-auto ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10  ">
                <div className="lg:w-1/4 ">
                    <h3 className="text-2xl text-gray-500 font-bold lg:w-1/2 mb-3 ">Whey we are batter than Others </h3>
                    <p className="text-base text-gray-400 ">Phosfluorescently develop empowered communit rather than front-end networks..</p>
                </div>
                {/*  feautreds */}
                <div className="w-full lg:w-3/4 ">
             <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
                {/*  card number 1  */}
                <div className="bg-[rgba(255, 255, 255,0.04)] rounded-[35px] h-96 shadow-2xl p-8  flex justify-center items-center hover:translate-y-4 transition-all duration-300  ">
                    <div className="lg:w-48 w-52 mx-auto">
                        <img className=" w-full " src={logo1} alt="" />
                        <h5 className="text-xl font-semibold text-gray-400 px-5 text-center mt-5 "> Convertient study Schedules </h5>
                    </div>
                </div>
                {/*  card number 2 */}
                <div className="bg-[rgba(255, 255, 255,0.04)] rounded-[35px] h-72 shadow-2xl p-8  flex justify-center items-center hover:translate-y-4 transition-all duration-300  ">
                    <div>
                        <img className="lg:w-40 w-52  mx-auto" src={logo2} alt="" />
                        <h5 className="text-xl font-semibold text-gray-400 px-5 text-center mt-5 "> Convertient study Schedules </h5>
                    </div>
                </div>
                {/*  card number 3  */}
                <div className="bg-[rgba(255, 255, 255,0.04)] rounded-[35px] h-80 shadow-2xl p-8  flex justify-center items-center hover:translate-y-4 transition-all duration-700 ">
                    <div>
                        <img className="lg:w-48 w-52  mx-auto " src={logo3} alt="" />
                        <h5 className="text-xl font-semibold text-gray-400 px-5 text-center mt-5 "> Convertient study Schedules </h5>
                    </div>
                </div>
                {/*  card number 4 */}
                <div className="bg-[rgba(255, 255, 255,0.04)] rounded-[35px] lg:h-64  shadow-2xl p-8  flex justify-center items-center hover:translate-y-4 transition-all duration-300  ">
                    <div>
                        <img className="lg:w-40 w-52  mx-auto " src={logo4} alt="" />
                        <h5 className="text-xl font-semibold text-gray-400 px-5 text-center mt-5 "> Convertient study Schedules </h5>
                    </div>
                </div>
                


                </div>
            </div>
        </div>
    </div>
    );
};

export default Feautres;