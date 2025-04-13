import Banner from "./Banner";
import Navbar from "./Navbar";


const BannerLayout = () => {
    return (
        <div>
             <div
            className="w-full h-[925px] relative flex flex-col items-center text-center p-6"
        >
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/9m3bFY4k/bgBanner.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",    
                }}
            ></div>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(https://i.ibb.co.com/gZkgLq2K/Vector.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",    
                }}
            ></div>
        
            <div className="relative z-10 text-black px-10 py-5 w-[1200px] ">
                <Navbar/>
                <Banner/>
              
            </div>
        </div>
        </div>
    );
};

export default BannerLayout;