import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className='w-full py-[31px] bg-darkB'>
        <div className="container mx-auto">
          <div className='flex items-center justify-between'>
            <img src="footerlogo.png" alt="" />
            <div className='flex gap-[64px]'>
              <FaInstagram className=' text-bg bg-darkB hover:text-white transition-all text-[24px]'/>
              <FaFacebook className=' text-bg bg-darkB hover:text-white transition-all text-[24px]'/>
              <FaLinkedin className=' text-bg bg-darkB hover:text-white transition-all text-[24px]'/>
              <FaTwitter className=' text-bg bg-darkB hover:text-white transition-all text-[24px]'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer