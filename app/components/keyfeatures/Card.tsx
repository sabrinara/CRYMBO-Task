import Image from "next/image";
import i1 from "../../../public/KeyFeatures/1.png";
import i2 from "../../../public/KeyFeatures/2.png";
import i3 from "../../../public/KeyFeatures/3.png";
import i4 from "../../../public/KeyFeatures/4.png";
import i5 from "../../../public/KeyFeatures/5.png";
import i6 from "../../../public/KeyFeatures/6.png";

const Card = () => {
    const data = [
        {
            id: 1,
            image: i1,
            title: "Blockchain payment gateway",
            details: "Connect to multiple blockchains of sour choice for global transactions.",
        },
        {
            id: 2,
            image: i2,
            title: "Crypto to fiat payment gateway",
            details: "Convert digital assets into traditional currencies with automated liquidity access.",
        },
        {
            id: 3,
            image: i3,
            title: "Crypto payment integration",
            details: "Plug & play API for instant onboarding.",
        },
        {
            id: 4,
            image: i4,
            title: "Fiat to crypto payment gateway",
            details: "Enable seamless on-ramps and off-ramps.",
        },
        {
            id: 5,
            image: i5,
            title: "Best crypto payment gateway",
            details: "Desi ned for securit , s eed, and com liance.",
        },
        {
            id: 6,
            image: i6,
            title: "Cryptocurrency payment system",
            details: "full-stack solution to power crypto payments at scale",
        },
    ];

    return (
        <div className="flex flex-col justify-center w-[1200px] h-[872px] gap-[60px]">
            <h1 className="text-[60px] text-center font-semibold">
                Key features of <br/> crymbo pay
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
                {data.map((card) => (

                    <div
                        key={card.id}
                        className=" bg-[#F5F9F7] p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-shadow duration-300 w-[380px] h-[358px]"
                    >
                        <div className="relative flex justify-center items-center py-4">
                            <div
                                className="absolute inset-0 "
                                style={{
                                    backgroundImage: `url('https://i.ibb.co.com/LXCW1DkD/bg.png')`,

                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",


                                }}
                            ></div>

                            <div className="relative z-10 ">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="w-[137px] h-[137px] rounded-lg"
                                />
                            </div></div>
                       <div className="flex flex-col justify-center gap-[2px]">
                       <h3 className="text-[24px] font-semibold text-[#040B06] mb-2">{card.title}</h3>
                       <p className="text-[16px] text-[#3E4440]">{card.details}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
