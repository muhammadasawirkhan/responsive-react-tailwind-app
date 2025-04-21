import React, { useState } from 'react';
import Logo from "../assets/images/Logo.png";
import { Menu, X } from 'lucide-react'; // for icons, install lucide-react or use your preferred icon set

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <div className='flex justify-around px-[65px] py-[25px] items-center'>
                <div>
                    <img src={Logo} alt="Logo" className='w-[50px]' />
                </div>

                {/* Desktop Nav */}
                <div className='hidden md:flex gap-[50px] mt-[20px] ml-[20px]'>
                    <a className='text-[#DE0308] border-b-2 border-[#DE0308] pb-1' href="">Home</a>
                    <a href="">AI NFT Generation</a>
                </div>

                {/* Desktop Buttons */}
                <div className='hidden md:flex gap-[10px]'>
                    <button className="bg-gradient-to-r from-[#FD0000] to-[#FF9292] text-white px-4 py-2 rounded-lg">
                        Connect Wallet
                    </button>
                    <button className="bg-white hover:bg-gradient-to-r from-[#FD0000] to-[#FF9292] hover:text-[white] text-[#FE0101] font-bold py-2 px-4 rounded border-2 border-[#FE0101]">
                        Create NFT
                    </button>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <div className="md:hidden">
                    {isOpen ? (
                        <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
                    ) : (
                        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col gap-4 px-6 py-4 md:hidden bg-white shadow-md z-10">
                    <a className='text-[#DE0308] border-b-2 border-[#DE0308] pb-1' href="">Home</a>
                    <a href="">AI NFT Generation</a>
                    <button className="bg-gradient-to-r from-[#FD0000] to-[#FF9292] text-white px-4 py-2 rounded-lg">
                        Connect Wallet
                    </button>
                    <button className="bg-white hover:bg-gradient-to-r from-[#FD0000] to-[#FF9292] hover:text-[white] text-[#FE0101] font-bold py-2 px-4 rounded border-2 border-[#FE0101]">
                        Create NFT
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
