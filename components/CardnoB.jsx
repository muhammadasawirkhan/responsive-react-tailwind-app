import React from 'react';
import Ellipse from "../assets/images/Ellipse.png"
import Subtract from "../assets/images/Subtract.png"

export const CardnoB = ({cardImg,name,username,priceImg,SoldImg}) => {
  
    return (
    <>
    <div className='relative min-w-[308px] max-w-[308px]'>
            <img src={Subtract} alt="" />
            <div className='flex absolute bottom-[315px] left-[25px] sm:bottom-[315px] sm:left-[25px] z-[1] xl:bottom-[195px] xl:left-[25px]'>
                <div>
                    <img src={Ellipse} alt="" />
                </div>
                <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                    <h1>{name}</h1>
                    <p>@{username}</p>
                </div>
            </div>
            <div className='absolute top-[90px] left-[13px] sm:top-[90px] sm:left-[13px]'>
                <img src={cardImg} className='w-[272px] rounded-[14px]' alt="" />
            </div>
            <div className='absolute top-[211px] left-[108px] xl:top-[207px] xl:left-[103px]'>
                        <img src={SoldImg} className='' alt="" />
                    </div>
            <div className='absolute z-[1] bottom-[30px] left-[140px] sm:bottom-[30px] sm:left-[145px] md:bottom-[30px] md:left-[140px] lg:bottom-[28px] lg:left-[145px] xl:bottom-[28px] xl:left-[145px] '>
                <img src={priceImg} alt="" />
            </div>
            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
        </div>
    </>
  )
}
export default CardnoB;
