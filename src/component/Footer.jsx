import React from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div
            className="flex justify-between gap-20 px-20 py-10 text-white"
            style={{
                backgroundImage: `url('/src/assets/bgalt.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo" className="h-20 w-20" />
                <h1 className="text-xl font-bold">GaPakeRem Adventure</h1>
                <h4 className="text-gray-400">2025, GaPakeRem Adventure</h4>
            </div>

            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-2xl text-[#FFC100] mb-2">Ikuti Kami</h1>
                    <div className="flex gap-10 text-5xl">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl text-[#FFC100] mb-2">Kontak</h1>
                    <p>(+62) 853 9489 5257</p>
                    <p>
                        Jalan Kompleks Btn. Antang Jaya No.10 Blok G, Antang, Kec. Manggala, Kota Makassar, Sulawesi Selatan
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
