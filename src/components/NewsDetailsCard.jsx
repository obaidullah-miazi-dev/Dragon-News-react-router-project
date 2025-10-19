import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title,  thumbnail_url, details} = news;
    console.log(news);
    return (
        <div className='space-y-4'>
            <h2 className='font-bold text-xl'>News Details</h2>
            <img src={thumbnail_url} alt={title} className='w-full h-fit rounded-md'/>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{details}</p>

            <Link to={`/category/${news.category_id}`} className='flex items-center gap-2 text-white bg-secondary btn'><FaArrowCircleLeft></FaArrowCircleLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;