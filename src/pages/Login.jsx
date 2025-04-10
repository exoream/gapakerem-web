import { React, useState } from 'react';
import Logo from '../assets/logo.png'
import Background from '../assets/bgmount3.png'
import Icon1 from '../assets/mount.png'

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
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
                <form className="w-full max-w-md">
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
                            type="email"
                            name="email"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.email}
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
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#FFC100] text-white py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-200"
                    >
                        Login
                    </button>

                    <div className="flex items-center justify-center mt-20">
                        <img src={Icon1} alt="icon" className="h-10" />
                        <img src={Icon1} alt="icon" className="h-10" />
                        <img src={Icon1} alt="icon" className="h-10" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
