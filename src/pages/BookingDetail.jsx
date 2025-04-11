import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BookingDetail = () => {
    const location = useLocation();
    const { id } = location.state;
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [paymentProof, setPaymentProof] = useState(null);

    const [feedback, setFeedback] = useState("")
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

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
                setTimeout(() => {
                    setError(false);
                }, 3000);
            });
    }, [id]);

    const handleUpload = (e) => {
        e.preventDefault();
        if (!paymentProof) return alert("Silakan pilih file terlebih dahulu.");

        setLoadingUpload(true);

        const formData = new FormData();
        formData.append('payment_proof', paymentProof);

        const token = Cookies.get('token');

        axios.patch(`https://gapakerem.vercel.app/bookings/${id}/upload-proof`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => {
                setLoadingUpload(false);
                alert("Bukti pembayaran berhasil diupload!");
                window.location.reload();
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

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

        setLoadingUpload(true)

        const token = Cookies.get('token');

        axios.post('https://gapakerem.vercel.app/feedbacks', {
            id_trip_booking: id,
            message: feedback,
            rating: rating,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                alert('Feedback berhasil dikirim!');
                setFeedback("");
                setRating(0);
                setLoadingUpload(false)
            })
            .catch((err) => {
                console.error("Error :", error);
                setErrorMessage(error.response.data.message);
                setError(true);
                setLoading(false);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            });
    };


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

    if (loading) return <Loading />;

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
                <label className="font-medium text-gray-500">Status</label>
                <span
                    className={`px-2 py-1 rounded-full text-sm ${paymentStatus(book.status)?.color}`}
                >
                    {paymentStatus(book.status)?.text}
                </span>
            </div>

            <div className="grid grid-cols-3 items-center gap-4 max-w-xl mt-10">
                <label className="font-medium text-gray-500">No. Rekening</label>
                <p className="col-span-2">1136609602 (BSI) - MUH YASIN HABIBIE</p>
            </div>

            {book.payment_proof && (
                <div className="mt-10">
                    <p className="text-gray-500 mb-2">Bukti Pembayaran:</p>
                    <a href={book.payment_proof} target="_blank" rel="noopener noreferrer">
                        <img
                            src={book.payment_proof}
                            alt="Bukti Pembayaran"
                            className="w-64 rounded-lg hover:opacity-80 transition"
                        />
                    </a>
                </div>
            )}

            {book.status === 'unpaid' && !book.payment_proof && (
                <div>
                    <form
                        onSubmit={(e) => handleUpload(e)}
                        className="mt-10 flex items-center gap-4"
                        encType="multipart/form-data"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setPaymentProof(e.target.files[0])}
                            className="border border-gray-300 p-2 rounded"
                            disabled={loadingUpload}
                        />
                        <button
                            type="submit"
                            className="bg-[#FFC100] text-white px-4 py-2 rounded hover:bg-yellow-400 transition"
                            disabled={loadingUpload}
                        >
                            Upload Bukti Pembayaran
                        </button>
                    </form>
                </div>
            )}

            <div className='mt-20 h-2 w-full bg-[#FFC100] rounded-lg' />

            <form className="flex flex-col justify-center gap-4 mt-4 mt-20 max-w-lg" onSubmit={handleFeedbackSubmit}>
                <p>Jangan lupa bagikan pengalamanmu setelah trip!</p>

                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="border border-gray-300 p-2 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-[#FFC100] focus:border-transparent"
                    rows="4"
                    placeholder="Tulis feedback kamu disini..."
                    disabled={loadingUpload}
                />

                <div className="flex gap-2">
                    {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className={`text-2xl cursor-pointer transition ${starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                onClick={() => setRating(starValue)}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        )
                    })}
                </div>

                <div className="mt-5">
                    <button
                        type="submit"
                        className="bg-[#FFC100] text-white px-4 py-2 rounded hover:bg-yellow-400 transition"
                        disabled={loadingUpload}
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>

            {loadingUpload && (
                <div className="flex justify-center items-center mt-10">
                    <div className="relative w-12 h-12">
                        <div className="absolute inset-0 border-4 border-[#FFC100] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            )}

            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white border-gray-300 text-[#FFC100] font-bold px-4 py-2 rounded-full shadow-lg z-50">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default BookingDetail