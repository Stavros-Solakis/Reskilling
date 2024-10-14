import React from 'react'
import { Link } from 'react-router-dom';
import FooterList from './FooterList';
import FooterIcons from './FooterIcons';
import FooterTitle from './FooterTitle';


export default function Footer(){
    return (
        <footer className='w-full flex flex-row flex-wrap items-center my-12 justify-between'>
            <section>
                <FooterTitle/>
                <FooterIcons/>
            </section>
            <section className='flex flex-row flex-wrap space-x-8'>
                <FooterList/>
                <FooterList/>
                <FooterList/>
            </section>
        </footer>
    );
}