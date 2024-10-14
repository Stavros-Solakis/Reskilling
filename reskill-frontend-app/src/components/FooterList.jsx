import React from 'react'
import { Link } from 'react-router-dom';


function FooterList(){
    return (
        <section className='flex flex-col flex-wrap items-center gap-y-6 '>
            <h3 className='text-black w-[187px]'>Topic</h3>
            <ul className='font-inter text-[16px] font-medium leading-[24px] text-[#454545]
            flex flex-col flex-wrap items-center gap-y-6 '>
                <li className='w-[187px]'><Link to="/">Page</Link></li>
                <li className='w-[187px]'><Link to="/">Page</Link></li>
                <li className='w-[187px]'><Link to="/">Page</Link></li>
            </ul>
        </section>
    );
}

export default FooterList;