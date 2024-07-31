import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMegaMenu = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-base px-3 py-2 md:px-4 md:py-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-3 py-2 md:px-4 md:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-9 h-9 md:w-10 md:h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 font-medium space-y-1 rtl:space-x-reverse">
                        <li>
                            <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500">Home</a>
                        </li>
                        <li>
                            <button
                                onClick={toggleMegaMenu}
                                className="flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
                            >
                                Company
                                <svg className="w-2.5 h-2.5 ml-2 md:ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className={`w-full ${isMegaMenuOpen ? 'block' : 'hidden'}`}>
                                <ul className="p-4 space-y-4 text-gray-900 bg-white dark:text-white dark:bg-gray-700">
                                    <li>
                                        <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            <span className="sr-only">About us</span>
                                            <svg className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                            </svg>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            <span className="sr-only">Library</span>
                                            <svg className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                                                <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                                                <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                                            </svg>
                                            Library
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            <span className="sr-only">Resources</span>
                                            <svg className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M15.561 1.561a5.315 5.315 0 0 0-7.472 0l-.707.707-.707-.707a5.317 5.317 0 0 0-7.472 7.472l7.472 7.472a.998.998 0 0 0 1.414 0l7.472-7.472a5.315 5.315 0 0 0 0-7.472ZM6.239 12.76 1.879 8.4a3.315 3.315 0 1 1 4.693-4.693l1.414 1.414a1 1 0 0 0 1.414 0l1.414-1.414a3.315 3.315 0 1 1 4.693 4.693l-4.36 4.36a1 1 0 0 0-1.414 0Z" />
                                            </svg>
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            <span className="sr-only">Pro Version</span>
                                            <svg className="w-3 h-3 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m10 .5-3.5 3H.5v12h19v-12h-6l-3.5-3ZM7 17.5H3v-4h4v4Zm5 0H8.5v-4H12v4Zm5 0h-4v-4h4v4Zm0-5H3.5v-5h14v5Zm0-6h-14v-3h2.5l3.5-3 3.5 3h2.5v3Z" />
                                                <path d="M15 12.5h2v-2h-2v2ZM13 8.5h-2v2h2v-2ZM9 8.5H7v2h2v-2ZM5 10.5H3v2h2v-2Z" />
                                            </svg>
                                            Pro Version
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700">Magazine</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700">Resources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
