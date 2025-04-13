import Navbar from "../Navbar";


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
        
            <div className="relative z-10 text-black px-10 py-5 w-[1200px]">
                <Navbar/>
                {/* <h1 className="font-semibold mb-2 text-black text-3xl drop-shadow-lg">
                    <span className="text-[#E10101]"> Create</span> & Explore <br />
                    Your <span className="text-[#E10101]">Cooking</span> Skill <br />
                    With Recipe <span className="text-[#E10101]">Hunt</span>{" "}
                </h1>
                <h4 className="text-base my-4 drop-shadow-md">
                    Making food with love, care, thoughts, and thousands of flavors. Every dish is a chapter in the story of togetherness.
                </h4> */}
                {/* <Image src='/asserts/bgBanner.png' alt='image' width={1000} height={1000}/> */}
            </div>
        </div>
        </div>
    );
};

export default BannerLayout;