import React from 'react'
import Card from './Card';

const RelatedArticles = ({ posts, photos ,custommargin }) => {
    console.log(posts);
  return (
    <div className={`flex justify-between gap-8  ${custommargin}`}>
        <Card post={posts[0]} photo={photos[0]}/>
        <Card post={posts[1]} photo={photos[1]}/>
        <Card post={posts[2]} photo={photos[2]}/>
    </div>
  );
}

export default RelatedArticles