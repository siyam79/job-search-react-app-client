
const Banner = () => {
    return (
        <div>
            
            <div className="carousel w-full h-[80vh] ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/premium-vector/employees-looking-job-employees-using-magnifying-glass-searching-job-search-bar_70921-1842.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.celebrityschool.in/blogs/wp-content/uploads/2022/07/Untitled-design-391.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://assets.designhill.com/design-blog/wp-content/uploads/2021/09/image.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;