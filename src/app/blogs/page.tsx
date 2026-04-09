
"use client";

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { blogPosts } from './data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";
import Hero2 from "../components/Hero2";



export default function BlogListPage() {
  const blogsRef = useRef<HTMLDivElement | null>(null);
  const [visibleBlogsCount, setVisibleBlogsCount] = useState(6);


  const handleLoadMore = () => {
    setVisibleBlogsCount(prevCount => prevCount + 6);
  };

  const blogsToDisplay = blogPosts.slice(0, visibleBlogsCount);
  const hasMoreBlogs = visibleBlogsCount < blogPosts.length;

  return (
    <>
      <Header />
      <Hero2
        heading_en="Blog"
        breadcrumbPosition="left"
      />
      <section ref={blogsRef} className=" other-section lg:py-24 py-14   overflow-hidden relative">


        <div className='max-w-[1360px] mx-auto px-6'>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14 fade-up">
            {blogsToDisplay.map((post) => (
              <div key={post.slug} className="site-card blog-card rounded-3xl bg-white">
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
          {hasMoreBlogs && (
            <AnimatedButton onClick={handleLoadMore} label="Load More" className="white-btn w-fit load-more-btn mt-6  lg:mt-10 mx-auto" />
          )}
        </div>
      </section>

      <Footer />
    </>

  );
}

