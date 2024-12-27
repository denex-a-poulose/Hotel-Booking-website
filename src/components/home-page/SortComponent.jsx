import React from 'react';

const SortComponent = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-[150px] mt-[150px]">
            <div className="mx-4 h-auto w-auto bg-sky px-6 py-8 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-between rounded-[42px] mb-[60px] gap-4">
                <div className="bg-white rounded-[12px] px-4 sm:px-6 lg:px-8 py-4 drop-shadow-xl flex justify-center items-center w-full sm:w-auto">
                    <img
                        src="/assets/icons/Frame.svg"
                        alt="icon"
                        className="w-[24px] h-[24px] mr-2"
                    />
                    <button className="text-[14px] sm:text-[16px] font-[600]">Check Available</button>
                </div>

                <div className="bg-white rounded-[12px] px-4 sm:px-6 lg:px-8 py-4 drop-shadow-xl flex justify-center items-center w-full sm:w-auto">
                    <img
                        src="/assets/icons/Vector.svg"
                        alt="icon"
                        className="w-[24px] h-[24px] mr-2"
                    />
                    <button className="text-[14px] sm:text-[16px] font-[600]">Person 2 -</button>
                </div>

                <div className="bg-white rounded-[12px] px-4 sm:px-6 lg:px-8 py-4 drop-shadow-xl flex justify-center items-center w-full sm:w-auto">
                    <img
                        src="/assets/icons/add_location_alt.svg"
                        alt="icon"
                        className="w-[24px] h-[24px] mr-2"
                    />
                    <button className="text-[14px] sm:text-[16px] font-[600]">Select Location</button>
                </div>

                <div className="bg-primary-blue rounded-[12px] px-4 sm:px-6 lg:px-8 py-4 drop-shadow-lg shadow-xl flex justify-center items-center w-full sm:w-auto">
                    <button className="text-white text-[14px] sm:text-[16px] font-[600] ">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SortComponent;
