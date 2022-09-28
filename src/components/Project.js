import React, {useRef, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import '../styles/swiper.css'

const ProjectCard = () => {
    return (
        <div className='p-[14.5px] bg-[#121212] rounded-[16.6285px] text-[#ececec] hover:bg-[#2c2c2c]'>
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

    const swiperRef = useRef();
    const buttonRef = useRef();
    useEffect(() => {
        const prev = swiperRef.current.querySelector('.swiper-button-prev');
        const next = swiperRef.current.querySelector('.swiper-button-next');
        prev && buttonRef.current.append(prev);
        next && buttonRef.current.append(next);
    }, []);

    return (
        <div className='pb-14'>
            <div className='flex items-center space-x-11'>
                <h3 className='text-[28px]'>More from this project</h3>
                <div className='relative flex items-center space-x-2' ref={buttonRef}></div>
            </div>
            <div className='mt-7 relative' ref={swiperRef}>
                <Swiper
                    spaceBetween={28.2}
                    slidesPerView={4}
                    modules={[Navigation]}
                    navigation
                >
                    {[0, 0, 0, 0, 0, 0, 0, 0].map((e, i) => (
                        <SwiperSlide key={i}>
                            <ProjectCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-[18.2638889vw] bg-gradient-to-r from-transparent to-black absolute top-0 right-0 bottom-0 z-10'></div>
            </div>
            <div>
                <button className='px-14 py-4 text-xs rounded-full border hover:bg-[#1b1b1b] border-white mt-14 mx-auto block uppercase'>VIEW PROJECT</button>
            </div>
        </div>
    )
}

export default Project