import { BiLogoGmail } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';


const Contact = () => {

    return (
        <section id="contact" className=" py-10 px-3  bg-slate-900 ">
            <div className=" text-center mt-8 ">
                <h3 className="text-2xl font-semibold"> Contacts <span className=" text-pink-600">Me</span>  </h3>
                <p className="text-pink-600 mt-3 text-lg ">Get In Touch</p>
                <div className=" mt-16 flex md:flex-row flex-col gap-6 mx-w-5xl bg-slate-900 md:p-6 p-2  rounded-lg mx-auto  ">
                    <form className=" flex flex-col flex-1 gap-5 ">

                        <input className='px-4' type="text" name="name" id="" required placeholder="Your Name" />
                        <input className='px-4' type="email" name="email" required id="" placeholder="Email Address" />
                        <textarea placeholder=" Your Massege " rows={10} ></textarea>
                        <div>
                            <button className=" bg-pink-600 px-6 py-2 rounded-md font-bold  ">Send Massege </button>
                        </div>

                    </form>
                    <div className=" flex flex-col gap-8 ">
                        <div className="flex gap-4 w-fit items-center ">
                            <div className='min-w-[3rem] min-h-[3rem] flex items-center justify-center  bg-pink-600 rounded-full  '>
                                <BiLogoGmail className='text-4xl '></BiLogoGmail>
                            </div>
                            <p className=' text-2xl font-semibold '> technology@gmail.com</p>

                        </div>
                        <div className="flex gap-4 w-fit items-center ">
                            <div className='min-w-[3rem] min-h-[3rem] flex items-center justify-center bg-pink-600 rounded-full  '>
                                <BiLogoGmail className='text-4xl '></BiLogoGmail>
                            </div>
                            <p className=' text-2xl font-semibold '> electronis@gmail.com</p>

                        </div>
                        <div className="flex gap-4 w-fit items-center ">
                            <div className='min-w-[3rem] min-h-[3rem] flex items-center justify-center  bg-pink-600 rounded-full  '>
                                <AiOutlinePhone className='text-4xl '></AiOutlinePhone>
                            </div>
                            <p className=' text-2xl font-semibold '> +99 000 231 23  </p>

                        </div>
                        <div className="flex gap-4 w-fit items-center ">
                            <div className='min-w-[3rem] min-h-[3rem] flex items-center justify-center bg-pink-600 rounded-full  '>
                                <FaRegAddressCard className='text-4xl '></FaRegAddressCard>
                            </div>
                            <p className=' text-2xl font-semibold '> Borhanuddin , R/12 , House/21 </p>

                        </div>
                        
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Contact;