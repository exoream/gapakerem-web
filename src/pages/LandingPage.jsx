import React from 'react'
import Icon1 from '../assets/mount.png'
import Photo1 from '../assets/photo/1.png'
import Photo2 from '../assets/photo/2.png'
import Photo3 from '../assets/photo/3.png'
import Photo4 from '../assets/photo/4.png'

const LandingPage = () => {
    return (
        <div className='px-60 py-10'>
            <div className='flex gap-10 justify-center items-center relative'>
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
    )
}

export default LandingPage
