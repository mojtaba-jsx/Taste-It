import React from 'react'
import './BlogCards.css'

import BlogCard from './BlogCard/BlogCard'
 function BlogCards() {
  return (
    <div className='blogCards'>
      <BlogCard image={'./images/Blog/blog-1.png'} blogType={'Delicious'} blogDate={'March 19, 2022'} blogTitle={'The Legend of US Cuisine: The Story of Hungry People'} blogText={'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'}/>
      <BlogCard image={'./images/Blog/blog-2.png'} blogType={'Cooking'} blogDate={'March 19, 2022'} blogTitle={'The Most Popular Delicious Food of Mediterranean Cuisine'} blogText={'Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'}/>
    </div>
  )
}

export default BlogCards
