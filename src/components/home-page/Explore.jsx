
import React from 'react';

const Explore = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-[150px] mt-[150px]">
            <h1 className="text-primary-dark text-[24px] font-medium mb-6 text-center sm:text-left">Most Picked</h1>

            {/* Cards -----------------   section 2 */}
            <div className="my-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-8 sm:gap-6">
                {/* Left Image */}
                <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4">
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src="/assets/explore-images/pic1.png"
                        alt="Most Picked"
                    />
                </div>

                {/* Right Images */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 sm:w-2/3 lg:w-3/4">
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src="/assets/explore-images/pic2.png"
                        alt="Picked Option"
                    />
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src="/assets/explore-images/pic3.png"
                        alt="Picked Option"
                    />
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src="/assets/explore-images/pic4.png"
                        alt="Picked Option"
                    />
                    <img
                        className="w-full h-auto object-cover rounded-md shadow-lg"
                        src="/assets/explore-images/pic5.png"
                        alt="Picked Option"
                    />
                </div>
            </div>



            {/* section 2 */}
            <div className="flex flex-col sm:flex-row gap-4 mt-[120px] px-4">
                <div className="flex flex-col items-start max-w-[300px] w-full mb-8">
                    <img
                        className="w-full rounded-[15px] object-cover"
                        src="/assets/explore-images/pic6.png"
                        alt="Shangri-La"
                    />
                    <h3 className="text-[20px] font-[400] mt-2">Shangri-La</h3>
                    <p className="text-[15px] font-[300] text-secondary">Colombo, Sri Lanka</p>
                </div>
                <div className="flex flex-col items-start max-w-[300px] w-full mb-8">
                    <img
                        className="w-full rounded-[15px] object-cover"
                        src="/assets/explore-images/pic7.png"
                        alt="Top View"
                    />
                    <h3 className="text-[20px] font-[400] mt-2">Top View</h3>
                    <p className="text-[15px] font-[300] text-secondary">Hikkaduwe, Sri Lanka</p>
                </div>
                <div className="flex flex-col items-start max-w-[300px] w-full mb-8">
                    <img
                        className="w-full rounded-[15px] object-cover"
                        src="/assets/explore-images/pic8.png"
                        alt="Green Villa"
                    />
                    <h3 className="text-[20px] font-[400] mt-2">Green Villa</h3>
                    <p className="text-[15px] font-[300] text-secondary">Kandy, Sri Lanka</p>
                </div>
                <div className="flex flex-col items-start max-w-[300px] w-full mb-8">
                    <img
                        className="w-full rounded-[15px] object-cover"
                        src="/assets/explore-images/pic9.png"
                        alt="Wooden Pit"
                    />
                    <h3 className="text-[20px] font-[400] mt-2">Wooden Pit</h3>
                    <p className="text-[15px] font-[300] text-secondary">Ambalangode, Sri Lanka</p>
                </div>
            </div>

            {/* section 3 */}
            <div className='mt-14 border-t-[1px] border-neutral flex flex-col md:flex-row justify-between mb-14'>
                <div className="text-primary-blue mt-[50px]  text-[20px] md:text-[24px] lg:text-[26px] font-[500] font-poppins">
                    Lanka<span className="text-primary-dark">Stay</span>
                    <span className="text-gray-800">.</span>
                    <h4 className='text-[16px] font-[300] text-secondary mt-2'>We kaboom your beauty holiday <br /> instantly and memorable.</h4>
                </div>

                <div className='mt-[50px]'>
                    <h1 className='text-[18px] font-[500] text-primary-dark'>Become hotel Owner</h1>
                    <button className="2xl:mr-[150px] bg-primary-blue mt-2 text-white py-2 px-4 lg:px-6 text-[14px]  rounded-lg font-[500] shadow-lg">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Explore;
