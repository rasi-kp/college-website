import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMegaDep, setisMegaDep] = useState(false)
    const [isMegaAbout, setisMegaAbout] = useState(false)
    const [isMegaAcc, setisMegaAcc] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="/" className="flex items-center space-x-3o rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">STM</span>
                </a>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 ">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block w-full' : 'hidden'}`} >
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-10 rtl:space-x-reverse ">
                        <li>
                            <button
                                onMouseEnter={() => setisMegaAbout(true)}
                                onMouseLeave={() => setisMegaAbout(false)}
                                className="text-1xl flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className={`md:absolute z-10 grid grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaAbout ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                St Thomas mattannur
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Library</span>

                                                St Thomas Changannur
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">

                                                Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                Chairman
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                Principal
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                Pta
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                BOG
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                MandatoryDisclosure
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>

                                                Committieeeeeeeeeeees
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>
                        
                        <li>
                            <button
                                onMouseEnter={() => setisMegaAcc(true)}
                                onMouseLeave={() => setisMegaAcc(false)}
                                className="text-1xl flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Accriditation
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`md:absolute z-10 grid grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaAcc ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                CSE
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Library</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                                                    <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                                                    <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                                                </svg>
                                                ECE
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Resources</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                    <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 .781-1H2.268L4.11 2h9.78l1.841 6h-2.952a2.99 2.99 0 0 1 .78 1h4.24l-1.822-8.217ZM12 14.5c0 .825-.675 1.5-1.5 1.5h-3c-.825 0-1.5-.675-1.5-1.5S6.675 13 7.5 13h3c.825 0 1.5.675 1.5 1.5ZM10.5 11h-3C6.675 11 6 10.325 6 9.5S6.675 8 7.5 8h3c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5Zm0-5h-3C6.675 6 6 5.325 6 4.5S6.675 3 7.5 3h3C11.325 3 12 3.675 12 4.5S11.325 6 10.5 6Z" />
                                                </svg>
                                                ME
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                CE
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <button
                                onMouseEnter={() => setisMegaDep(true)}
                                onMouseLeave={() => setisMegaDep(false)}
                                className="text-1xl flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Departments
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`md:absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaDep ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">

                                                <span className="sr-only">About us</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Library</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                                                    <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                                                    <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                                                </svg>
                                                Library
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">Resources</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                    <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 .781-1H2.268L4.11 2h9.78l1.841 6h-2.952a2.99 2.99 0 0 1 .78 1h4.24l-1.822-8.217ZM12 14.5c0 .825-.675 1.5-1.5 1.5h-3c-.825 0-1.5-.675-1.5-1.5S6.675 13 7.5 13h3c.825 0 1.5.675 1.5 1.5ZM10.5 11h-3C6.675 11 6 10.325 6 9.5S6.675 8 7.5 8h3c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5Zm0-5h-3C6.675 6 6 5.325 6 4.5S6.675 3 7.5 3h3C11.325 3 12 3.675 12 4.5S11.325 6 10.5 6Z" />
                                                </svg>
                                                Resources
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                <span className="sr-only">About us</span>
                                                <svg className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                </svg>
                                                About Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="text-1xl block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Facilities</a>
                        </li>

                        <li>
                            <a href="#" className="text-1xl block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Placement</a>
                        </li>
                        <li>
                            <a href="#" className="text-1xl block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Admission</a>
                        </li>
                        <li>
                            <a href="#" className="text-1xl block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
