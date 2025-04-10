import { React } from 'react';

const Profile = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-[#FFC100] mb-8">
                        Profile
                    </h1>

                    <div className="mb-5">
                        <label htmlFor="username" className="font-medium text-gray-500">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="name" className="font-medium text-gray-500">
                            Nama
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="font-medium text-gray-500">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="number" className="font-medium text-gray-500">
                            Nomor HP
                        </label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
