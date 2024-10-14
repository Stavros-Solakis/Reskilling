import React from 'react';
import Facebook from '../assets/Facebook.svg';

const Hero = (post) => {
  return (
    <>
    <div className='w-[772px] mt-20'>
      <h1 className="font-inter text-6xl font-bold leading-[77.45px] tracking-[-0.02em] text-left mb-6">Posts List</h1>
      <h2 className='font-inter text-[24px] font-normal leading-9 text-left custom-card-gray'>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h2>
    </div>
   <img className='w-full h-[650px] my-20 rounded-s-lg' src={post.photo.url} alt="post.photo.body"/>
    <p className='my-20 mx-[299] font-inter text-[20px] font-medium leading-[30px]'>Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</p>
    </>
  );
}

export default Hero