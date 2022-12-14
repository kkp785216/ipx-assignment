import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='max-w-[1197px] mx-[clamp(20px,7vw,44px)] lg:mx-[6.45833333%] flex justify-between items-center h-40'>
                <img className='w-[61px]' src="/img/logo.png" alt="" />
                <div className='relative'>
                    <img className='w-12' src="/img/profile.png" alt="" />
                    {true && <div className='w-[10px] h-[10px] bg-[#4BB625] rounded-full absolute top-[3px] right-[3px]'></div>}
                </div>
            </div>
        </header>
    )
}

export default Header