import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import MiddlePage from '../components/MiddlePage'
import Hero from '../components/Hero'
import RelatedArticles from '../components/RelatedArticles'



const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setLoadingPosts(false);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/photos');
        setPhotos(response.data);
      } catch (error) {
        setError('Error fetching photos');
      } finally {
        setLoadingPhotos(false);
      }
    };

    fetchPosts();
    fetchPhotos();
  }, []);

  if (loadingPosts || loadingPhotos) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
      <div className="min-h-screen flex flex-col">
        <Section>
            <Header/>
        </Section>
        <Section>
            <Hero post={posts[0]} photo={photos[0]}/>
        </Section>
        <Section>
          <MiddlePage posts={posts.slice(1, 3)} photos={photos.slice(1, 4)} />
        </Section>
        <Section>
            <h2 className="font-inter text-4xl font-semibold leading-[44px] text-left mt-[120px] mb-8">Related articles or posts</h2>
            <RelatedArticles posts={posts.slice(3, 7)} photos={photos.slice(3, 7)} custommargin="mb-[120px]"/>
            <RelatedArticles posts={posts.slice(7, 10)}  photos={photos.slice(7, 10)} custommargin="mb-[120px]"/>
            <RelatedArticles posts={posts.slice(10, 13)}  photos={photos.slice(10, 13)} custommargin="mb-[196px]"/>
        </Section>
        <Section>
            <hr className="border-1 border-custom-gray" />
            <Footer/>
        </Section>
      </div>
  );
}

export default Homepage;

