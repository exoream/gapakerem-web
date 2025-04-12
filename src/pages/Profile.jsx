import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Loading from '../component/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [showConfirmLogout, setShowConfirmLogout] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');

        setLoading(true);
        axios.get('https://gapakerem.vercel.app/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setProfile(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error fetching data:", error);
                alert(error.response.data.message);
                setErrorMessage(error.response.data.message);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            });
    }, []);

    const handleLogoutConfirm = () => {
        Cookies.remove('token');
        navigate('/login');
    };


    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-[#FFC100] mb-8">
                        Profile
                    </h1>

                    <div className="mb-5">
                        <label className="font-medium text-gray-500">Username</label>
                        <input
                            type="text"
                            value={profile.username}
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="font-medium text-gray-500">Nama</label>
                        <input
                            type="text"
                            value={profile.name}
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="font-medium text-gray-500">Email</label>
                        <input
                            type="email"
                            value={profile.email}
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="font-medium text-gray-500">No HP</label>
                        <input
                            type="number"
                            value={profile.number}
                            readOnly
                            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <button
                            className="bg-[#FFC100] hover:bg-yellow-400 text-white py-2 px-4 rounded-full"
                        >
                            <Link to="/updateprofile">

                                Update Profile
                            </Link>
                        </button>

                        <button
                            className="bg-[#FFC100] hover:bg-yellow-400 text-white py-2 px-4 rounded-full"
                        >
                            <Link to="/updatepassword">
                                Ganti Password
                            </Link>
                        </button>

                        <button
                            onClick={() => setShowConfirmLogout(true)}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
                    {errorMessage}
                </div>
            )}

            {showConfirmLogout && (
                <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 w-72">
                    <h2 className="text-base font-semibold mb-3 text-gray-800">Yakin ingin logout?</h2>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handleLogoutConfirm}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm"
                        >
                            Ya
                        </button>
                        <button
                            onClick={() => setShowConfirmLogout(false)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded text-sm"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile;
