import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 px-20 flex justify-between items-center'>
            <img src={Logo} alt='Logo' className='h-10' />

            <div className='flex gap-10'>
                <Link className='hover:text-[#FF6500]' to="/">Home</Link>
                <Link className='hover:text-[#FF6500]' to="/tentangkami">Tentang</Link>
                <Link className='hover:text-[#FF6500]' to="/daftartrip">Daftar Trip</Link>
            </div>

            <div className='flex gap-10'>
                <Link>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-[#FF6500]' />
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faUser} className='text-[#FF6500]' />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
