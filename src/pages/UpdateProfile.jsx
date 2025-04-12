import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({ name: '' });
    const [photoProfile, setPhotoProfile] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData();
        formData.append('photo', photoProfile);
        formData.append('name', profile.name);

        const token = Cookies.get('token');

        axios.put(`https://gapakerem.vercel.app/profile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => {
                setLoading(false);
                alert("Berhasil Update Profile");
                navigate('/profile');
            })
            .catch((error) => {
                console.error("Error :", error);
                setErrorMessage(error.response.data.message);
                setError(true);
                setLoading(false);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            });
    };


    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <form className="w-full max-w-md" onSubmit={handleUpdate}>
                    <h1 className="text-3xl font-bold text-[#FFC100]">
                        Update Profile
                    </h1>

                    <div className="mt-10 flex flex-col items-center">
                        <div className="relative w-32 h-32 mb-4">
                            <img
                                src={
                                    photoProfile
                                        ? URL.createObjectURL(photoProfile)
                                        : '/default-profile.png'
                                }
                                className="w-full h-full object-cover rounded-full border border-gray-300"
                            />

                            <label className="absolute bottom-0 right-0 bg-[#FFC100] text-white w-6 h-6 flex items-center justify-center rounded-full cursor-pointer hover:bg-yellow-400 transition">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setPhotoProfile(e.target.files[0])}
                                    className="hidden"
                                    disabled={loading}
                                />
                                <FontAwesomeIcon icon={faPen} className="text-sm" />
                            </label>
                        </div>

                        <label className="mt-5 font-medium text-gray-500 self-start">Nama</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
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
