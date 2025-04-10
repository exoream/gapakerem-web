import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import { Link } from 'react-router-dom';

const Trip = () => {
    const [openTrip, setOpenTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setLoading(true);
        axios.get('https://gapakerem.vercel.app/trips/open?page=1')
            .then((response) => {
                setOpenTrip(response.data.data.trips);
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

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='px-60 py-10'>
            <h1 className='text-center text-[#FFC100] text-5xl font-bold py-20'>Daftar Trip</h1>

            <div>
                <div>
                    <h1 className='text-3xl mb-4 inline-block bg-orange-200 rounded-lg px-2'>
                        <span className='text-[#FFC100]'>Open</span> Trip
                    </h1>
                    <p>Pendakian bersama grup terbuka, dengan jadwal dan rute yang sudah ditentukan.</p>
                </div>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    {openTrip.length > 0 ? (
                        openTrip.map((trip, index) => (
                            <Link
                                to={`/trip/${trip.mountain_name}`}
                                state={{ trip }}
                            >
                                <div key={index} className='border-2 border-gray-300 rounded-lg'>
                                    <img src={trip.mountain_photo} alt={trip.mountain_name} className='h-60 w-full object-cover' />
                                    <div className='p-4'>
                                        <h2 className='text-xl font-bold text-[#FFC100] mb-2'>{trip.mountain_name}</h2>
                                        <p className='font-bold'>Rp {trip.price.toLocaleString('id-ID')}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className='col-span-3 text-center text-gray-500'>Belum ada trip tersedia</p>
                    )}
                </div>
            </div>

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default Trip