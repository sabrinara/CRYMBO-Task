import Image from "next/image";


const HeroRight = () => {
    return (
        <div className="text-[#FFFFFF] mt-[66px] relative">
            <div className="absolute top-10 left-1/2 transform translate-x-1/4">
                <div className="flex flex-col justify-start items-start mr-14">
                    <div>
                        <Image src='/asserts/HeroIcon.png' alt='image' width={20} height={20} />
                    </div>
                    <div className="text-start">
                        <h1>Sign up now and start processing crypto payments!</h1>
                    </div>
                </div>
            </div>

            <div className="">
                <Image src='/asserts/HeroImg.png' alt='image' width={615.33} height={715.06} />
            </div>
            <div className="flex justify-end mr-28">
                <Image src='/asserts/shadowunderhero.png' alt='image' width={181} height={7} />
            </div>

        </div>
    );
};

export default HeroRight;