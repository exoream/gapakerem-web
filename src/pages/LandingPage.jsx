import React from 'react'
import Logo from '../assets/logo/logo.png'
import Icon1 from '../assets/icon/mount.png'
import { P1, P2, P3, P4 } from '../assets/photo'
import { L1, L2, L3, L4 } from '../assets/service'
import { G1, G2, G3, G4, G5, G6 } from '../assets/gallery'
import Background from '../assets/background/bgmount.png'
import Background2 from '../assets/background/bgmount2.png'
import Tools from '../assets/icon/tools.png'
import Logo2 from '../assets/logo/seven.png'
import Guide1 from '../assets/guide/yasinhabibie.png'
import Guide2 from '../assets/guide/fajrul.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMousePointer, faImages, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Card1 from '../component/Card1'
import Testimoni from '../component/Testimoni'

const LandingPage = () => {
    return (
        <div className='py-10'>
            <div className='px-40 py-20 flex justify-center items-center gap-10'>
                <img src={Logo} alt="Logo" className='h-100' />

                <div className='relative text-center'>
                    <img
                        src={Icon1}
                        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 h-28'
                    />

                    <h1 className='font-bold text-5xl relative z-10'>
                        GaPakeRem Adventure
                    </h1>

                    <h4 className='text-3xl relative z-10 mt-2'>
                        Lifetime brotherhood
                    </h4>

                    <div className='relative mt-10 h-10'>
                        <img
                            src={Icon1}
                            className='absolute left-[20%] top-0 h-8 opacity-75'
                        />
                        <img
                            src={Icon1}
                            className='absolute left-[60%] top-2 h-10 opacity-75'
                        />
                    </div>
                </div>
            </div>

            <div className='px-60 py-10'>
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
                        <img src={P1} className="h-30 object-cover rounded-lg" />
                        <img src={P2} className="h-40 object-cover rounded-lg" />
                        <img src={P3} className="h-40 object-cover rounded-lg" />
                        <img src={P4} className="h-30 object-cover rounded-lg" />
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

            <div className="relative mt-10 px-60 py-10">
                <img src={Background} alt="background" className="absolute top-0 left-0 w-full h-full z-0" />

                <div className='mt-40 flex items-center gap-10 relative z-0'>
                    <h1 className='text-3xl font-bold text-gray-500'>Layanan trip Kami</h1>
                    <div className='h-5 w-2/3 bg-[#FFC100] rounded-lg' />
                </div>

                <div className='mt-20 mb-20 grid grid-cols-2 gap-10 relative z-10'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={L1} alt='layanan1' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pendaki Open Trip</h4>
                        <p className='text-sm'>Pendakian bersama grup terbuka untuk umum dengan pemanduan profesional, cocok bagi individu yang ingin menikmati pendakian seru dan bertemu teman baru.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={L2} alt='layanan2' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pendaki Private Trip</h4>
                        <p className='text-sm'>Layanan pendakian eksklusif untuk grup dengan fleksibilitas rute dan waktu yang dapat disesuaikan sesuai kebutuhan.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={L3} alt='layanan3' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='font-semibold text-gray-500'>Pemandu Bersertifikat</h4>
                        <p className='text-sm'>Pendakian dipandu oleh guide bersertifikat APGI yang berpengalaman, memastikan pengalaman aman, nyaman dan menyenangkan.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='w-20 h-20 bg-gray-500 rounded-full overflow-hidden'>
                            <img src={L4} alt='layanan4' className='w-full h-full object-cover' />
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
                            className="absolute top-0 right-0 text-[#FFC100] opacity-50 text-5xl rotate-12"
                        />

                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-[#FFC100] opacity-50 text-5xl -rotate-12"
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

            <div className='py-20 px-60 mt-10'>
                <div className='flex items-center justify-center gap-10'>
                    <div className='h-5 w-1/3 bg-[#FFC100] rounded-lg' />
                    <h1 className='text-3xl text-[#FFC100]'>Gallery</h1>
                    <div className='h-5 w-1/3 bg-[#FFC100] rounded-lg' />
                </div>

                <FontAwesomeIcon
                    icon={faImages}
                    className='absolute left-[10%] opacity-50 -rotate-12 text-[#FFC100] text-5xl'
                />

                <FontAwesomeIcon
                    icon={faImages}
                    className='absolute right-[10%] opacity-50 rotate-12 text-[#FFC100] text-5xl'
                />

                <p className='text-center mt-4'>
                    Lihat koleksi foto dan video dari petualangan mendaki kami.
                </p>

                <div className='grid grid-cols-3 gap-10 mt-10'>
                    <img src={G1} alt='Gallery 1' className='w-full h-auto rounded-lg object-cover' />
                    <img src={G2} alt='Gallery 2' className='w-full h-auto rounded-lg object-cover' />
                    <img src={G3} alt='Gallery 3' className='w-full h-auto rounded-lg object-cover' />
                    <img src={G4} alt='Gallery 4' className='w-full h-auto rounded-lg object-cover' />
                    <img src={G5} alt='Gallery 5' className='w-full h-auto rounded-lg object-cover' />
                    <img src={G6} alt='Gallery 6' className='w-full h-auto rounded-lg object-cover' />
                </div>

                <div className='h-5 bg-[#FFC100] rounded-lg mt-25' />
            </div>
            <div className='py-20 px-60'>
                <p className='text-center'>Jelajahi Gunung Bersama Guide & Porter Berpengalaman</p>
                <h1 className='text-3xl text-[#FFC100] text-center mt-5'>Guide</h1>
                <div className='flex gap-10 justify-center mt-10'>
                    <Card1 imageUrl={Guide1} name={"Yasin Habibie"} />
                    <Card1 imageUrl={Guide2} name={"Fajrul"} />
                </div>
            </div>

            <div className='relative px-60 py-10'>
                <img src={Background2} alt="background2" className="absolute top-0 left-0 w-full h-full z-0" />

                <div className='flex items-center justify-center gap-4 relative'>
                    <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className='text-3xl'
                    />

                    <h1 className='text-3xl font-bold'>Testimoni</h1>

                    <FontAwesomeIcon
                        icon={faQuoteRight}
                        className='text-3xl'
                    />
                </div>

                <div className='flex mt-40'>
                    <div className='flex gap-10'>
                        <Testimoni
                            text="Pengalaman pendakian bersama GakPakeRem Adventure luar biasa! Guide yang profesional, perjalanan yang aman, dan keindahan alam yang tak 
                            terlupakan. Saya ikut open trip dan bisa bertemu banyak teman baru. Pasti akan ikut lagi!"
                            username="Anonim"
                            mount="Gunung Lompobattang"
                            rating={4}
                        />
                        <Testimoni
                            text="Pengalaman pendakian bersama GakPakeRem Adventure luar biasa! Guide yang profesional, perjalanan yang aman, dan keindahan alam yang tak 
                            terlupakan. Saya ikut open trip dan bisa bertemu banyak teman baru. Pasti akan ikut lagi!"
                            username="Anonim"
                            mount="Gunung Lompobattang"
                            rating={4}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
