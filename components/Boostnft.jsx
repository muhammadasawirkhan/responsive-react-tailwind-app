import React from 'react';
import Subtract from "../assets/images/Subtract.png"
import Subtractmd from "../assets/images/Subtractmd.png"
import Subtractsm from "../assets/images/Subtractsm.png"
import monkey from "../assets/images/monkey.png"
import monkeymd from "../assets/images/monkeymd.png"
import Upward from "../assets/images/Upward.png"
import Upward1 from "../assets/images/Upward1.png"

import monkeysm from "../assets/images/monkeysm.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"
import stockmd from "../assets/images/stockmd.png"
import Groupboost from "../assets/images/Groupboost.png"


export const Boostnft = () => {
  return (
    <>
      <div className="flex flex-wrap mt-[200vh] sm:mt-[150vh] lg:mt-[150vh] xl:mt-[100vh] max-w-[1320px] justify-around mx-auto  ">
        <div className=''>
          <div className='max-w-[312px] ml-[25px] sm:ml-[0px]  sm:max-w-[632px]'>
            <h2 className="text-[34px] text-center sm:text-7xl font-semibold sm:text-center lg:text-left">Boost Your NFTs: Enhance Visibility and Value</h2>
          </div>
          <div className='max-w-[292px] ml-[25px] sm:ml-[0px]   sm:max-w-[580px]  xl:mt-[30px]'>
            <p className='text-[18px] text-center sm:text-center lg:text-left'>
              The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.
            </p>
          </div>

          <div className='relative hidden sm:hidden lg:block lg:left-[600px] lg:bottom-[200px] w-[50px]'>
            <img src={Upward1} alt="" />
          </div>
          <div className='relative hidden sm:hidden lg:block w-[100px] xl:left-[1000px] xl:bottom-[400px]'>
            <img src={Upward} alt="" />
          </div>
        </div>


        <div>
          {/*card5 */}
          <div className='relative min-w-[308px] max-w-[308px] sm:-ml-[2vw] '>
            <img src={Subtract} className='' alt="" />
            <div className='flex absolute bottom-[310px] left-[25px] sm:bottom-[195px] z-[1] sm:left-[25px]'>
              <div>
                <img src={Ellipse} alt="" />
              </div>
              <div className='mt-[2px] ml-[4px] sm:mb-[125px] sm:ml-[4px]'>
                <h1>STELLA NOVA</h1>
                <p>@Stella Nova</p>
              </div>
            </div>
            <div className='absolute top-[89px] lg:top-[89px] lg:left-[18px] sm:top-[90px] sm:left-[13px]'>
              <img src={monkey} className='w-[272px]  rounded-[14px] ' alt="" />
            </div>
            <div className='absolute z-[1] bottom-[30px] left-[140px] sm:bottom-[28px] sm:left-[145px] '>
              <img src={Price} alt="" />
            </div>
            <div>
              <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
            </div>

          </div>

          {/*card6 */}
          <div className='block sm:flex'>
             <div className='relative top-[1px] sm:top-[70px] min-w-[308px] max-w-[308px] opacity-[50%]'>
              <img src={Subtractmd} className='' alt="" />
              <div className='flex absolute sm:bottom-[80px] bottom-[210px] z-[1] sm:left-[25px] left-[25px]'>
                <div>
                  <img src={Ellipse} className='w-[31px]' alt="" />
                </div>
                <div className='mt-[2px] ml-[4px] sm:mb-[125px] sm:ml-[4px] text-[10px]'>
                  <h1>STELLA NOVA</h1>
                  <p>@Stella Nova</p>
                </div>
              </div>
              <div className='absolute top-[62px] left-[11px] xl:top-[62px] xl:left-[11px] sm:top-[60px] sm:left-[13px]'>
                <img src={monkeymd} className='  rounded-[14px] ' alt="" />
              </div>
              <div className='absolute w-[73px] z-[1] bottom-[23px] left-[110px] xl:bottom-[23px] xl:left-[110px] sm:bottom-[22px] sm:left-[115px] '>
                <img src={Price} alt="" />
              </div>
              <div className='absolute bottom-[20px] left-[20px]'>
                <img src={stockmd} alt="" />
              </div>
            </div> 
            
            <div className='relative   min-w-[308px] max-w-[308px]  opacity-[75%] '>
              <img src={Subtractmd} className=' ml-[3.5vw]' alt="" />
              <div className='flex absolute bottom-[208px] sm:bottom-[80px] z-[1] left-[25px]'>
                <div>
                  <img src={Ellipse} className='w-[31px] ml-[3.5vw]' alt="" />
                </div>
                <div className='lg:mt-[2px] lg:ml-[4px] sm:mb-[125px] sm:ml-[4px] text-[10px]'>
                  <h1>STELLA NOVA</h1>
                  <p>@Stella Nova</p>
                </div>
              </div>
              <div className='absolute top-[60px] left-[24px] sm:top-[63px] sm:left-[34px] lg:top-[61px] lg:left-[47px] xl:top-[60px] xl:left-[73px]'>
                <img src={monkeymd} className='  rounded-[14px] ' alt="" />
              </div>
              <div className='absolute w-[73px] z-[1] bottom-[22px] left-[35px] sm:bottom-[22px] sm:left-[35px] xl:bottom-[22px] xl:left-[172px] lg:bottom-[22px] lg:left-[148px] '>
                <img src={Price} alt="" />
              </div>
              <div className='absolute bottom-[20px] left-[130px] sm:bottom-[20px] sm:left-[140px] lg:bottom-[20px]  lg:left-[52px] xl:left-[72px]'>
                <img src={stockmd} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' '>
        <img src={Groupboost} className='w-[35vw] hidden sm:hidden lg:hidden xl:block relative xl:bottom-[670px] xl:left-[865px]' alt="" />
      </div>
    </>

  );
};

export default Boostnft;