import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='max-w-[1168px] mx-auto flex justify-between items-center h-40'>
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