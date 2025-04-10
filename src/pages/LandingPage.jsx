import React from 'react'
import Icon1 from '../assets/mount.png'
import Photo1 from '../assets/photo/1.png'
import Photo2 from '../assets/photo/2.png'
import Photo3 from '../assets/photo/3.png'
import Photo4 from '../assets/photo/4.png'
import Layanan1 from '../assets/layanan/1.png'
import Layanan2 from '../assets/layanan/2.png'
import Layanan3 from '../assets/layanan/3.png'
import Layanan4 from '../assets/layanan/4.png'
import Background from '../assets/bgmount.png'
import Tools from '../assets/tools.png'
import Logo2 from '../assets/seven.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
    return (
        <div className='py-10'>
            <div className='px-60'>
                <div className='flex gap-10 justify-center items-center'>
                    <img src={Icon1} className='h-10' />
                    <div className='relative'>
                        <h1 className='text-3xl text-[#FFC100]'>Tentang Kami</h1>
                        <img
                            src={Icon1}
                            className='h-20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25'
                        />
                    </div>
                    <img src={Icon1} className='h-10' />
                </div>

                <div className="flex justify-between items-center mt-10 gap-10">
                    <div className="grid grid-cols-2 gap-4 w-1/3">
                        <img src={Photo1} className="h-30 object-cover rounded-lg" />
                        <img src={Photo2} className="h-40 object-cover rounded-lg" />
                        <img src={Photo3} className="h-40 object-cover rounded-lg" />
                        <img src={Photo4} className="h-30 object-cover rounded-lg" />
                    </div>

                    <div className="w-2/3">
                        <p className="text-justify">
                            <span className='text-[#FFC100] font-semibold'>GaPakeRem Adventure</span>, singkatan dari Gerakan Pecinta Alam Kreatif Makassar, adalah komunitas dan operator wisata yang bergerak di bidang pemanduan
                            pendakian gunung di Sulawesi Selatan. Didirikan oleh Yasin Habibi di Makassar pada 25 Agustus 2021, komunitas ini menyediakan layanan open trip dan
                            private trip, khususnya untuk kawasan pegunungan di Sulawesi Selatan. Dengan mengedepankan kreativitas, setiap kegiatan selalu didokumentasikan dalam
                            bentuk konten atau vlog yang menarik, memberikan kenangan yang abadi bagi para peserta. Didukung oleh tim profesional yang terdiri dari dua guide
                            bersertifikasi APGI (Asosiasi Pemandu Gunung Indonesia) dan sepuluh porter berpengalaman, GakPakeRem Adventure terbuka untuk semua kalangan tanpa
                            batasan, menjadikan pengalaman pendakian gunung lebih inklusif, aman, dan berkesan.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative min-h-screen mt-10 px-60 py-10">
                <img src={Background} alt="background" className="absolute top-0 left-0 w-full h-full z-0" />

                <div className='mt-40 flex items-center gap-10 relative z-0'>
                    <h1 className='text-3xl font-bold text-gray-500'>Layanan trip Kami</h1>
                    <div className='h-5 w-2/3 bg-[#FFC100] rounded-lg' />
                </div>

                <div className='mt-20 mb-20 grid grid-cols-2 gap-10 relative z-10'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={Layanan1} alt='layanan1' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pendaki Open Trip</h4>
                        <p className='text-sm'>Pendakian bersama grup terbuka untuk umum dengan pemanduan profesional, cocok bagi individu yang ingin menikmati pendakian seru dan bertemu teman baru.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={Layanan2} alt='layanan2' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pendaki Private Trip</h4>
                        <p className='text-sm'>Layanan pendakian eksklusif untuk grup dengan fleksibilitas rute dan waktu yang dapat disesuaikan sesuai kebutuhan.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={Layanan3} alt='layanan3' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pemandu Bersertifikat</h4>
                        <p className='text-sm'>Pendakian dipandu oleh guide bersertifikat APGI yang berpengalaman, memastikan pengalaman aman, nyaman dan menyenangkan.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={Layanan4} alt='layanan4' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Jasa Porter</h4>
                        <p className='text-sm'>Layanan porter untuk membawa alat dan logistik, memudahkan peserta fokus pada pengalaman pendakian.</p>
                    </div>
                </div>
            </div>

            <div className='py-20 px-60'>
                <div className='flex items-center justify-center gap-10'>
                    <div className='h-5 w-1/3 bg-[#FFC100] rounded-lg' />
                    <h1 className='text-3xl font-bold text-gray-500'>Butuh Perlengkapan Mendaki?</h1>
                </div>

                <div className='mt-20 flex justify-center items-center gap-20'>
                    <div className='w-1/3'>
                        <p>
                            Kami di <span className='text-[#FFC100] font-semibold'>Gapakerem Outdoor & Service</span> menyediakan peralatan berkualitas tinggi untuk
                            perjalanan yang aman dan nyaman. Sewa sekarang dan fokuslah pada petualangan
                        </p>
                        <img src={Tools} alt='image1' />
                    </div>
                    <div className="relative flex flex-col items-center">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="absolute top-0 right-0 text-orange-300 text-5xl rotate-12"
                        />

                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-orange-300 text-5xl -rotate-12"
                        />

                        <div className="absolute right-[0.1px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                            <FontAwesomeIcon
                                icon={faMousePointer}
                                className="text-gray-400 text-3xl -rotate-20"
                            />
                            <span className="text-sm text-gray-500 mt-1">klik disini</span>
                        </div>

                        <img src={Logo2} alt="Logo2" className="h-75 w-75" />

                        <div className="mt-4 text-center">
                            <span className="mr-2 italic font-semibold">
                                Lihat koleksi perlengkapan kami di instagram
                            </span>
                            <span className="p-2 border rounded-full font-semibold underline">
                                @outsevencamp
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage
