import { Route, Routes } from "react-router-dom";
import React from 'react'
import LandingPage from "../pages/LandingPage";
import Navbar from "../component/Navbar";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={
                    <>
                        <Navbar />
                        <LandingPage />
                    </>
                }
                />
            </Routes>
        </>
    )
}

export default AppRoutes