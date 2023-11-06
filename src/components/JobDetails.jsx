import { useLoaderData } from "react-router-dom";
import { ToastContainer, } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const JobDetails = () => {

    const jobDeatails = useLoaderData()
    console.log(jobDeatails);

    const { user } = useAuth()

    const userEmail = user.email
    console.log(userEmail);


    const { title, deadline, description, minimumPrice, maximumPrice, } = jobDeatails || {};
    const handleBidJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const buyerEmail = form.buyerEmail.value;
        const email = form.email.value;
        const price = form.price.value;
        const deadline = form.deadline.value;
       

        const addJob = {
            buyerEmail,
            deadline,
            email,
            price,
        };
        console.log(addJob);

        // fetch('http://localhost:5000/addJob', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': "application/json",
        //     },
        //     body: JSON.stringify(addJob)
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             toast.success(" Job Add Success Full ", {
        //                 position: "top-center"
        //             })
        //         }
        //         form.reset()
        //     })

    }



    return (
        <div>
            <div className="card lg:w-[70%] w-full mx-auto card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center justify-between ">
                        <h2 className="card-title text-fuchsia-600 font-bold text-lg  lg:text-2xl "> {title} </h2>
                        <h1 className=" text-lg font-bold "> Date : {deadline} </h1>
                    </div>
                    <p className=" lg:w-1/2  w-full ">{description}</p>
                    <p className="text-xl font-bold "> price : <span>${minimumPrice} </span> - $<span>{maximumPrice}</span> </p>
                    <div className="card-actions justify-end">
                        <button className="bg-fuchsia-600 px-6 py-2 text-white font-bold  rounded "> Place Your Bit Form </button>
                    </div>
                </div>
            </div>

            {/*  Form   */}

            <div className=" lg:w-1/2 mx-auto pt-1 mt-4 bg-base-300 rounded-lg shadow-3xl ">
                <h2 className="text-3xl text-center text-fuchsia-800 font-bold mb-6 mt-10 ">  Add Job  </h2>
                <form onSubmit={handleBidJob} className="px-2">
                    <div className=" lg:flex gap-4 ">
                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor="">Buyer Email </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Buyer Email" defaultValue={userEmail} name="buyerEmail" readOnly required />
                        </div>

                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor=""> Email </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="" defaultValue={userEmail} readOnly name="email" required />
                        </div>
                    </div>

                    <div className=" gap-4 ">
                        <div className="lg:flex gap-4 ">
                            <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> Your Bidding Amount</label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Your Bidding Amount" name="price" required />
                            </div>
                            {/* <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> Maximum Price </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Maximum Price" name="maximumPrice" required />
                            </div> */}
                        </div>

                        {/* <div className="mb-4">
                            <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> category </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" defaultValue={category} placeholder="Category" name="category" required />
                            </div>
                            <select className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" name="category" required>

                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing </option>
                                <option value="Digital Marketing">Graphics Design </option>
                            </select>
                        </div> */}
                        <div className="mb-4 w-full ">
                            <label className="block text-md font-semibold mb-2 " htmlFor=""> Dead Line  </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="date" placeholder=" Dead Line " name="deadline" required />
                        </div>
                    </div>


                    <div className="mb-4 ">
                        <label className="block  text-md font-semibold mb-2 " htmlFor="">Description </label>
                        <textarea className=" bg-gray-800 w-full px-4 py-2 text-white border rounded-lg  focus:outline-none focus:border-blue-500 " name="description" id="" placeholder=" Description Here....  " cols="20" rows="6"></textarea>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">
                        <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Bit On The Projects </button>
                    </div>
                </form>

                <ToastContainer></ToastContainer>
            </div>








        </div>
    );
};

export default JobDetails;