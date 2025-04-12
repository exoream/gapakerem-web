import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        setIsLogin(!!token);
    }, []);

    const navLinkClass = (path) =>
        location.pathname === path
            ? 'text-[#FF6500] font-semibold'
            : 'hover:text-[#FF6500] transition';

    return (
        <div className='py-5 px-20 flex justify-between items-center'>
            <img src={Logo} alt='Logo' className='h-10' />

            <div className='flex gap-10'>
                <Link to="/" className={navLinkClass('/')}>Home</Link>
                <Link to="/tentangkami" className={navLinkClass('/tentangkami')}>Tentang</Link>
                <Link to="/daftartrip" className={navLinkClass('/daftartrip')}>Daftar Trip</Link>
            </div>

            <div className='flex justify-center items-center gap-10'>
                {isLogin ? (
                    <Link to="/bookings">
                        <FontAwesomeIcon icon={faShoppingCart} className='text-[#FF6500] cursor-pointer' />
                    </Link>
                ) : (
                    <FontAwesomeIcon icon={faShoppingCart} className='text-gray-400 cursor-not-allowed' />
                )}

                {isLogin ? (
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} className='text-[#FF6500] cursor-pointer' />
                    </Link>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='text-[#FF6500] border border-[#FF6500] px-4 py-1 rounded-full hover:bg-[#FF6500] hover:text-white transition'
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
