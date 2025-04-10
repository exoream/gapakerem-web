import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Logo from '../assets/logo.png'
import Background from '../assets/bgmount3.png'
import Icon1 from '../assets/mount.png'

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);

        let { username, password } = input;
        axios.post(`https://gapakerem.vercel.app/login`, { username, password })
            .then((res) => {
                let token = res.data.data.token;
                Cookies.set('token', token, { expires: 1 });
                navigate('/');
            })
            .catch((error) => {
                console.error("Error Response:", error.response);
                setErrorMessage(error.response.data.message);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="flex h-screen w-screen">
            <div className="flex-1 bg-[#FFC100] flex items-end justify-center relative overflow-hidden h-screen">
                <div className="w-full h-1/2 relative">
                    <img
                        src={Background}
                        alt="background"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />
                </div>
                <img
                    src={Logo}
                    alt="Logo"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-52"
                />
            </div>

            <div className="flex-1 flex items-center justify-center p-5">
                <form className="w-full max-w-md" onSubmit={handleLogin}>
                    <div className="relative">
                        <img
                            src={Icon1}
                            className='h-20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25'
                        />

                        <h1 className="text-3xl font-bold text-[#FFC100] mb-8">
                            Selamat Datang, Petualang!
                        </h1>
                    </div>

                    <p className="text-gray-400 mb-10">
                        Login untuk memulai perjalanan ke puncak impian Anda.
                    </p>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="email" className="font-medium text-gray-500">
                            Email
                        </label>
                        <input
                            type="username"
                            name="username"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.email}
                            disabled={loading}
                        />
                    </div>

                    <div className="mb-8 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="password" className="font-medium text-gray-500">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.password}
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#FFC100] text-white py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-200"
                        disabled={loading}
                    >
                        Login
                    </button>

                    {loading && (
                        <div className="flex justify-center items-center mt-10">
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 border-4 border-[#FFC100] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-center mt-20">
                        <img src={Icon1} alt="icon" className="h-10" />
                        <img src={Icon1} alt="icon" className="h-10" />
                        <img src={Icon1} alt="icon" className="h-10" />
                    </div>
                </form>
            </div>

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg z-50">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default Login;
