import React from 'react'
import './BlogCard.css'
function BlogCard(props) {
  return (
    <div className='blogCard'>
        <div className='BlogCard-image'>
          <img src={props.image} alt="" className="blogCard-image-img" />
          <a href="#" className="blogCard-image-btn">View More</a>
        </div>

        <div className="blogCard-data">
          <span className="blogCard-data-type">
          {props.blogType}
          </span>
          <span className="blogCard-data-time">
          {props.blogDate}
          </span>
        </div>

        <div className="blogCard-title">
        {props.blogTitle}
        </div>

        <div className="blogCard-text">
          <p className="blogCard-text-info">
          {props.blogText}
          </p>
        </div>
    </div>
  )
}

export default  BlogCard
