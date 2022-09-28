import React from 'react'
import { Section } from './Layout'

const Footer = () => {
    return (
        <div className='mt-11'>
            <Section>
                <ul className='flex -m-[18.49px]'>
                    <li className='p-[18.49px] text-[#666666] hover:text-[#a3a3a3] cursor-pointer'>About</li>
                    <li className='p-[18.49px] text-[#666666] hover:text-[#a3a3a3] cursor-pointer'>Terms of Use</li>
                    <li className='p-[18.49px] text-[#666666] hover:text-[#a3a3a3] cursor-pointer'>Privacy Policy</li>
                    <li className='p-[18.49px] text-[#666666] hover:text-[#a3a3a3] cursor-pointer'>Knowledge Base</li>
                    <li className='p-[18.49px] text-[#666666] hover:text-[#a3a3a3] cursor-pointer'>Customer Support</li>
                </ul>
            </Section>
        </div>
    )
}

export default Footer