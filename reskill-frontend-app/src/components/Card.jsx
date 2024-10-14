import React from 'react'
import { Link } from 'react-router-dom';

const Card = (post) => {
  return (
    <div className='w-[404px] h-[434px]'>
        <Link to={`/posts/${post.post.id}`}>
            <img className='w-[404px] h-[346px] rounded-s-lg mb-6' src={post.photo.url} alt="FaceBook"/>
            <div className='space-y-1'>
                <h6 className='font-inter text-[20px] font-medium leading-[30px]'>{post.post.title}</h6>
                <span className='fonst-inter text-[20px] font-medium leading-[30px] custom-card-gray'>{post.post.userId}</span>
            </div>
        </Link>
    </div>
  );
}

export default Card