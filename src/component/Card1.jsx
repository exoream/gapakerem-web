import React from "react";

const Card1 = ({ imageUrl, name }) => {

    return (
        <div className="border-2 border-gray-300 rounded-lg">
            <img src={imageUrl} alt="guide" className="h-100 w-full object-cover" />
            <h4 className="p-2 text-[#FFC100] font-semibold text-center">{name}</h4>
        </div>
    );
};

export default Card1;