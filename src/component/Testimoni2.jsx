import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimoni2 = ({ text, username, image, rating, date }) => {
    const formattedDate = new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });


    return (
        <div className="relative p-6 bg-white rounded-lg border border-gray-300">
            <FontAwesomeIcon icon={faQuoteRight} className="absolute top-4 right-4 text-[#FFC100] text-3xl" />

            <div className="mb-4 flex gap-4 items-center">
                <img src={image} alt={username} className="h-10 w-10 rounded-full" />
                <div>
                    <h1 className="font-bold text-lg text-[#FFC100]">{username}</h1>
                </div>
            </div>

            <p className="mb-4 text-xs text-gray-700">
                {text}
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    {[...Array(rating)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className="text-[#FFC100] text-lg"
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-400">
                    {new Date(date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </span>
            </div>
        </div>
    );
};

export default Testimoni2;