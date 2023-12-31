import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="absolute w-full">
      <div className="container flex items-center justify-between mx-auto mt-12 text-darkB">
        <div>
          <img src="navlogo.svg" alt="" />
        </div>
        <div className='flex gap-24'>
          <a className=" relative inline-block w-12 text-[16px] text-center transition-all hover:font-bold after:content-[''] after:block after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:rounded-[15px] after:h-[3px] hover:after:w-full after:transition-all after:bg-orange" href="#home">Home</a>
          <a className=" relative inline-block w-12 text-[16px] text-center transition-all hover:font-bold after:content-[''] after:block after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:rounded-[15px] after:h-[3px] hover:after:w-full after:transition-all after:bg-orange" href="#about">About</a>
          <a className=" relative inline-block w-[85px] text-[16px] text-center transition-all hover:font-bold after:content-[''] after:block after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:rounded-[15px] after:h-[3px] hover:after:w-full after:transition-all after:bg-orange" href="#properties">Properties</a>
          <a className=" relative inline-block w-[60px] text-[16px] text-center transition-all hover:font-bold after:content-[''] after:block after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:rounded-[15px] after:h-[3px] hover:after:w-full after:transition-all after:bg-orange" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
