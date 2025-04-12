import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const [input, setInput] = useState({
        old_password: "",
        new_password: "",

    });
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        setLoading(true);

        const token = Cookies.get('token');

        let { old_password, new_password } = input;

        axios.patch(`https://gapakerem.vercel.app/profile`,
            { old_password, new_password },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
            .then((res) => {
                alert("Berhasil Update Password");
                navigate('/profile');
            })
            .catch((error) => {
                console.error("Error :", error.response);
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
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <form className="w-full max-w-md" onSubmit={handleUpdate}>
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
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex flex-col items-center mt-4">
                        <label className="font-medium text-gray-500 self-start mb-2">Password Baru</label>
                        <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            className="border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex justify-center mt-20">
                        <button
                            className="w-full bg-[#FFC100] hover:bg-yellow-400 text-white py-2 px-4 rounded-full"
                            disabled={loading}
                        >
                            Submit
                        </button>
                    </div>

                    {loading && (
                        <div className="flex justify-center items-center mt-10">
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 border-4 border-[#FFC100] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default UpdateProfile;
