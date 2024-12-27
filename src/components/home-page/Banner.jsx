
import React from 'react';

const Banner = () => {
    return (
        <div className="container pt-[50px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                {/* Left Side */}
                <div className=" 2xl:ml-[150px] pt-[80px] md:pt-[120px]">
                    <h1 className=" font-poppins text-[24px] sm:text-[32px] md:text-[40px] lg:text-[42px] font-bold text-primary-dark leading-snug">
                        Forget Busy Work, <br />
                        Start Next Vacation
                    </h1>
                    <p className=" font-poppins text-[14px] sm:text-[16px] mt-4 text-secondary leading-relaxed">
                        We provide what you need to enjoy your <br className="hidden md:block" />
                        holiday with family. Time to make another <br className="hidden md:block" />
                        memorable moment.
                    </p>
                    <button className=" font-poppins bg-primary-blue text-white mt-6 md:mt-[40px] w-[140px] sm:w-[167px] h-[41px] px-4 lg:px-6 text-[16px] md:text-[20px] rounded-lg font-[500] shadow-lg">
                        Show More
                    </button>
                    <div className=" font-poppins flex space-x-8 md:space-x-12 mt-8 md:mt-[60px]">
                        <div className="text-left">
                            <img className="w-[32px] h-[32px]" src="/assets/icons/ic_traveler(1)1.png" alt="Traveler Icon" />
                            <h3 className="text-primary-dark font-medium text-[14px] sm:text-[16px] mt-3">
                                2500 <span className="text-secondary font-light">Users</span>
                            </h3>
                        </div>
                        <div className="text-left">
                            <img className="w-[32px] h-[32px]" src="/assets/icons/ic_treasure1.png" alt="Treasure Icon" />
                            <h3 className="text-primary-dark font-medium text-[14px] sm:text-[16px] mt-3">
                                200 <span className="text-secondary font-light">Treasure</span>
                            </h3>
                        </div>
                        <div className="text-left">
                            <img className="w-[32px] h-[32px]" src="/assets/icons/ic_cities1.png" alt="Cities Icon" />
                            <h3 className="text-primary-dark font-medium text-[14px] sm:text-[16px] mt-3">
                                100 <span className="text-secondary font-light">Cities</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative mt-[50px] md:mt-[120px]  2xl:mr-[150px]">
                    {/* Image */}
                    <div className="relative z-10">
                        <img
                            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[559px] rounded-tl-[40px] sm:rounded-tl-[80px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px]"
                            src="/assets/home-image.png"
                            alt="Home"
                        />
                    </div>
                    {/* Border */}
                    <div
                        className="absolute top-[15px] left-[15px] sm:top-[25px] sm:left-[25px] md:top-[40px] md:left-[40px] w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[559px] h-full border-[2px] border-neutral rounded-tl-[40px] sm:rounded-tl-[80px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] z-0"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;





