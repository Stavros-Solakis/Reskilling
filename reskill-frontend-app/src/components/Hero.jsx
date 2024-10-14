import React from 'react';

const Hero = (post) => {
  return (
    <>
    <div className='w-[772px] mt-20'>
      <h1 className="font-inter text-6xl font-bold leading-[77.45px] tracking-[-0.02em] text-left mb-6">Posts List</h1>
      <h2 className='font-inter text-[24px] font-normal leading-9 text-left custom-card-gray'>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading</h2>
    </div>
    <img className='w-full h-[650px] my-20 rounded-s-lg' src={post.photo.url} alt={post.photo.title}/>
    <p className='my-20 mx-[299px] font-inter text-[20px] font-medium leading-[30px]'>{post.post.body}</p>
    </>
  );
}

export default Hero