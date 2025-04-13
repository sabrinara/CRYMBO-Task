"use client"
import Image from "next/image";
import Heroleft from "./Heroleft";
import HeroRight from "./HeroRight";


const Banner = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-[640px]">
                <Heroleft />
            </div>
            <div className="w-[615px]">
                <HeroRight />
            </div>
        </div>
    );
};

export default Banner;