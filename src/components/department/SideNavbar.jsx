import React from 'react';

function SideNavbar() {
  return (
    <div className="static left-0 top-0 w-64 bg-white h-[calc(100vh - 18.3rem)]">
      <nav className="flex flex-col h-full">
        <div className="flex items-center p-4">
          {/* Your logo or branding here */}
        </div>
        <ul className="flex flex-col gap-2 p-4">
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Profile
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Faculty
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Programs
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Syllabus
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Results
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Activities
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Student Projects
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              Facilities
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="block bg-white text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              MoUs
            </a>
          </li>
          {/* Add other links with button-like styling */}
        </ul>
      </nav>
    </div>
  );
}

export default SideNavbar;
