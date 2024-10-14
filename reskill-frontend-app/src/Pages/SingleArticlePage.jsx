import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Facebook from '../assets/Facebook.svg';


const SingleArticlePage = () => {

    const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${postId}`);
        const data = await response.json();
        setPost(data);   

      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [postId]);

    return (
        <div className="flex flex-col">
            <Section>
                <Header/>
            </Section>
            <Section>
            <div className='w-[772px] mt-20'>
                <h1 className="font-inter text-6xl font-bold leading-[77.45px] tracking-[-0.02em] text-left mb-6">{post}</h1>
                <h2 className='font-inter text-[24px] font-normal leading-9 text-left custom-card-gray'></h2>
            </div>
            <p className='my-20 mx-[299] font-inter text-[20px] font-medium leading-[30px]'></p>
            {/* <img className='w-full h-[650px] my-20 rounded-s-lg' src='' alt=""/>    */}
            </Section>
            <Section>
                <hr className="border-1 border-custom-gray" />
                <Footer/>
            </Section>
        </div>
    );
}

export default  SingleArticlePage