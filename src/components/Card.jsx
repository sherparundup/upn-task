import React from 'react';

const Card = ({ name, about, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[300px] m-4 transition-transform duration-200 hover:-translate-y-1">
      <div className="text-center mb-4">
        <img 
          src={imageUrl || 'https://via.placeholder.com/150'} 
          alt={name}
          className="w-[120px] h-[120px] rounded-full object-cover mx-auto"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 leading-relaxed">{about}</p>
      </div>
    </div>
  );
};

export default Card;