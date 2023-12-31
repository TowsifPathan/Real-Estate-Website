import React from 'react'

const About = () => {
  return (
    <>
    <section className='text-darkB' id="about">
        <div className="container mx-auto">
            <h1 className='text-[36px] w-[533px] pt-[100px] pb-[64px] font-bold leading-[150%]'>Tahapan Pembelian Properti yang Mudah dan Cepat</h1>
            <div className='flex justify-between pb-[100px] w-full'>
                <div className=' w-[300px] h-[300px] pt-[20px] pl-[33px] border-2 border-transparent hover:border-[#EEEDDE] rounded-[10px] transition-all'>
                    <h3 className=' relative text-[16px] font-medium after:content-[""] after:w-[8px] after:h-[30px] after:bg-orange after:rounded-[6px] after:absolute after:top-[-3px] after:left-[-34px] before:content-["01"] before:text-[16px] before:font-medium before:text-orange before:absolute before:top-[0px] before:right-[16px]'>Pilih Properti</h3>
                    <p className='text-[16px] font-light leading-[30px] opacity-55 w-[90%] pt-[8px]'>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                    <a className='inline-block text-[16px] font-medium mt-[50px]' href="#">Baca lebih Lanjut</a>
                </div>
                <div className=' w-[300px] h-[300px] pt-[20px] pl-[33px] border-2 border-transparent hover:border-[#EEEDDE] rounded-[10px] transition-all'>
                    <h3 className=' relative text-[16px] font-medium after:content-[""] after:w-[8px] after:h-[30px] after:bg-orange after:rounded-[6px] after:absolute after:top-[-3px] after:left-[-34px] before:content-["02"] before:text-[16px] before:font-medium before:text-orange before:absolute before:top-[0px] before:right-[16px]'>Pilih Properti</h3>
                    <p className='text-[16px] font-light leading-[30px] opacity-55 w-[80%] pt-[8px]'>Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu.</p>
                    <a className='inline-block text-[16px] font-medium mt-[50px]' href="#">Baca lebih Lanjut</a>
                </div>
                <div className=' w-[300px] h-[300px] pt-[20px] pl-[33px] border-2 border-transparent hover:border-[#EEEDDE] rounded-[10px] transition-all'>
                    <h3 className=' relative text-[16px] font-medium after:content-[""] after:w-[8px] after:h-[30px] after:bg-orange after:rounded-[6px] after:absolute after:top-[-3px] after:left-[-34px] before:content-["03"] before:text-[16px] before:font-medium before:text-orange before:absolute before:top-[0px] before:right-[16px]'>Pilih Properti</h3>
                    <p className='text-[16px] font-light leading-[30px] opacity-55 w-[90%] pt-[8px]'>Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB.</p>
                    <a className='inline-block text-[16px] font-medium mt-[50px]' href="#">Baca lebih Lanjut</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About