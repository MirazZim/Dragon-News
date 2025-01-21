import React from "react";
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        author,
        title,
        details,
        image_url,
        total_view,
        rating,
        published_date,
    } = news;

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden border">
            {/* Author Section */}
            <div className="flex justify-between items-center p-5 bg-gray-100">
                <div className="flex items-center space-x-4">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-xs text-black">{published_date}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-500">
                    <FaBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>
            {/* Title */}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            </div>
            {/* Image with Padding */}
            <figure className="px-5 pb-3">
                <img src={image_url} alt={title} className="w-full h-56 object-cover rounded-lg" />
            </figure>
            <div className="card-body p-5">
                {/* Description */}
                <p className="text-gray-700 text-sm mt-2">{details.substring(0, 150)}...</p>
                {/* Read More */}
                <button className="text-primary text-sm font-medium hover:underline mt-2">
                    Read More
                </button>
                {/* Divider */}
                <div className="border-t my-4"></div>
                {/* Footer */}
                <div className="card-actions flex justify-between items-center">
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500">
                        <FaStar />
                        <span className="ml-2 text-sm">{rating.number}</span>
                    </div>
                    {/* Views */}
                    <div className="flex items-center text-gray-600">
                        <FaEye />
                        <span className="ml-2 text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
