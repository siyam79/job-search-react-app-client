import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";

const JobDetails = () => {
    const navegate = useNavigate()

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
        const title = form.title.value;


        const addBidJob = {
            buyerEmail,
            deadline,
            email,
            price,
            title
        };
        console.log(addBidJob);

        fetch('http://localhost:5000/addBidJob', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(addBidJob)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(" Add Bid Job Success Fully ", {
                        position: "top-right"

                    })
                    setTimeout(() => {
                        navegate('/mybids')
                    }, 1000);

                }
                // form.reset()


            })

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
                <h2 className="text-3xl text-center text-fuchsia-800 font-bold mb-6 mt-10 "> Add Job Bid  </h2>
                <form onSubmit={handleBidJob} className="px-2">
                    <div className="mb-4  w-full ">
                        <label className="block  text-md font-semibold mb-2 " htmlFor="">Job Title </label>
                        <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Job Title " defaultValue={title} name="title" required />
                    </div>


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

                    <div className="  gap-4 ">
                        <div className="lg:flex gap-4 ">
                            <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> Your Bidding Amount</label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Your Bidding Amount" name="price" required />
                            </div>

                            <div className="mb-4 w-full ">
                                <label className="block text-md font-semibold mb-2 " htmlFor=""> Dead Line  </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="date" placeholder=" Dead Line " name="deadline" required />
                            </div>
                        </div>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">

                        <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Bit On The Job </button>

                    </div>
                </form>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default JobDetails;