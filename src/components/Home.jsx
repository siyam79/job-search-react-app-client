import { useLoaderData } from "react-router-dom";
import About from "../Pages/About";
import Banner from "../Pages/Banner";
import TabJobs from "../Pages/TabJobs";
import Blogs from "../Pages/Blogs";
import Feautres from "../Pages/Feautres";
import Contact from "../Pages/Contact";

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <Banner></Banner>
            <TabJobs jobs={jobs}></TabJobs>
            <About></About>
            <Blogs></Blogs>
            <Contact></Contact>
            <Feautres></Feautres>
            
        </div>
    );
};

export default Home;