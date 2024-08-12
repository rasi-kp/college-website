import React from 'react'

function DepartmentNavbar() {
  return (
    <nav className="bg-white text-white">
      <ul className="flex justify-evenly py-4">
        <li>
          <a 
            href="#" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            Overview
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            Department Profile
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            Vision and Mission
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            Our Goals
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
          >
            POS, PSOS, PEOS, COS
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default DepartmentNavbar
