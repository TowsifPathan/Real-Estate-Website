import React from 'react'

const Properties = () => {
    return (
        <>
            <section id="properties" className='w-full bg-bg'>
                <div className="container mx-auto">
                    <div className='pt-[68px]'>
                        <h3 className=' text-[16px] font-medium text-orange'>Pilihan konsumen</h3>
                        <h2 className=' text-[36px] mt-[8px] mb-[64px] font-bold leading-[150%] text-darkB'>Residen Favorit</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' w-[45%] relative'>
                            <img className='absolute top-0 left-0' src="properties1.jpg" alt="" />
                            <img className='absolute top-[60px] left-[167px]' src="properties2.jpg" alt="" />
                        </div>
                        <div className=' w-[50%] pb-[259px] mt-[40px]'>
                            <h1 className=' text-[36px] font-bold w-[80%] leading-[150%] mb-[24px] text-darkB'>Bangunan yang dirancang oleh Aristektur Handal</h1>
                            <p className='text-[16x] font-normal w-[80%] leading-[30px] mb-[48px] opacity-55 text-darkB'>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                            <a href="#" className='text-[16px] font-normal text-darB border-[1px] rounded-[10px] py-[13px] w-[234px] mr-[41px] inline-block pl-[77px] border-darkB hover:bg-darkB hover:text-white transition-all'>Hubungi Kami</a>
                            <a href="#" className='text-[16px] font-normal text-darkB border-[1px] border-darkB rounded-[10px] py-[13px] px-[41px] inline-block pl-[41px] hover:bg-darkB hover:text-white transition-all'>Explore lebih banyak</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Properties