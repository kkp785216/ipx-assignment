import React, { useRef, useState } from 'react'

export const CollapseCardList = ({ title, description, active }) => {

    const parawrapper = useRef();
    const para = useRef();
    const [collapseactive, setCollapseActive] = useState(active)

    const cardToggle = () => {
        if (collapseactive) {
            setCollapseActive(false);
            parawrapper.current.style.height = `${para.current.offsetHeight}px`;
            setTimeout(() => {
                parawrapper.current.style.height = '0px';
            }, 0);
        }
        else {
            setCollapseActive(true);
            parawrapper.current.style.height = `${para.current.offsetHeight}px`;
            setTimeout(() => {
                parawrapper.current.style.height = 'auto';
            }, 500);
        }
        console.log(para.current.offsetHeight)
    }

    

    return (
        <div className={`flex justify-between collapsecard collapsecardfirst ${collapseactive && 'active'} last:border-b-0 overflow-hidden box-content flex-auto`}>
            <div className='max-w-[57.8995833vw] w-[80%]'>
                <h3 className='text-[19px] font-medium'>{title}</h3>
                <div className={`overflow-hidden collapsecardfirst:h-[auto]`} ref={parawrapper} style={{ height: `${active ? 'auto':'0px'}`, transition: '500ms' }}>
                    <p className='text-[#b2b2b2] leading-[26px] pt-4' ref={para}>{description}</p>
                </div>
            </div>
            <div className='relative w-[20px] h-[20px] cursor-pointer ml-4 flex-[0_0_auto]' onClick={cardToggle}>
                <div className='absolute top-0 bottom-0 m-auto w-[20px] h-0.5 bg-white'></div>
                <div className='absolute top-0 bottom-0 m-auto w-[20px] h-0.5 bg-white rotate-90 collapsecard:rotate-0 transition-transform duration-500'></div>
            </div>
        </div>
    )
}

export const CollapseCard = ({ children, heading }) => {
    return (
        <div className='border-[2px] border-[#333333] font-["Visby_CF"] tracking-[0.8px]'>
            <div className='pl-[68px] pr-[66px] border-b border-[#333333] py-4'>
                <span className='text-lg tracking-[1px] leading-[normal] text-[17px] font-medium block'>{heading}</span>
            </div>
            <div className='pl-[68px] pr-[66px] [&>*]:py-10 [&> [&>*]:border-b [&>*]:border-[#333333]'>
                {children}
            </div>
        </div>
    )
}

export const SocialeCard = ({ children, heading }) => {
    return (
        <div className='border-[2px] border-[#333333] font-["Visby_CF"] tracking-[0.8px]'>
            <div className='pl-[68px] pr-[66px] border-b border-[#333333] py-4'>
                <span className='text-lg tracking-[1px] leading-[normal] text-[17px] font-medium block'>{heading}</span>
            </div>
            <div className='pl-[68px] pr-[66px]'>
                {children}
            </div>
        </div>
    )
}

export const CollapseCardBox = ({ children, heading }) => {
    return (
        <div className='border-[2px] border-[#333333] font-["Visby_CF"] tracking-[0.8px]'>
            <div className='pl-[68px] pr-[66px] border-b border-[#333333] py-4'>
                <span className='text-lg tracking-[1px] leading-[normal] text-[17px] font-medium block'>{heading}</span>
            </div>
            <div className='pl-[68px] pr-[66px] flex items-start space-x-[45px]'>
                <div className='w-[27.36vw] flex-[0_0_auto] border-[2px] border-[#333333] my-10'>
                    <div className='relative pb-[79.1878173%]'>
                        <div className='absolute top-0 bottom-0 left-0 right-0'></div>
                    </div>
                </div>
                <div className='[&>*]:py-10  [&>*]:border-b [&>*]:border-[#333333] flex-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}