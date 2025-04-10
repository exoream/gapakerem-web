import { Route, Routes } from "react-router-dom";
import React from 'react'
import LandingPage from "../pages/LandingPage";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

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
            </Routes>
        </>
    )
}

export default AppRoutes