import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)
    const  navigate  = useNavigate()
    const handleSocialLogin = (user) => {
       
        user()
            .then(res => {
                // console.log(res);
                if (res.user) {
                   
                    toast.success('User logged in successfully', {
                        position: 'top-center'

                    })
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }

            }).catch(error => {
                toast.error( error);
            })
    }
    useEffect(() => {
        document.title = " Job Search | Social Login ";
    }, []);
    return (
        <>
            <div className="divider text-center  font-semibold  ">Continue with</div>
            <div className=" flex-col flex items-center justify-center ">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" badge badge-outline w-full px-4 py-4 mt-2 pb-4  flex items-center justify-center font-bold gap-1"><span className=" text-xl"><FcGoogle></FcGoogle></span ><span className='text-fuchsia-600 font-semibold '>Login With Google</span> </button>
                <button
                    onClick={() => { handleSocialLogin(githubLogin) }}
                    className="badge badge-outline w-full px-4 py-4 mt-2 pb-4  flex items-center justify-center font-bold gap-1 "><span className="text-xl "> <BsGithub></BsGithub> </span ><span className='text-fuchsia-600  font-semibold '> Login With Github</span></button>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default SocialLogin;

