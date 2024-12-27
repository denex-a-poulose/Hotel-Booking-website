
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 h-[10vh] max-h-[80px]">
                {/* Logo */}
                <div className="text-primary-blue 2xl:ml-[150px] text-[20px] md:text-[24px] lg:text-[26px] font-[500] font-poppins">
                    Lanka<span className="text-primary-dark">Stay</span>
                    <span className="text-gray-800">.</span>
                </div>

                {/* Hamburger Menu for Mobile and Tablets */}
                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary-dark focus:outline-none text-2xl"
                    >
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:space-x-4 lg:space-x-6 text-[14px] lg:text-[16px] text-primary-dark">
                    {[
                        { name: "Home", href: "#home" },
                        { name: "Hotels", href: "#hotels" },
                        { name: "Rooms", href: "#rooms" },
                        { name: "About", href: "#about" },
                        { name: "Contact", href: "#contact" },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-primary-blue transition duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Login Button */}
                <button className="hidden 2xl:mr-[150px] md:inline-block bg-primary-blue text-white py-2 px-4 lg:px-6 text-[14px] md:text-[20px] rounded-lg font-[500] shadow-lg">
                    Login
                </button>
            </div>

            {/* Mobile & Tablet Navigation */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-6 shadow-lg">
                    {/* Logo */}
                    <div className="text-primary-blue text-[24px] font-medium font-poppins">
                        Lanka<span className="text-primary-dark">Stay</span>
                        <span className="text-gray-800">.</span>
                    </div>
                    {/* Close Button */}
                    <button
                        onClick={handleMenuClose}
                        className="text-primary-dark text-2xl focus:outline-none"
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-start space-y-6 mt-10 px-6 text-[18px] text-primary-dark">
                    {[
                        { name: "Home", href: "#home" },
                        { name: "Hotels", href: "#hotels" },
                        { name: "Rooms", href: "#rooms" },
                        { name: "About", href: "#about" },
                        { name: "Contact", href: "#contact" },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleMenuClose}
                            className="hover:text-primary-blue transition duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Login Button */}
                <div className="px-6 mt-10">
                    <button
                        onClick={handleMenuClose}
                        className="bg-primary-blue text-white w-full py-3 text-[16px] rounded-lg font-medium"
                    >
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
