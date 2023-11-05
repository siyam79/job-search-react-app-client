import { Link } from "react-router-dom";

const ErrorElements = () => {
    return (
        <div>
            <div>
                <img className=" w-[80%] mx-auto " src="https://images.ctfassets.net/mazyb2z3tcjk/2DtJy19haWke1x4Q5cYxu2/927100bebd1e6b04e994d6f848434d3d/Xnip2023-04-07_14-02-24.jpg" alt="" />
            </div>
           <div className="text-center font-bold text-2xl ">
           <Link to='/'>
           <button className=" bg-gray-600 text-white px-4 py-2  rounded-lg "> Go To Home </button>
           </Link>
           </div>
        </div>
    );
};

export default ErrorElements;