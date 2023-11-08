import { Link } from "react-router-dom";
import logo from "../assets/attachment_117444264-removebg-preview.png"
import { useEffect } from "react";
const Footer = () => {

    useEffect(() => {
        document.title = " Job Search | Footer ";
    }, []);
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-2 ">
                <nav className="grid grid-flow-col gap-4 font-bold">
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav className="grid grid-flow-col gap-4 font-bold">
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav className="grid grid-flow-col gap-4 font-bold">
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav className="grid grid-flow-col gap-10 font-bold ">
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>

                <nav>
                    <div className="grid grid-flow-col g">

                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="bg-fuchsia-600 text-white font-bold lg:px-7 px-4 py-2 text-lg rounded-md ">Subscribe</button>

                    </div>
                </nav>
                <aside>
                <p>JobGine@Gmail.com</p>
                    <p>Online Job Marcket Place </p>
                    <img className="w-48" src={logo} alt="" />
                </aside>
            </footer>
        </div >
    );
};

export default Footer;