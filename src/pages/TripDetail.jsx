import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import Cookies from 'js-cookie';

const TripDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [trip, setTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingBook, setLoadingBook] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [input, setInput] = useState({
        total_participant: "",
        name_participant: "",
        no_hp: "",
        meeting_point: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleBook = (event) => {
        event.preventDefault();

        const token = Cookies.get('token');

        if (!token) {
            alert("Silakan login terlebih dahulu");
            return;
        }

        setLoadingBook(true);

        const { total_participant, name_participant, no_hp, meeting_point } = input;

        axios.post(
            `https://gapakerem.vercel.app/bookings/${trip.trip_type}`,
            {
                id_trip: id,
                total_participants: Number(total_participant),
                name_participants: name_participant,
                no_hp: no_hp,
                meeting_point: meeting_point,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => {
                alert("Booking Berhasil");
                navigate('/');
            })
            .catch((error) => {
                console.error("Error Response:", error.response);
                setErrorMessage(error.response.data.message);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            })
            .finally(() => {
                setLoadingBook(false);
            });
    };


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
                setErrorMessage(error.response.data.message);
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
            <div className='mt-10 h-2 w-full bg-[#FFC100] rounded-lg' />
            <div className="mt-10">
                <form onSubmit={handleBook}>
                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="total_participant" className="font-medium text-gray-500">
                            Jumlah Orang
                        </label>
                        <input
                            type="number"
                            name="total_participant"
                            id="total_participant"
                            className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.total_participant}
                            disabled={loading}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="name_participant" className="font-medium text-gray-500">
                            Nama Peserta
                        </label>
                        <textarea
                            name="name_participant"
                            id="name_participant"
                            className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.name_participant}
                            disabled={loading}
                            rows={3}
                        />
                    </div>


                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="no_hp" className="font-medium text-gray-500">
                            No. HP
                        </label>
                        <input
                            type="text"
                            name="no_hp"
                            id="no_hp"
                            className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.no_hp}
                            disabled={loading}
                        />
                    </div>

                    <div className="mb-5 grid grid-cols-3 items-center gap-4">
                        <label htmlFor="meeting_point" className="font-medium text-gray-500">
                            Meeting Point
                        </label>
                        <select
                            name="meeting_point"
                            id="meeting_point"
                            className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                            onChange={handleChange}
                            value={input.meeting_point}
                            disabled={loading}
                        >
                            <option value="">Pilih Meeting Point</option>
                            <option value="Basecamp">Basecamp</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/3 bg-[#FFC100] mt-10 text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
                            disabled={loading}
                        >
                            Daftar
                        </button>
                    </div>

                    {loadingBook && (
                        <div className="flex justify-center items-center mt-10">
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 border-4 border-[#FFC100] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default TripDetail;