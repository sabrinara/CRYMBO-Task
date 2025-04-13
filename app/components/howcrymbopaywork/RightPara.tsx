

const RightPara = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-[20px] w-[580px] h-[194px]">
            <p className="text-[16px] leading-[160%]">No hidden fees, instant settlements, and full compliance. Whether you're an online store, an EMI, or a financial service provider, crymbo pay ensures seamless transactions across multiple blockchains.</p>
            <div className="flex justify-between items-center gap-[10px]">
                <button className='bg-[#040B06] py-2 px-4 rounded-full text-[16px] border border-[#040B061A] text-white'>
                    Try it now
                </button>
                <button className=' py-2 px-4 rounded-full text-[16px] border border-[#999D9A] '>
                    See a demo
                </button>
            </div>
        </div>
    );
};

export default RightPara;