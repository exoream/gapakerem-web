import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import Testimoni from '../component/Testimoni2';

const TripDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;
    const [trip, setTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingBook, setLoadingBook] = useState(false);
    const [guides, setGuides] = useState([]);
    const [porters, setPorters] = useState([]);
    const [selectedPorters, setSelectedPorters] = useState([]);
    const [selectedTab, setSelectedTab] = useState("agenda");

    const [input, setInput] = useState({
        total_participant: "",
        name_participant: "",
        no_hp: "",
        meeting_point: "",
        // Private trip fields
        id_guide: "",
        total_days: "",
        start_date: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handlePorterSelection = (porterId) => {
        setSelectedPorters(prev => {
            if (prev.includes(porterId)) {
                return prev.filter(id => id !== porterId);
            } else {
                return [...prev, porterId];
            }
        });
    };

    const handleBook = (event) => {
        event.preventDefault();

        const token = Cookies.get('token');

        if (!token) {
            alert("Silakan login terlebih dahulu");
            return;
        }

        setLoadingBook(true);

        const { total_participant, name_participant, no_hp, meeting_point, id_guide, total_days, start_date } = input;

        let bookingData = {
            id_trip: id,
            total_participants: Number(total_participant),
            name_participants: name_participant,
            no_hp: no_hp,
            meeting_point: meeting_point,
        };

        if (trip.trip_type === "private") {
            bookingData.private_trip = {
                id_guide: Number(id_guide),
                total_days: Number(total_days),
                start_date: start_date,
                porters: selectedPorters
            };
        }

        axios.post(
            `https://gapakerem.vercel.app/bookings/${trip.trip_type}`,
            bookingData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => {
                toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                setTimeout(() => {
                    navigate('/');
                    window.scrollTo(0, 0);
                }, 3000);
            })
            .catch((error) => {
                console.error("Error :", error);
                toast.error(error.response.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });

                setLoading(false)
            })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        axios.all([
            axios.get(`https://gapakerem.vercel.app/trips/${id}`),
            axios.get('https://gapakerem.vercel.app/porters'),
            axios.get('https://gapakerem.vercel.app/guides')
        ])
            .then(axios.spread((tripRes, portersRes, guidesRes) => {
                setTrip(tripRes.data.data);
                setPorters(portersRes.data.data.porters);
                setGuides(guidesRes.data.data.guides);
                setLoading(false);
                console.log(tripRes)
            }))
            .catch((error) => {
                console.error("Error :", error);
                toast.error(error.response?.data?.message || 'Error fetching data', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (trip?.trip_type === "private") {
            setSelectedTab("equipment");
        }
    }, [trip?.trip_type]);

    if (loading) return <Loading />;

    return (
        <div className='mx-60 my-10 p-10 border-2 rounded-lg border-gray-300'>
            <h1 className='text-3xl text-[#FFC100] text-center'>{trip.mountain_name}</h1>
            <div className="flex justify-center items-center mt-10">
                <div className="w-1/3 flex justify-center items-center">
                    <img src={trip.mountain_photo} alt={trip.mountain_name} className='h-50 w-50 rounded-lg' />
                </div>
                <div className="w-2/3">
                    <div className="flex items-center gap-20">
                        <h4 className='text-lg font-bold'>Rp {trip.price.toLocaleString('id-ID')}</h4>
                        <h4
                            className={`capitalize px-2 py-1 rounded-md inline-block text-sm font-medium ${trip.trip_type === 'private'
                                ? 'bg-green-100 text-green-700'
                                : trip.trip_type === 'open'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            {trip.trip_type} Trip
                        </h4>
                        {trip.trip_type === "open" && (
                            <h4 className='text-sm text-gray-500'>{trip.traveling_time}</h4>
                        )}
                    </div>
                    <p className="mt-5 text-justify">
                        {trip.description}
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-50">
                {trip?.guide?.name && (
                    <div className="mt-10">
                        <h2 className="text-lg font-bold mb-4 text-center">Guide</h2>
                        <div className="flex flex-col items-center">
                            <img
                                src={trip.guide.photo}
                                alt={trip.guide.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <p className="mt-2 text-center text-sm">{trip.guide.name}</p>
                        </div>
                    </div>
                )}

                {trip.porters && trip.porters.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-lg font-bold mb-4 text-center">Porters</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {trip.porters.map((porter, index) => (
                                <div key={index} className="w-28 flex flex-col items-center">
                                    <img
                                        src={porter.photo}
                                        alt={porter.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="mt-2 text-center text-sm">{porter.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
                            required
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
                            required
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
                            required
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
                            required
                        >
                            <option value="">Pilih Meeting Point</option>
                            <option value="Basecamp Gunung">Basecamp Gunung</option>
                            <option value="Gapakerem Store">Gapakerem Store</option>
                        </select>
                    </div>

                    {trip.trip_type === "private" && (
                        <>
                            <div className="mb-5 grid grid-cols-3 items-center gap-4">
                                <label htmlFor="id_guide" className="font-medium text-gray-500">
                                    Pilih Guide
                                </label>
                                <select
                                    name="id_guide"
                                    id="id_guide"
                                    className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                                    onChange={handleChange}
                                    value={input.id_guide}
                                    disabled={loading}
                                    required
                                >
                                    <option value="">Pilih Guide</option>
                                    {
                                        Array.isArray(guides) && guides.length > 0 ? (
                                            guides.map(guide => (
                                                <option key={guide.id} value={guide.id}>
                                                    {guide.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>Tidak ada guide yang tersedia</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="mb-5 grid grid-cols-3 items-center gap-4">
                                <label htmlFor="total_days" className="font-medium text-gray-500">
                                    Jumlah Hari
                                </label>
                                <input
                                    type="number"
                                    name="total_days"
                                    id="total_days"
                                    className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                                    onChange={handleChange}
                                    value={input.total_days}
                                    disabled={loading}
                                    required
                                />
                                {trip.trip_type === "private" && (
                                    <h4 className="test-sm font text-gray-400 ">Perhari : + Rp {trip.price_per_day.toLocaleString('id-ID')}</h4>
                                )}
                            </div>

                            <div className="mb-5 grid grid-cols-3 items-center gap-4">
                                <label htmlFor="start_date" className="font-medium text-gray-500">
                                    Tanggal Mulai
                                </label>
                                <input
                                    type="date"
                                    name="start_date"
                                    id="start_date"
                                    className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent w-full p-3"
                                    onChange={handleChange}
                                    value={input.start_date}
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div className="mb-5 grid grid-cols-3 items-start gap-4">
                                <label className="font-medium text-gray-500 pt-2">
                                    Pilih Porter
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        Array.isArray(porters) && porters.length > 0 ? (
                                            <>
                                                {
                                                    porters.map(porter => (
                                                        <div key={porter.id} className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                id={`porter-${porter.id}`}
                                                                className="mr-2 text-[#FFC100] focus:ring-[#FFC100] border-gray-300 appearance-none w-6 aspect-square shrink-0 rounded-full border border-gray-400 checked:bg-yellow-500 checked:border-yellow-500"
                                                                onChange={() => handlePorterSelection(porter.id)}
                                                                checked={selectedPorters.includes(porter.id)}
                                                            />
                                                            <label htmlFor={`porter-${porter.id}`}>
                                                                {porter.name}
                                                            </label>
                                                        </div>
                                                    ))
                                                }

                                                {/* Tambahan keterangan */}
                                                <p className="col-span-2 text-sm text-gray-400 mt-2">
                                                    * Lebih dari 3 porter akan dikenakan biaya tambahan Rp 350.000
                                                </p>
                                            </>
                                        ) : (
                                            <p>Tidak ada porter yang tersedia</p>
                                        )
                                    }
                                </div>
                            </div>
                        </>
                    )}

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

                <div className='mt-10 h-2 w-full bg-[#FFC100] rounded-lg' />
                <div className="mt-10">
                    <div className="flex space-x-4 mb-4">
                        {trip.trip_type === "open" && (
                            <button
                                className={`px-4 py-2 rounded-lg transition ${selectedTab === 'agenda' ? 'bg-[#FFC100] text-white' : 'bg-gray-200 hover:bg-[#e6b800] hover:text-white'}`}
                                onClick={() => setSelectedTab('agenda')}
                            >
                                Agenda
                            </button>
                        )}

                        <button
                            className={`px-4 py-2 rounded-lg transition ${selectedTab === 'equipment' ? 'bg-[#FFC100] text-white' : 'bg-gray-200 hover:bg-[#e6b800] hover:text-white'}`}
                            onClick={() => setSelectedTab('equipment')}
                        >
                            Perlengkapan
                        </button>

                        <button
                            className={`px-4 py-2 rounded-lg transition ${selectedTab === 'estimation_time' ? 'bg-[#FFC100] text-white' : 'bg-gray-200 hover:bg-[#e6b800] hover:text-white'}`}
                            onClick={() => setSelectedTab('estimation_time')}
                        >
                            Estimasi Waktu
                        </button>

                    </div>

                    <div className="mt-10">
                        {trip.trip_type === "open" && selectedTab === 'agenda' && (
                            <div>
                                <h4 className="font-bold text-lg">Agenda</h4>
                                <div className="mt-4 space-y-4">
                                    {trip.agenda
                                        ?.split(/(?:\s*,\s*)?(?=Hari\s\d+:)/g)
                                        .filter(Boolean)
                                        .map((dayBlock, index) => {
                                            const [title, ...rest] = dayBlock.split(',');
                                            const activities = rest
                                                .join(',')
                                                .split(/,\s*(?=\d{2}:\d{2}\s–)/)
                                                .map(item => item.trim())
                                                .filter(Boolean);

                                            return (
                                                <div key={index}>
                                                    <h5 className="font-semibold">{title.trim()}</h5>
                                                    <ul className="list-disc pl-5 mt-2">
                                                        {activities.map((item, i) => (
                                                            <li key={i} className="mb-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}

                        {selectedTab === 'equipment' && (
                            <div>
                                <h4 className="font-bold text-lg">Perlengkapan</h4>
                                <ul className="mt-4 list-disc pl-4">
                                    {trip.equipment && trip.equipment.includes(',') ? (
                                        trip.equipment.split(',').map((item, index) => (
                                            <li key={index} className="mb-2">{item.trim()}</li>
                                        ))
                                    ) : (
                                        <p>{trip.equipment}</p>
                                    )}
                                </ul>
                            </div>
                        )}

                        {selectedTab === 'estimation_time' && (
                            <div>
                                <h4 className="font-bold text-lg">Estimasi Waktu</h4>
                                <ul className="mt-4 list-disc pl-4">
                                    {
                                        trip.estimation_time && trip.estimation_time.includes(',') ? (
                                            trip.estimation_time.split(',').map((item, index) => (
                                                <li key={index} className="mb-2">{item.trim()}</li>
                                            ))
                                        ) : (
                                            <p>{trip.estimation_time}</p>
                                        )
                                    }
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className='mt-10 h-2 w-full bg-[#FFC100] rounded-lg' />
            <div className="mt-10">
                <h4 className="font-bold text-lg">Feedback</h4>

                {trip.feedback?.items?.length > 0 ? (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {trip.feedback.items.slice(0, 6).map((item) => (
                            <Testimoni
                                key={item.id}
                                image={item.user.photo}
                                text={item.message}
                                username={item.user.name}
                                rating={item.rating}
                                date={item.created_at}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-5 text-gray-500 text-sm">
                        Belum ada feedback untuk trip ini.
                    </div>
                )}
            </div>

            <a
                href="https://wa.me/6285394895257"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex it ems-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                <span className="font-medium">Chat via WhatsApp</span>
            </a>

            <ToastContainer
                className="absolute top-5 right-5"
            />

        </div>
    );
};

export default TripDetail;