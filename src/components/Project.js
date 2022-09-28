import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProjectCard = ({ children }) => {
    return (
        <div className='p-[14.5px] bg-[#121212] rounded-[16.6285px] text-[#ececec]'>
            <img className='w-full rounded-[11.0857px]' src="/img/project.png" alt="" />
            <div className='flex items-start space-x-3 my-[22.5px]'>
                <img className='w-[33.26px] h-[33.26px]' src="img/author.png" alt="" />
                <div>
                    <span className='block text-[12.5px]'>Lambiyan</span>
                    <span className='block text-[11.1px] mt-1 font-["Visby_CF"] tracking-[1px] leading-[normal] text-[#b2b2b2]'>Owned by – Pallav Bajjuri</span>
                </div>
            </div>
            <div className='px-3 py-1.5 bg-[#080808] flex justify-between items-center text-[9.69998px] rounded-[11.0857px]'>
                <span className=''>Price – INR 5,73,000</span>
                <div className='method relative active cursor-pointer group'>
                    <div className='method:bg-[radial-gradient(86.07%_145.35%_at_28.05%_86.07%,_#3E67FF_0%,_#E47298_100%)] rounded-full md:p-px'>
                        <div className='hidden method:block w-[80px] group-hover:bg-[#170303] transition-colors duration-75 h-[30px] rounded-full'></div>
                        <span className='flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto font-semibold'>Buy Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Project = () => {
    return (
        <div>
            <div className='flex'>
                <h3 className='text-[28px]'>More from this project</h3>
            </div>
            <div className='mt-7'>
                <Swiper
                    spaceBetween={28.2}
                    slidesPerView={4}
                >
                    {[0, 0, 0, 0, 0, 0, 0, 0].map((e, i) => (
                        <SwiperSlide key={i}>
                            <ProjectCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Project