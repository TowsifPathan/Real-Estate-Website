import React from 'react'

const Banner = () => {
  return (
    <>
      <section id='banner' className='w-full bg-bg'>
        <div className="container flex justify-between mx-auto text-darkB pt-[188px]">
          <div className='pt-[70px]'>
            <h1 className='font-bold text-[56px] leading-[150%] w-[777px]'>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p className='text-[16x] font-normal leading-[30px] opacity-55 mt-[24px] w-[544px]'>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
            <input className=' w-[508px] h-[70px] mt-[56px] rounded-[15px] text-[16px] font-normal bg-white pl-[56px] focus:outline-darkB' type="text" placeholder='Search location, properties, residental group' />
            <a className='text-[16px] font-normal py-[23px] px-[41px] text-darkB ml-[15px] text-opacity-55 rounded-[15px] bg-white hover:bg-darkB hover:text-white transition-all' href="#">Search</a>
          </div>
          <img className='' src="bannerRHT.png" alt="" />
        </div>
      </section>

    </>
  )
}

export default Banner