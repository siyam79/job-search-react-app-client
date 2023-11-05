import { useLoaderData } from "react-router-dom";
import About from "../Pages/About";
import Banner from "../Pages/Banner";
import TabJobs from "../Pages/TabJobs";

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <Banner></Banner>
            <TabJobs jobs={jobs}></TabJobs>
            <About></About>
        </div>
    );
};

export default Home;