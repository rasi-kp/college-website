import React, { useState } from 'react';

const Nav = () => {
    let Links = [
        { name: "About", link: "/", subMenu: ["St. Thomas Mattannur", "St. Thomas Chengannur", "Management", "Chairman", "Principal", "PTA", "BOG"] },
        {
            name: "Department", link: "/", subMenu: ["Civil Engineering", "Computer Science and Engineering", "Computer Science and Engineering (Data Science)", "Mechanical Engineering", "Electronics and Communication Engineering", "Applied Science and Humanities"]
        },
        { name: "Accreditation", link: "/", subMenu: ["AICTE APPROVAL", "KTU AFFILIATION", "NAAC"] },
        { name: "Admission", link: "/", subMenu: [" Admission Details ", "Apply Online"] },
        { name: "Activities", link: "/", subMenu: [" Extra Curricular Activities ", "Co Curricular Activities "] },
        { name: "Facility", link: "/", subMenu: ["Library ", "Computer Centre", "Language Lab", "Cafeteria", "Transportation", "Hostel"] },
        { name: "Placement", link: "/" },
        {
            name: "More", link: "/", subMenu: [" AICTE Feedback Portal ", " Careers ", " Gallery ", " YouTube Channel ", " IQAC ", " Counselling Cell ", " Grievance Redressal ", "Templates", "Notice Board", "Contact us"]
        },
    ];

    let [open, setOpen] = useState(false);
    let [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = (item) => {
        alert(`You clicked on ${item}`);
    };

    return (
        <div className='shadow-lg w-full fixed top-0 left-0'>
            <div className='lg:flex  bg-white py-4 lg:px-10 px-7 items-center justify-between'>
                <div className='  font-bold text-2xl cursor-pointer flex items-center font-[Popins] text-gray-800'>
                    <span className='text-3xl text-indigo-600  mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    STM
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute top-6 cursor-pointer lg:hidden right-8'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] lg:opacity-100 opacity-0'}`}>
                    {Links.map((Link) => (
                        <li
                            key={Link.name}
                            className='  lg:mr-6 pr-1 text-base lg:my-0 my-7 flex items-center border border-transparent hover:bg-indigo-600 rounded font-bold p-1 duration-500 relative '
                            onMouseEnter={() => Link.subMenu && setDropdownOpen(Link.name)}
                            onMouseLeave={() => Link.subMenu && setDropdownOpen(false)}
                        >
                            <a href={Link.link} className='text-gray-800 hover:text-white duration-500'>{Link.name}</a>
                            {Link.subMenu && dropdownOpen === Link.name && (
                                // This section is hidden on small and medium devices (below lg breakpoint)
                                <ul className='hidden lg:block absolute top-10 bg-white shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out'>
                                    {Link.subMenu.map((subItem, index) => (
                                        <li key={index} className='px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out' onClick={() => handleDropdownClick(subItem)}>
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
