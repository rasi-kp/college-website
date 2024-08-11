import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMegaDep, setisMegaDep] = useState(false)
    const [isMegaAbout, setisMegaAbout] = useState(false)
    const [isMegaAcc, setisMegaAcc] = useState(false)
    const [isMegaAdmission, setisMegaAdmission] = useState(false)
    const [isMegaFacility, setisMegaFacility] = useState(false)
    const [isMegaActivities, setisMegaActivities] = useState(false)
    const [isMegaMore, setisMegaMore] = useState(false)
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
                            <div className={`md:absolute z-10 grid  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaAbout ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                St Thomas mattannur
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
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
                                                Committiees
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
                                className="flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Department
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>


                            <div className={`md:absolute z-10 grid w-auto  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaDep ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Civil Engineering
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Computer Science and Engineering
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Computer Science and Engineering (Data Science)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Electronics and Communication Engineering
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Mechanical Engineering
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Applied Science and Humanities
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
                            <div className={`md:absolute z-10 grid  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaAcc ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                AICTE Approval
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                KTU Affiliation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                NAAC
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <button
                                onMouseEnter={() => setisMegaAdmission(true)}
                                onMouseLeave={() => setisMegaAdmission(false)}
                                className="text-1xl flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Admission
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`md:absolute z-10 grid w-auto  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaAdmission ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Admission Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Apply
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li>
                            <button
                                onMouseEnter={() => setisMegaActivities(true)}
                                onMouseLeave={() => setisMegaActivities(false)}
                                className="text-1xl flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Activities
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div className={`md:absolute z-10 grid w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaActivities ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Extra Curricular Activities
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Co Curricular Activities
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>



                        <li>
                            <button
                                onMouseEnter={() => setisMegaFacility(true)}
                                onMouseLeave={() => setisMegaFacility(false)}
                                className="flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Facility
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>


                            <div className={`md:absolute z-10 grid w-auto  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaFacility ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Library
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Computer Centre
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                language Lab
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Cafeteria
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Transportation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Hostal
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="text-1xl block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Placement</a>
                        </li>
                        <li>
                            <button
                                onMouseEnter={() => setisMegaMore(true)}
                                onMouseLeave={() => setisMegaMore(false)}
                                className="flex items-center justify-center w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                More
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>


                            <div className={`md:absolute z-10 grid w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 ${isMegaMore ? 'block' : 'hidden'}`}>
                                <div className="p-4 pb-0 text-gray-900 md:pb-4  dark:text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Notice Board
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                AICTE Feedback Portal
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Counselling Cell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Grievance Redressal
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center justify-start text-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Youtube Channel                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                                                Templates
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
