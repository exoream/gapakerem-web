import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const UpdateProfile = () => {
    const [profile, setProfile] = useState({ name: '' });
    const [photoProfile, setPhotoProfile] = useState(null);

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg border border-gray-300 rounded-lg p-10 bg-white">
                <form className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-[#FFC100] mb-8">
                        Profile
                    </h1>

                    <div className="mb-5 flex flex-col items-center">
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
                                />
                                <FontAwesomeIcon icon={faPen} className="text-sm" />
                            </label>
                        </div>

                        <label className="font-medium text-gray-500 self-start mb-2">Nama</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="mb-6 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                        />
                    </div>

                    <div className="flex justify-center mt-8">
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
