import React from 'react';
import Navbar from '../components/common/navbar';
import DepartmentNavbar from '../components/department/DepartmentNavbar';
import SideNavbar from '../components/department/SideNavbar';

function CsePage() {
  return (
    <div>
      {/* Main Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-red-400 py-4 h-[150px] w-full">
        <div className="container mx-auto p-4 h-full">
          <h2 className="text-lg font-bold">Department of Computer Science and Engineering</h2>
        </div>
      </div>

      {/* Flex Container for Sidebar and Department Navbar */}
      <div className="flex">
        {/* Side Navbar */}
        <div className="w-64">
          <SideNavbar />
        </div>

        {/* Right Section containing Department Navbar and Content */}
        <div className="flex-1">
          <div className="sticky top-0">
            <DepartmentNavbar />
          </div>

          {/* Main Content Area */}
          <div className="p-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              {/* Add more content here to demonstrate scrolling */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsePage;
