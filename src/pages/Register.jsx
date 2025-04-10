import React, { useState } from 'react';

const Register = () => {

    const [input, setInput] = useState({
        username: "",
        name: "",
        email: "",
        number: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <form className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-[#FFC100] mb-8">
                        Daftar Akun
                    </h1>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="username" className="font-medium text-gray-500">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.username}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="name" className="font-medium text-gray-500">
                            Nama
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.name}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="email" className="font-medium text-gray-500">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.email}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="number" className="font-medium text-gray-500">
                            Nomor HP
                        </label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.number}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="password" className="font-medium text-gray-500">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="col-span-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.password}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#FFC100] mt-10 text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
