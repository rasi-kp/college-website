import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'
import CsePage from './pages/CsePage';
import DataSciencePage from './pages/DataSciencePage';
import CivilPage from './pages/CivilPage';
import MechanicalPage from './pages/MechanicalPage';
import ElectronicsPage from './pages/ElectronicsPage';

const routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/signup" element={<Signup />}/> */}
                    <Route path='/cse' element={<CsePage/>}/>
                    <Route path='/datascience' element={<DataSciencePage/>}/>
                    <Route path='/civil' element={<CivilPage/>}/>
                    <Route path='/mechanical' element={<MechanicalPage/>}/>
                    <Route path='/electronics' element={<ElectronicsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default routes;