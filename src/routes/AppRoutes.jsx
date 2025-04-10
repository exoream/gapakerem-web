import { Route, Routes } from "react-router-dom";
import React from 'react'
import LandingPage from "../pages/LandingPage";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={
                    <>
                        <Navbar />
                        <LandingPage />
                        <Footer />
                    </>
                }
                />
                <Route path="tentangkami" element={
                    <>
                        <Navbar />
                        <AboutUs />
                        <Footer />
                    </>
                }
                />
            </Routes>
        </>
    )
}

export default AppRoutes