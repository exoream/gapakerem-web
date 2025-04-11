import { Route, Routes } from "react-router-dom";
import React from 'react'
import LandingPage from "../pages/LandingPage";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutUs from "../pages/AboutUs";
import Trip from "../pages/Trip";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/profile";
import TripDetail from "../pages/TripDetail";
import Book from "../pages/Book";

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
                <Route path="daftartrip" element={
                    <>
                        <Navbar />
                        <Trip />
                        <Footer />
                    </>
                }
                />
                <Route path="/trip/:mountain_name" element={
                    <>
                        <Navbar />
                        <TripDetail />
                        <Footer />
                    </>
                } />
                <Route path="login" element={
                    <>
                        <Login />
                    </>
                }
                />
                <Route path="register" element={
                    <>
                        <Register />
                    </>
                }
                />
                <Route path="profile" element={
                    <>
                        <Navbar />
                        <Profile />
                        <Footer />
                    </>
                }
                />
                <Route path="bookings" element={
                    <>
                        <Navbar />
                        <Book />
                        <Footer />
                    </>
                }
                />
            </Routes>
        </>
    )
}

export default AppRoutes