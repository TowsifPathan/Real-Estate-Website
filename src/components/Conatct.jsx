import React from 'react'

const Conatct = () => {
    return (
        <>
            <section id="contact" className='w-full py-[48px] bg-bg'>
                <div className="container mx-auto">
                    <h2 className=' text-[36px] font-bold leading-[150%] mb-[40px] text-darkB'>Hubungi Kami</h2>
                    <div className='flex'>
                        <div className='flex w-1/2 mt-[34px]'>
                            <div className=' w-[274px] mr-[24px] h-[167px] bg-white rounded-[10px]'>
                                <h3 className=' text-[16px] font-medium text-darkB pl-[100px] pt-[25px]'>Call</h3>
                                <h3 className=' text-[16px] mt-[8px] mb-[27px] font-medium text-darkB pl-[100px]'>+6281232936733</h3>
                                <a href="#" className='text-[16px] font-bold text-darB border-[1px] rounded-[5px] py-[10px] w-[108px] inline-block text-center border-darkB ml-[83px] hover:bg-darkB hover:text-white transition-all'>Call Now</a>
                            </div>
                            <div className=' w-[274px] h-[167px] bg-white rounded-[10px]'>
                                <h3 className=' text-[16px] font-medium text-darkB pl-[100px] pt-[25px]'>Call</h3>
                                <h3 className=' text-[16px] mt-[8px] mb-[27px] font-medium text-darkB pl-[100px]'>+6281232936733</h3>
                                <a href="#" className='text-[16px] font-bold text-darB border-[1px] rounded-[5px] py-[10px] w-[108px] inline-block text-center border-darkB ml-[83px] hover:bg-darkB hover:text-white transition-all'>Call Now</a>
                            </div>
                        </div>
                        <div className='ml-[25%] text-center'>
                            <h1 className='text-[36px] font-bold mb-[70px] leading-[150%] text-darkB'>Penghargaan</h1>
                            <img className='m-auto' src="contact.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Conatct