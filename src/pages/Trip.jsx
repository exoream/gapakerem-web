import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import { Link } from 'react-router-dom';

const Trip = () => {
    const [openTrip, setOpenTrip] = useState([]);
    const [privateTrip, setPrivateTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setLoading(true);
        axios.all([
            axios.get('https://gapakerem.vercel.app/trips/open?page=1'),
            axios.get('https://gapakerem.vercel.app/trips/private?page=1')
        ])
            .then(axios.spread((openRes, privateRes) => {
                setOpenTrip(openRes.data.data.trips);
                setPrivateTrip(privateRes.data.data.trips);
                setLoading(false);
            }))
            .catch((error) => {
                console.error("Error fetching data:", error);
                alert(error.response.data.message);
                setErrorMessage(error.response.data.message);
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;

    return (
        <div className='px-10 md:px-60 py-10'>
            <h1 className='text-center text-[#FFC100] text-5xl font-bold py-20'>Daftar Trip</h1>

            <div>
                <h1 className='text-3xl mb-4 inline-block bg-orange-200 rounded-lg px-2'>
                    <span className='text-[#FFC100]'>Open</span> Trip
                </h1>
                <p>Pendakian bersama grup terbuka, dengan jadwal dan rute yang sudah ditentukan.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {openTrip.length > 0 ? openTrip.map((trip, index) => (
                        <Link to={`/trip/${trip.mountain_name}`} key={index} className='border-2 border-gray-300 rounded-lg hover:scale-105 duration-300'>
                            <img src={trip.mountain_photo} alt={trip.mountain_name} className='w-full h-50 object-cover rounded-md' />
                            <div className="p-4 mt-2">
                                <h2 className='text-xl font-semibold text-[#FFC100]'>{trip.mountain_name}</h2>
                                <p className='font-bold'>Rp {trip.price.toLocaleString('id-ID')}</p>
                            </div>
                        </Link>
                    )) : <p className="text-gray-500">Tidak ada data trip tersedia.</p>}
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='text-3xl mb-4 inline-block bg-green-200 rounded-lg px-2'>
                    <span className='text-[#859F3D]'>Private</span> Trip
                </h1>
                <p>Pendakian eksklusif untuk grup, dengan kebebasan mengatur jadwal dan rute perjalanan.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {privateTrip.length > 0 ? privateTrip.map((trip, index) => (
                        <Link to={`/trip/${trip.mountain_name}`} key={index} className='border-2 border-gray-500 rounded-lg hover:scale-105 duration-300'>
                            <img src={trip.mountain_photo} alt={trip.mountain_name} className='w-full h-50 object-cover rounded-md' />
                            <div className="p-4 mt-2">
                                <h2 className='text-xl font-semibold text-[#859F3D]'>{trip.mountain_name}</h2>
                                <p className='font-bold'>Rp {trip.price.toLocaleString('id-ID')}</p>
                            </div>
                        </Link>
                    )) : <p className="text-gray-500">Tidak ada data trip tersedia.</p>}
                </div>
            </div>

            {error && <p className='text-red-500 text-center mt-10'>{errorMessage}</p>}
        </div>
    );
};

export default Trip;
