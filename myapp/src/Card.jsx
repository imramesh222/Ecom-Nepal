// import React from 'react'

// const Card = () => {
//   return (
//     <>
//       <div className="md:flex justify-evenly w-28">
//         <div className="w-1/3">
//         <img src="./images/b1.jpg" alt=""  className='w-fit' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Card


import React from "react";

const Card = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <img 
        className="rounded-t-lg h-56 w-full object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="p-5">
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-600">{price}</span>
          <button 
            onClick={onAddToCart} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
