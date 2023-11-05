import { ToastContainer, toast } from "react-toastify";

const AddJob = () => {

    const handleAddProducts = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const brand_name = form.brand_name.value;
        const rating = form.rating.value;
        // console.log(name, imgage, price, description, rating);

        const allProduct = {
            name,
            image,
            brand_name,
            price,
            type,
            description,
            rating,
        };
        console.log(allProduct);
        fetch('https://technology-and-electronics.vercel.app/products', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(allProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(" Products Add Success Full ", {
                        position: "top-center"
                    })
                }
                form.reset()
            })
    }





    return (
        <div>
            <div className=" lg:w-[90%]  mx-auto p-2 bg-gray-400 rounded-lg shadow-md mt-1 ">
                <h2 className="text-3xl text-center text-pink-600 font-bold mb-6 mt-10 "> Add Products  </h2>
                <form onSubmit={handleAddProducts} className="px-2">
                    <div className=" lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">  Name </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Name" name="name" required />
                        </div>

                        <div className="mb-4 lg:w-1/2 w-full  ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> image </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="image URL " name="image" required />
                        </div>
                    </div>



                    <div className="lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Price </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder=" Price " name="price" required />
                        </div>

                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Brand Name </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Brand Name " name="brand_name" required />
                        </div>
                    </div>

                    <div className="lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Rating </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Rating Number " name="rating" required />
                        </div>
                        <div className="mb-4 lg:w-1/2 w-full  ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Type Of </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Type Off " name="type" required />
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Description </label>
                        <textarea className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " name="description" id="" placeholder=" Description Here....  " cols="30" rows="10"></textarea>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">
                        <button className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 "> Add Products </button>
                    </div>
                </form>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddJob;