
"use client";
import { blogPosts } from '../data';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnimatedButton from "../../components/AnimatedButton";
import Link from 'next/link';
import React, { useState, use } from 'react';
import Hero2 from "../../components/Hero2";


export default function BlogPostPage({ params: initialParams }: { params: Promise<{ slug: string }> }) {
  const params = use(initialParams);

  const relatedBlogPosts = blogPosts.filter((p) => p.slug !== params.slug);

  // Shuffle related posts to get a random selection
  for (let i = relatedBlogPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [relatedBlogPosts[i], relatedBlogPosts[j]] = [relatedBlogPosts[j], relatedBlogPosts[i]];
  }

  const [visibleRelatedBlogsCount, setVisibleRelatedBlogsCount] = useState(3);

  const handleLoadMoreRelated = () => {
    setVisibleRelatedBlogsCount(prevCount => prevCount + 3);
  };

  const blogsToDisplay = relatedBlogPosts.slice(0, visibleRelatedBlogsCount);
  const hasMoreRelatedBlogs = visibleRelatedBlogsCount < relatedBlogPosts.length;

  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />
      <Hero2
        heading_en="Blog Details"
        
        breadcrumbPosition="left"
      />

      <section className="other-section pt-10 lg:pt-22 pb-7 lg:pb-24 overflow-hidden relative">

        <div className="max-w-[1360px] px-6 w-full pt-10 mx-auto  relative">


          <div className='mx-auto'>
            <h1 className="text-3xl font-bold mb-8 text-center">{post.title}</h1>


            <div className='site-card2 py-8 p-0-card'>
              <Image src={post.image} alt={post.title} width={1250} height={400} className="mx-auto" />
            </div>
            <p className=" mb-6 mx-auto opacity-70 pt-5">
              {post.content}
            </p>


          </div>


        </div>
      </section >
      <section className="py-10 overflow-hidden relative">
        <div className="max-w-[1360px] px-6 w-full mx-auto  relative">
          <h4 className='text-2xl font-medium'>Recent Posts</h4>

          <div className='mt-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14'>
              {blogsToDisplay.map((relatedPost) => (
                <div key={relatedPost.slug} className="site-card blog-card rounded-3xl bg-white">
                  <Image src={post.image} alt="blog img" width="400" height="250" className=' w-full rounded-xl' />
                  <div className='p-5 pt-3'>
                    <span className='text-sm  fw-200'>{post.date}</span>
                    <h2 className="text-2xl font-semibold my-3 line-clamp-3 max-w-[80%]">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-[#404040] font-normal line-clamp-5">By {post.content}</p>
                    <AnimatedButton href={`/blogs/${post.slug}`} label="Read More" className="w-fit transparent-btn2 transparent-btn3 mt-6" />

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// -- Re-usable Check SVG icon (no JSX namespace needed) --
function CheckSVG() {
  return (
    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74999 9.3448L3.16699 10.9278L7.91699 15.6778L15.833 7.7608L14.25 6.1778L7.91699 12.5108L4.74999 9.3448Z" fill="#8AA5FF" />
    </svg>
  );
}