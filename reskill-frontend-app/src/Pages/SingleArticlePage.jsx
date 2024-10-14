import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

const SingleArticlePage = () => {

  const { postId } = useParams();
  const [post, setPost] = useState(null);

  /*Taking the Post from the back end for the single Page*/

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts/${postId}`);
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
            {post != null && (
              <Section>
              <div className='w-[772px] mt-20'>
                  <h1 className="font-inter text-6xl font-bold leading-[77.45px] tracking-[-0.02em] text-left mb-6">{post.title}</h1>
                  <h2 className='font-inter text-[24px] font-normal leading-9 text-left custom-card-gray'>{post.body}</h2>
              </div>
              <p className='my-20 mx-[299] font-inter text-[20px] font-medium leading-[30px]'></p>
              {/* <img className='w-full h-[650px] my-20 rounded-s-lg' src='' alt=""/>    */}
              </Section>
            )}

            <Section>
                <hr className="border-1 border-custom-gray" />
                <Footer/>
            </Section>
        </div>
    );
}

export default  SingleArticlePage