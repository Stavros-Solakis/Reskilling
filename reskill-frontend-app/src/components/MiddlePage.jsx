import React from 'react';

const MiddlePage = (posts) => {
    console.log(posts.photos[0].url);
  return (
    <>
    <div className='flex flex-row space-x-8'>
        <img className='' src={posts.photos[0].url} alt={posts.photos[0].title}/>
        <img className='' src={posts.photos[1].url} alt={posts.photos[1].title}/>
    </div>
    <p className='my-20 mx-[299px] font-inter text-[20px] font-medium leading-[30px]'>{posts.posts[0].body}</p>
    </>
  );
}

export default MiddlePage