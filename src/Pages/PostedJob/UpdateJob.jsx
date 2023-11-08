import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";


const UpdateJob = () => {

    const updateJob = useLoaderData()
    console.log(updateJob);

    const {  _id , title, deadline, minimumPrice, maximumPrice, description ,category, } = updateJob || {};
    const handleUpdateJob = (e) => {
        e.preventDefault();

       const form = e.target;
    const title = form.title.value;
    const minimumPrice = form.minimumPrice.value;
    const maximumPrice = form.maximumPrice.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
   
    const updateJob = {
        title,
        deadline,
        minimumPrice,
        maximumPrice,
        description,
        category,
    };
    console.log(updateJob);

        fetch(`http://localhost:5000/updateJob/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateJob),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(" Job Update Success Full ", {
                        position: "top-left"
                    })
                }
            })
    }
    useEffect(() => {
        document.title = " Job Search | Update Job ";
    }, []);

    return (
        <div>
            <div className=" lg:w-1/2 mx-auto pt-1  bg-base-300 rounded-lg shadow-3xl mt-1 ">
                <h2 className="text-3xl text-center text-fuchsia-800 font-bold mb-6 mt-10 ">  Update Job </h2>
                <form  onSubmit={handleUpdateJob} className="px-2">
                    <div className=" lg:flex gap-4 ">
                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor="">Job Title </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Job Title " defaultValue={title} name="title" required />
                        </div>

                        {/* <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor=""> Email </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="" readOnly name="email" required />
                        </div> */}
                    </div>

                    <div className=" gap-4 ">
                        <div className="lg:flex gap-4 ">
                            <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> Minimum Price </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Minimum Price" defaultValue={minimumPrice} name="minimumPrice" required />
                            </div>
                            <div className="mb-4 w-full ">
                                <label className="block   text-md font-semibold mb-2 " htmlFor=""> Maximum Price </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Maximum Price" defaultValue={maximumPrice} name="maximumPrice" required />
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>
                            <select className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " id="category" name="category" defaultValue={category} required>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing </option>
                                <option value="Graphics Design">Graphics Design </option>
                            </select>
                        </div>
                        <div className="mb-4 w-full ">
                            <label className="block text-md font-semibold mb-2 " htmlFor=""> Dead Line  </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="date" placeholder=" Dead Line " defaultValue={deadline} name="deadline" required />
                        </div>
                    </div>


                    <div className="mb-4 ">
                        <label className="block  text-md font-semibold mb-2 " htmlFor="">Description </label>
                        <textarea className=" bg-gray-800 w-full px-4 py-2 text-white border rounded-lg  focus:outline-none focus:border-blue-500 " name="description" id="" defaultValue={description} placeholder=" Description Here....  " cols="20" rows="6"></textarea>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">
                        <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Update</button>
                    </div>
                </form>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UpdateJob;