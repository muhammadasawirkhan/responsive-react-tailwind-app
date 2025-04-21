import React from 'react';
import Left from "../assets/images/Left.png";
import Right from "../assets/images/Right.png";
import Card6_pic from "../assets/images/Card6_pic.png"
import Card12_pic from "../assets/images/Card12_pic.png"
import Card10_pic from "../assets/images/Card10_pic.png"
import Subtract from "../assets/images/Subtract.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"


export const Hero_section = () => {
    return (
        <>
            <div className=''>

                <div className='text-center mt-[150px]'>
                    <h1 className='text-6xl'>DISCOVER, CREATE &<br /> SELL ARTWORKS.</h1>
                </div>
                <div className='text-center mt-[20px]'>
                    <p className='font-roboto'>Discover and trade unique digital art pieces on our NFT website,<br /> where creativity meets blockchain technology.</p>
                </div>
                <div className='flex justify-between  sm:top-[220px] lg:top-[190px] xl:top-[150px] relative '>
                    <img src={Right} className='absolute right-0 top-20 xl:w-[548px] lg:w-[500px] sm:w-[300px]' alt="" />
                    <img src={Left} className='absolute left-0 top-20 xl:w-[548px] lg:w-[500px] sm:w-[300px]' alt="" />



                    {/*carda*/}


                    <div className='hidden sm:hidden lg:block lg:relative lg:bottom-[130px] xl:bottom-[130px] min-w-[227px] max-w-[227px] lg:left-[135px] xl:left-[355px]  z-[-1] skew-y-[3deg]    '>

                        <img src={Subtract} alt="" />
                        <div className='lg:flex absolute top-6  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[83px] left-[21px]'>
                            <img src={Card6_pic} className='w-[182px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-28 left-3  w-[12vw]">

                            <div className="w-full flex gap-0 justify-around">
                                <button className='w-[46px] lg:ml-[20px] xl:ml-[0px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img className='lg:ml-[20px] xl:ml-[0px]' src={Price} alt="" />
                            </div>



                        </div>
                    </div>

                    {/*carda*/}


                    <div className='hidden sm:hidden lg:block lg:relative bottom-[120px] min-w-[267px] max-w-[267px] xl:left-[165px] z-[-1] skew-y-[3deg] '>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[88px] left-[16px]'>
                            <img src={Card6_pic} className='w-[219px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-17 left-3  ">

                            <div className="lg:w-[22vw] xl:w-[14vw] flex gap-0 justify-around">
                                <button className='w-[56px] lg:ml-[20px] xl:ml-[0px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img className='lg:ml-[20px] xl:ml-[0px]' src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardb*/}
                    <div className='relative sm:bottom-[205px] lg:bottom-[120px] xl:bottom-[120px] sm:-right-[160px] md:-right-[220px] lg:right-[100px] xl:right-[20px] max-w-[308px] min-w-[308px]'>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[90px] left-[21px]'>
                            <img src={Card12_pic} className='w-[260px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-8  w-full">

                            <div className="w-full flex justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='hidden sm:hidden lg:block lg:relative lg:bottom-[120px] lg:right-[185px] xl:bottom-[120px] xl:right-[185px] z-[-1] skew-y-[-3deg] min-w-[267px] max-w-[267px]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[88px] left-[16px] '>
                            <img src={Card10_pic} className='w-[219px]  ' alt="" />
                        </div>
                        <div className="absolute  bottom-17 left-3">

                            <div className="w-[14vw] flex gap-0 justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='hidden sm:hidden lg:block lg:relative lg:right-[300px] xl:right-[370px] lg:bottom-[140px] xl:bottom-[120px] z-[-2] skew-y-[-3deg] min-w-[227px] max-w-[227px]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[83px] left-[21px] '>
                            <img src={Card10_pic} className='w-[182px]  ' alt="" />
                        </div>
                        <div className="absolute  bottom-28 left-3  w-[12vw]">

                            <div className="w-full flex justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default Hero_section;


// import React, { useState } from 'react';
// import Left from "../assets/images/Left.png";
// import Right from "../assets/images/Right.png";
// import Card6_pic from "../assets/images/Card6_pic.png"
// import Card12_pic from "../assets/images/Card12_pic.png"
// import Card10_pic from "../assets/images/Card10_pic.png"
// import Subtract from "../assets/images/Subtract.png"
// import Ellipse from "../assets/images/Ellipse.png"
// import Price from "../assets/images/Price.png"

// const cardData = [
//     { img: Card6_pic },
//     { img: Card6_pic },
//     { img: Card12_pic },
//     { img: Card10_pic },
//     { img: Card10_pic },
// ];

// export const Hero_section = () => {
//     const [currentCard, setCurrentCard] = useState(0);

//     const handlePrev = () => {
//         setCurrentCard(prev => (prev === 0 ? cardData.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setCurrentCard(prev => (prev === cardData.length - 1 ? 0 : prev + 1));
//     };

//     const Card = ({ imgSrc }) => (
//         <div className='relative mx-auto my-6 min-w-[267px] max-w-[267px] skew-y-[3deg] sm:skew-y-0'>
//             <img src={Subtract} alt="Background" />
//             <div className='flex absolute top-8 left-[25px]'>
//                 <img src={Ellipse} alt="Profile" />
//                 <div className='mb-[275px] ml-[4px]'>
//                     <h1>STELLA NOVA</h1>
//                     <p>@Stella Nova</p>
//                 </div>
//             </div>
//             <div className='absolute top-[88px] left-[16px]'>
//                 <img src={imgSrc} className='w-[219px]' alt="Artwork" />
//             </div>
//             <div className="absolute bottom-8 w-full">
//                 <div className="w-full flex justify-around">
//                     <button className='w-[56px] text-white h-[36px] rounded bg-gradient-to-r from-[#FD0000] to-[#FF9292]'>BUY</button>
//                     <img src={Price} alt="Price" />
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div>
//             <div className='text-center mt-[150px]'>
//                 <h1 className='text-4xl sm:text-6xl'>DISCOVER, CREATE &<br /> SELL ARTWORKS.</h1>
//                 <p className='mt-4 font-roboto'>Discover and trade unique digital art pieces on our NFT website,<br className='hidden sm:block' /> where creativity meets blockchain technology.</p>
//             </div>

//             {/* Large screen: show all cards */}
//             <div className="hidden sm:flex justify-center gap-4 mt-12 relative">
//                 {cardData.map((card, index) => (
//                     <Card key={index} imgSrc={card.img} />
//                 ))}
//             </div>

//             {/* Small screen: show one card with arrows */}
//             <div className="sm:hidden mt-12 flex justify-center items-center relative">
//                 <button onClick={handlePrev} className="absolute left-4 z-10">
//                     <img src={Left} alt="Left Arrow" className="w-8" />
//                 </button>

//                 <Card imgSrc={cardData[currentCard].img} />

//                 <button onClick={handleNext} className="absolute right-4 z-10">
//                     <img src={Right} alt="Right Arrow" className="w-8" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Hero_section;
