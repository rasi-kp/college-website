import React from 'react'
import Navbar from '../components/common/navbar'
import DepartmentNavbar from '../components/department/DepartmentNavbar'

function CivilPage() {
  return (
    <div>
      <Navbar/>
      <div className="bg-red-400 py-4 h-[150px] w-full">
        <div className="container mx-auto p-4 h-full">
            <h2 className="text-lg font-bold">Department of Civil Engineering</h2>
        </div>
       </div>
      <DepartmentNavbar/>
      
    </div>
  )
}

export default CivilPage
