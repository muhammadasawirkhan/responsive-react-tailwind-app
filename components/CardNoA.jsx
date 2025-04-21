import React from 'react';
import Subtract from "../assets/images/Subtract.png";
import Ellipse from "../assets/images/Ellipse.png";

const CardNoA = ({ cardImg, name, username, priceImg,isFourth }) => {
    return (
        <div className='relative min-w-[308px] max-w-[308px] '>
            <img src={Subtract} alt="" />
            <div className='flex absolute bottom-[195px] left-[25px] sm:bottom-[195px] z-[1] sm:left-[25px]'>
                <div>
                    <img src={Ellipse} alt="" />
                </div>
                <div className='mb-[125px] ml-[4px] lg:mt-[2px] lg:ml-[4px] sm:mb-[125px] sm:ml-[4px]'>
                    <h1>{name}</h1>
                    <p>@{username}</p>
                </div>
            </div>
            <div className='absolute top-[90px] left-[13px] lg:top-[90px] lg:left-[14px] sm:top-[90px] sm:left-[13px]'>
                <img src={cardImg} className='w-[272px] rounded-[14px]' alt="" />
            </div>
            <div className='absolute z-[1] bottom-[30px] left-[140px]  xl:bottom-[28px] xl:left-[145px] lg:bottom-[30px] lg:left-[140px] sm:bottom-[30px] sm:left-[140px] '>
                <img src={priceImg} alt="" />
            </div>
            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
        </div>
        
        
    );
};

export default CardNoA;
