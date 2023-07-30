import React from 'react'

function News({image,url,author,title,description}) {
  console.log(title);
  return (
    <div className='news-section'>
        <div className='image'>
            <img src={image} width={300} height={200} alt='image'></img>
        </div>
        <span className='title'>{title}</span>
        <h3 className='desc'>{description}</h3>
        <a href={url} className='view-more'>View More</a>
        <h5>{author}</h5>
    </div>
  )
}

export default News