import { React } from 'react';

const UpdateProfile = () => {

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <form className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-[#FFC100]">
                        Update Password
                    </h1>

                    <div className="flex flex-col items-center mt-10">
                        <label className="font-medium text-gray-500 self-start mb-2">Password Lama</label>
                        <input
                            type="password"
                            name="old_password"
                            id="old_password"
                            className="border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="flex flex-col items-center mt-4">
                        <label className="font-medium text-gray-500 self-start mb-2">Password Baru</label>
                        <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            className="border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="flex justify-center mt-20">
                        <button
                            className="w-full bg-[#FFC100] hover:bg-yellow-400 text-white py-2 px-4 rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;
