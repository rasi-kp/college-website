import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'

const routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/signup" element={<Signup />}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default routes;