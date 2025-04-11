import { React, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';

const TripDetail = () => {
    const location = useLocation();
    const { id } = location.state;
    const [trip, setTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (error) return
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
            {errorMessage}
        </div>

        setLoading(true);
        axios.get(`https://gapakerem.vercel.app/trips/${id}`)
            .then((response) => {
                setTrip(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                alert(error.response.data.message);
                setErrorMessage(error.response.data.message);
                setTrip(response.data.data.trips);
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Loading />;

    return (
        <div className='mx-60 my-10 p-10 border-2 rounded-lg border-gray-300'>
            <h1 className='text-3xl text-[#FFC100] text-center'>{trip.mountain_name}</h1>
            <div className="flex justify-center items-center mt-10">
                <div className="w-1/3">
                    <img src={trip.mountain_photo} alt={trip.mountain_name} className='h-50 w-50 rounded-lg' />
                </div>
                <div className="w-2/3">
                    <div className="flex gap-20">
                        <h4 className='text-lg font-bold'>Rp {trip.price.toLocaleString('id-ID')}</h4>
                        <h4 className='text-gray-500 capitalize'>{trip.trip_type} Trip</h4>
                    </div>
                    <p className="mt-5">
                        Gunung Bulu Baria adalah salah satu destinasi pendakian populer di Sulawesi Selatan. Dengan pemandangan alam yang memukau dan jalur pendakian
                        yang menantang, gunung ini menawarkan pengalaman yang tak terlupakan bagi para pecinta alam. Memiliki ketinggian sekitar 1.415 meter di atas
                        permukaan laut, pendakian ke puncaknya menyuguhkan panorama luas dari puncak gunung, hamparan hutan tropis, dan udara segar yang menyegarkan.
                        Gunung Bulu Baria cocok bagi pendaki yang mencari tantangan serta keindahan alam yang mempesona.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-50">
                <div className="mt-10">
                    <h2 className="text-lg font-bold mb-4 text-center">Guide</h2>
                    <div className="flex flex-col items-center">
                        <img src={trip.guide.photo} alt={trip.guide.name} className="w-20 h-20 rounded-full object-cover" />
                        <p className="mt-2 text-center">{trip.guide.name}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-lg font-bold mb-4 text-center">Porters</h2>
                    <div className="grid grid-cols-2 gap-2">
                        {trip.porters?.map((porter, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={porter.photo} alt={porter.name} className="w-20 h-20 rounded-full object-cover" />
                                <p className="mt-2 text-center">{porter.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetail;