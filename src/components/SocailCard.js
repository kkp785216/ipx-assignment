import React from 'react'
import { SocialeCard } from './CollapseCard'

const SocailCard = () => {
    return (
        <SocialeCard heading='Stay connected'>
            <div className='flex pt-[45.47px] pb-[68px] space-x-4'>
                <div className='w-1/3 px-[61px] py-[65px] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[61px] py-[65px] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-2xl font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">join</span>
                            <a className='block text-[27px] font-bold' href="https://discord.com/">Discord</a>
                            <div className="mt-11 flex space-x-3">
                                <img className='h-8 cursor-pointer' src="/img/discord.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 px-[61px] py-[65px] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 active border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[61px] py-[65px] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-2xl font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">share</span>
                            <a className='block text-[27px] font-bold' href="https://discord.com/">Link</a>
                            <div className="mt-11 flex space-x-[53px]">
                                <img className='h-6 cursor-pointer' src="/img/facebook.png" alt="" />
                                <img className='h-6 cursor-pointer' src="/img/twitter.png" alt="" />
                                <img className='h-6 cursor-pointer' src="/img/instagram.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 px-[61px] py-[65px] border-[2px] bg-[#1c1c1c] opacity-60 [&.active]:opacity-100 hover:opacity-100 border-[#333333] [&.active]:border-white hover:border-[#383838] relative'>
                    <div className='pb-[100%]'>
                        <div className='px-[61px] py-[65px] absolute top-0 bottom-0 left-0 right-0'>
                            <span className="block text-2xl font-[&quot;Visby_CF&quot;] tracking-[1px] text-[grey]">explore</span>
                            <a className='block text-[27px] font-bold' href="https://discord.com/">On Chain</a>
                            <div className="mt-11 flex space-x-3">
                                <img className='h-6 cursor-pointer' src="/img/arrow.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SocialeCard>
    )
}

export default SocailCard