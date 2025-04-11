import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import Cookies from 'js-cookie';

const BookingDetail = () => {
    const location = useLocation();
    const { id } = location.state;
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const token = Cookies.get('token');

        if (error) return
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
            {errorMessage}
        </div>

        setLoading(true);
        axios.get(`https://gapakerem.vercel.app/bookings/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setBook(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setErrorMessage(error.response.data.message);
                setError(true);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='mx-60 my-10 p-10 border-2 rounded-lg border-gray-300'>
            <h1 className='text-3xl text-[#FFC100] text-center'>{book.mountain_name}</h1>

            <div className="grid grid-cols-3 items-center gap-4 max-w-xl mt-10">
                <label className="font-medium text-gray-500">Nama Peserta</label>
                <input
                    type="text"
                    value={book.participant_name}
                    readOnly
                    className="col-span-2 mt-2 max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                />
            </div>

            <div className="grid grid-cols-3 items-center gap-4 max-w-xl">
                <label className="font-medium text-gray-500">Total Pembayaran</label>
                <input
                    type="text"
                    value={book.total_price}
                    readOnly
                    className="col-span-2 mt-2 max-w-sm border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none w-full p-3"
                />
            </div>

            <div className="grid grid-cols-3 items-center gap-4 max-w-xl mt-10">
                <label className="font-medium text-gray-500">No. Rekening</label>
                <p className="col-span-2">1136609602 (BSI) - MUH YASIN HABIBIE</p>
            </div>
        </div>
    )
}

export default BookingDetail