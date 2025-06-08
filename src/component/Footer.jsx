import React from 'react'
import Logo from '../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import Background from '../assets/background/bgalt.png'
import Icon1 from '../assets/icon/mount.png'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-center'>
                <img src={Icon1} alt="mount" className='h-10' />
                <img src={Icon1} alt="mount" className='h-20' />
                <img src={Icon1} alt="mount" className='h-10' />
            </div>
            <div
                className="flex justify-between gap-20 px-20 py-10 text-white mt-10"
                style={{
                    backgroundImage: `url(${Background})`,
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
                        <div className="flex gap-10 text-3xl">
                            <a href="https://www.instagram.com/gapakerem.adventure?igsh=MWk5NjlnN2NjbDhudg==" target='blank'>
                                <FontAwesomeIcon icon={faInstagram} className='hover:text-[#FFC100] transition' />
                            </a>
                            <a href="https://www.youtube.com/@gapakeremadventure1258" target='blank'>
                                <FontAwesomeIcon icon={faYoutube} className='hover:text-[#FFC100] transition' />
                            </a>
                            <a href="https://www.tiktok.com/@basecampga?_t=ZS-8vxVEaUmpce&_r=1" target='blank'>
                                <FontAwesomeIcon icon={faTiktok} className='hover:text-[#FFC100] transition' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl text-[#FFC100] mb-2">Kontak</h1>
                        <p>+62 895-1739-8959</p>
                        <p>
                            Jl. Antang Raya No.17, Tello Baru, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 9234
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
