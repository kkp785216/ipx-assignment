import React from 'react'
import { SocialeCard } from './CollapseCard'

const SocailCard = () => {
    return (
        <SocialeCard heading='Stay connected'>
            <div className='flex pt-[45.47px] pb-[68px] space-x-4'>
                <div className='w-1/3 px-[4.2361111vw] py-[4.5138888vw] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[4.2361111vw] py-[4.5138888vw] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-[clamp(18px,1.6666666vw,24px)] font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">join</span>
                            <a className='block text-[clamp(21px,1.875vw,27px)] font-bold' href="https://discord.com/">Discord</a>
                            <div className="mt-[clamp(27px,3.055555vw,44px)] xl:mt-11 flex space-x-[53px]">
                                <img className='h-[clamp(24px,2.22222vw,32px)] cursor-pointer' src="/img/discord.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 px-[4.2361111vw] py-[4.5138888vw] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 active border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[4.2361111vw] py-[4.5138888vw] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-[clamp(18px,1.6666666vw,24px)] font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">share</span>
                            <a className='block text-[clamp(21px,1.875vw,27px)] font-bold' href="https://discord.com/">Link</a>
                            <div className="mt-[clamp(27px,3.055555vw,44px)] xl:mt-11 flex space-x-[clamp(23px,3.680555vw,53px)]">
                                <img className='h-[clamp(18px,1.66666vw,24px)] cursor-pointer' src="/img/facebook.png" alt="" />
                                <img className='h-[clamp(18px,1.66666vw,24px)] cursor-pointer' src="/img/twitter.png" alt="" />
                                <img className='h-[clamp(18px,1.66666vw,24px)] cursor-pointer' src="/img/instagram.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 px-[4.2361111vw] py-[4.5138888vw] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[4.2361111vw] py-[4.5138888vw] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-[clamp(18px,1.6666666vw,24px)] font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">explore</span>
                            <a className='block text-[clamp(21px,1.875vw,27px)] font-bold' href="https://discord.com/">On Chain</a>
                            <div className="mt-[clamp(27px,3.055555vw,44px)] xl:mt-11 flex space-x-[53px]">
                                <img className='h-[clamp(18px,1.66666vw,24px)] cursor-pointer' src="/img/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SocialeCard>
    )
}

export default SocailCard