import React from 'react'
import Logo from '../assets/logo.png'
import Photo1 from '../assets/photo/1.png'
import Photo2 from '../assets/photo/2.png'
import Photo3 from '../assets/photo/3.png'

const AboutUs = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-[#FFC100] text-5xl font-bold py-20'>Tentang Kami</h1>

            <div className='px-60 py-10 space-y-10'>
                <div className='flex items-center justify-between gap-10'>
                    <div className='w-1/3 flex flex-col gap-5'>
                        <img src={Logo} alt="Logo" className='h-40 w-40 object-contain' />
                        <img src={Photo1} alt="Photo1" className='h-40 w-40 object-cover rounded-lg' />
                    </div>

                    <p className='w-2/3 text-justify leading-relaxed'>
                        <span className='text-[#FFC100] font-semibold'>GaPakeRem Adventure</span>, singkatan dari Gerakan Pecinta Alam Kreatif Makassar, adalah komunitas dan operator wisata yang bergerak di bidang pemanduan pendakian gunung di Sulawesi Selatan. Didirikan oleh Yasin Habibi di Makassar pada 25 Agustus 2021, komunitas ini menyediakan layanan open trip dan private trip, khususnya untuk kawasan pegunungan di Sulawesi Selatan. Dengan mengedepankan kreativitas, setiap kegiatan selalu didokumentasikan dalam bentuk konten atau vlog, memberikan kenangan yang abadi bagi para peserta. Didukung oleh tim profesional yang terdiri dari dua guide bersertifikasi APGI (Asosiasi Pemandu Gunung Indonesia) dan sepuluh porter berpengalaman, GakPakeRem Adventure terbuka untuk semua kalangan tanpa batasan, menjadikan pengalaman pendakian gunung lebih inklusif, aman, dan berkesan.
                    </p>
                </div>

                <div className='flex items-center justify-between gap-10'>
                    <p className='w-2/3 text-justify leading-relaxed'>
                        Nama GaPakeRem sendiri memiliki makna bahwa setiap kegiatan yang dilakukan oleh komunitas ini selalu berjalan tanpa henti, mencerminkan semangat yang terus berkembang. GakPakeRem berawal dari hobi dan keresahan pemilik yang tidak bisa bergabung dengan organisasi pecinta alam pada umumnya, sehingga menciptakan ruang sendiri untuk menyalurkan passion di dunia pendakian.
                    </p>

                    <div className='w-1/3 flex flex-col items-end gap-5'>
                        <img src={Photo2} alt="Photo2" className='h-40 w-40 rounded-lg' />
                        <img src={Photo3} alt="Photo3" className='h-40 w-40 rounded-lg' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutUs