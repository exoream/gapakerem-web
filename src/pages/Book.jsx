import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Book = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [tripType, setTripType] = useState('open');

    const paymentStatus = (status) => {
        switch (status) {
            case 'unpaid':
                return { text: 'Belum Membayar', color: 'bg-red-200 text-red-600' };
            case 'paid':
                return { text: 'Sudah Membayar', color: 'bg-green-200 text-green-600' };
            case 'pending':
                return { text: 'Menunggu Konfirmasi', color: 'bg-yellow-200 text-yellow-600' };
            default:
                return { text: status, color: 'bg-gray-200 text-gray-600' };
        }
    };

    useEffect(() => {
        const token = Cookies.get('token');
        setLoading(true);

        axios.get(`https://gapakerem.vercel.app/bookings?page=1&trip_type=${tripType}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setBook(response.data.data.bookings);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setErrorMessage(error.response?.data?.message);
                setError(true);
                setLoading(false);
            });
    }, [tripType]);

    if (loading) return <Loading />;

    return (
        <div className='px-60 py-10'>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-3xl font-bold text-[#FFC100]'>Daftar Booking</h1>

                <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent'
                >
                    <option value="open">Open Trip</option>
                    <option value="private">Private Trip</option>
                </select>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-10'>
                {book.length > 0 ? book.map((book, index) => {
                    const status = paymentStatus(book.payment_status);
                    return (
                        <div key={index} className='border-2 border-gray-300 p-5 rounded-lg flex items-center justify-between'>
                            <div>
                                <h1 className="text-2xl font-bold text-[#FFC100]">{book.mountain_name}</h1>
                                <h4 className='mt-4 text-lg font-semibold'>Rp {book.total_price.toLocaleString('id-ID')}</h4>
                                <h4 className='flex items-center gap-2 mt-2'>
                                    Status:
                                    <span className={`px-2 py-1 rounded-full text-sm ${status.color}`}>
                                        {status.text}
                                    </span>
                                </h4>
                            </div>

                            <Link to={`/bookings/${book.mountain_name}`} state={{ id: book.id }}>
                                <button className="bg-[#FFC100] w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-yellow-400 transition">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </Link>
                        </div>
                    )
                }) : <p className="text-gray-500">Belum ada trip yang di booking</p>}
            </div>

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default Book;
