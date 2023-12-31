import React from 'react'

const Properties2 = () => {
    return (
        <>
            <section id="properties2" className='w-full pb-[68px]'>
                <div className="container mx-auto">
                    <div className='pt-[68px]'>
                        <h3 className=' text-[16px] font-medium text-orange'>Pilihan Auditor</h3>
                        <h2 className=' text-[36px] mt-[8px] mb-[64px] font-bold leading-[150%] text-darkB'>Residen Berbagai Kota</h2>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='w-[30%]'>
                            <div>
                            <img className=' hover:rounded-[10px] transition-all' src="prt1.jpg" alt="" />
                            </div>
                            
                            <h4 className=' text-[24px] mt-[16px] mb-[8px] leading-[150%] font-medium'>Magnolia Surabaya</h4>
                            <p className=' text-[16px] leading-[30px] w-[78%] opacity-55 font-normal'>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                        </div>
                        <div className='w-[30%]'>
                            <img className=' hover:rounded-[10px] transition-all' src="prt2.png" alt="" />
                            <h4 className=' text-[24px] mt-[16px] mb-[8px] leading-[150%] font-medium'>Pinang Residences</h4>
                            <p className=' text-[16px] leading-[30px] w-[78%] opacity-55 font-normal'>Jl. Deplu Raya No.16 RT.5, RW.003
                                Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                        </div>
                        <div className='w-[30%]'>
                            <img className=' hover:rounded-[10px] transition-all' src="prt3.jpg" alt="" />
                            <h4 className=' text-[24px] mt-[16px] mb-[8px] leading-[150%] font-medium'>South Grove</h4>
                            <p className=' text-[16px] leading-[30px] w-[85%] opacity-55 font-normal'>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties2