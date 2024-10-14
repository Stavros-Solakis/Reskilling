import React from 'react'
import { Link } from 'react-router-dom';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Youtube from '../assets/Youtube.svg';
import Instagram from '../assets/Instagram.svg';


function FooterIcons(){
    return (
        <div className='mt-[88px] flex space-x-2'>
            <img src={Facebook} alt="FaceBook"/>
            <img src={LinkedIn} alt="LinkedIn"/>
            <img src={Youtube} alt="Youtube"/>
            <img src={Instagram} alt="Instagram"/>
        </div>
    );
}

export default FooterIcons;