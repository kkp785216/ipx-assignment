import React, { useState } from 'react'

const CommonShare = () => {

    const [methodSwitch, setMethodSwitch] = useState('paypal');
    const [buyNowTerms, setButNowTerms] = useState(false);

    return (
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-[65px]'>
            <img className='w-[46%]' src="/img/thumbnail.png" alt="" />
            <div className='w-[54%]'>
                <div>
                    <span className='text-xs font-["Visby_CF"] tracking-[1px] text-[grey] leading-3'>investment option</span>
                    <h2 className='text-[46px] font-["Zuume"] tracking-[6.78641px] relative -top-1'>Common Share</h2>
                </div>
                <div className='mt-4 py-4 border-t border-b border-[#333333] flex items-center space-x-[6.3194444vw]'>
                    <div>
                        <span className='block text-xs font-["Visby_CF"] tracking-[1px] text-[grey] leading-3'>project</span>
                        <span className='block text-sm mt-1.5 font-["Visby_CF"] tracking-[1px] leading-[normal]'>Glitch</span>
                    </div>
                    <div>
                        <span className='block text-xs font-["Visby_CF"] tracking-[1px] text-[grey] leading-3'>owned by</span>
                        <span className='block text-sm mt-1.5 font-["Visby_CF"] tracking-[1px] leading-[normal]'>Rahul Roy</span>
                    </div>
                    <div className='flex space-x-3'>
                        <img className='w-6' src="/img/follownft.png" alt="" />
                        <span className='text-sm mt-1.5 font-["Visby_CF"] text-[grey] tracking-[1px] leading-[normal]'>Follow NFT</span>
                    </div>
                </div>
                <div className='mt-11 border-[2px] border-[#333333]'>
                    <div className='px-[35px] border-b border-[#333333] py-5'>
                        <span className='font-["Visby_CF"] text-lg tracking-[1px] leading-[normal]'>Sale ends on 20 june, 2022 at 10:30pm, GMT +5:30</span>
                    </div>
                    <div className='px-[35px] pt-6 pb-9'>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <span className='block text-sm font-["Visby_CF"] tracking-[1px] leading-[normal] text-[#b2b2b2]'>current price</span>
                                <span className='block text-[46px] font-["Zuume"] relative -top-1 mt-1'>$500</span>
                            </div>
                            <div className='w-1/2'>
                                <span className='block text-sm font-["Visby_CF"] tracking-[1px] leading-[normal] text-[#b2b2b2]'>units available</span>
                                <span className='block text-[46px] font-["Zuume"] relative -top-1 mt-1'>50</span>
                            </div>
                        </div>
                        <div className='mt-11'>
                            <span>select how you want to pay</span>
                            <div className='flex items-center space-x-12 mt-3.5'>
                                <div className={`method relative ${methodSwitch === 'stripe' && 'active'} cursor-pointer`} onClick={e => setMethodSwitch('stripe')}>
                                    <div className='method:bg-[radial-gradient(86.07%_145.35%_at_28.05%_86.07%,_#3E67FF_0%,_#E47298_100%)] rounded-[10px] md:p-px'>
                                        <div className='hidden method:block w-[149.14px] h-[48px] bg-[#170303] rounded-[10px]'></div>
                                        <img className='h-10 method:h-8 method:absolute method:top-0 method:bottom-0 method:right-0 method:left-0 method:m-auto' src="/img/stripe.png" alt="" />
                                        <div className='relative w-6 h-6 hidden method:block  method:absolute method:-top-3 method:-right-3'><img className='absolute w-full h-full' src="/img/method_select_bg.png" alt="" /><img className='absolute top-0 bottom-0 left-0 right-0 m-auto' src="/img/method_select_check.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className={`method relative ${methodSwitch === 'paypal' && 'active'} cursor-pointer`} onClick={e => setMethodSwitch('paypal')}>
                                    <div className='method:bg-[radial-gradient(86.07%_145.35%_at_28.05%_86.07%,_#3E67FF_0%,_#E47298_100%)] rounded-[10px] md:p-px'>
                                        <div className='hidden method:block w-[149.14px] h-[48px] bg-[#170303] rounded-[10px]'></div>
                                        <img className='h-10 method:h-8 method:absolute method:top-0 method:bottom-0 method:right-0 method:left-0 method:m-auto' src="/img/paypal.png" alt="" />
                                        <div className='relative w-6 h-6 hidden method:block  method:absolute method:-top-3 method:-right-3'><img className='absolute w-full h-full' src="/img/method_select_bg.png" alt="" /><img className='absolute top-0 bottom-0 left-0 right-0 m-auto' src="/img/method_select_check.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-16'>
                            <div className='flex items-start space-x-2.5'>
                                <div onClick={e => setButNowTerms(!buyNowTerms)} className={`${buyNowTerms && 'active'} w-4 h-4 flex-[0_0_auto] bg-white rounded relative [&.active]:bg-[#0075ff] [&.active]:hover:bg-[#0c5bb4] transition duration-100 cursor-pointer`}>
                                    <img className={`${buyNowTerms && 'active'} hidden [&.active]:block absolute top-0 left-0 bottom-0 right-0 m-auto p-0.5 invert transition duration-100`} src="/img/right.png" alt="" />
                                </div>
                                <label className='leading-[normal] relative -top-[3px]' onClick={e => setButNowTerms(!buyNowTerms)} htmlFor="buynow">I understand the benefits, terms and risks in buying this NFT</label>
                            </div>
                            <div className='flex space-x-5 mt-3.5'>
                                <div className='method relative active cursor-pointer group'>
                                    <div className='method:bg-[radial-gradient(86.07%_145.35%_at_28.05%_86.07%,_#3E67FF_0%,_#E47298_100%)] rounded-[10px] md:p-px'>
                                        <div className='hidden method:block w-[174px] group-hover:bg-[#170303] transition-colors duration-75 h-[48px] rounded-[10px]'></div>
                                        <span className='flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto text-sm tracking-[1px] font-["Visby_CF"] font-semibold'>Buy Now</span>
                                    </div>
                                </div>
                                <div className='method relative active cursor-pointer group'>
                                    <div className='method:bg-[radial-gradient(86.07%_145.35%_at_28.05%_86.07%,_#3E67FF_0%,_#E47298_100%)] rounded-[10px] md:p-px'>
                                        <div className='hidden method:block w-[174px] h-[48px] bg-[#170303] group-hover:bg-[#170303] transition-colors duration-75 rounded-[10px]'></div>
                                        <span className='flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto text-sm tracking-[1px] font-["Visby_CF"] font-semibold'>Request call back</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonShare