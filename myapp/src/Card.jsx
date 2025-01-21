// // import React from "react";

// // const Card = () => {


// //   return (
// //     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
// //       <div className="overflow-hidden">
// //         {/* Add hover effect to the image */}
// //         <img 
// //           className="rounded-t-lg h-56 w-full transform transition-transform duration-500 hover:scale-110" 
// //           src="./images/p1.jpg" 
// //           alt="p1.jpg" 
// //         />
// //       </div>
// //       <div className="p-5">
// //         <h5 className="text-lg font-bold text-gray-900">Strawberry</h5>
// //         <p className="mt-2 text-gray-600">
// //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, omnis?
// //         </p>
// //         <div className="flex items-center justify-between mt-4">
// //           <span className="text-xl font-bold text-green-600">Rs 300</span>
// //           <button 
// //             className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Card;

import React from "react";

function Card({ item }) {
  if (!item) {
    return null;
  }

  return (
    <div className="border rounded-lg shadow-lg bg-white p-4 hover:shadow-xl transition-shadow duration-200">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {item.description.length > 100
          ? `${item.description.substring(0, 100)}...`
          : item.description}
      </p>
      <p className="text-lg font-bold text-green-600 mb-4">${item.price}</p>
      <div className="flex justify-between">
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
      <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
        View Details
      </button>
      </div>
    </div>
  );
}

export default Card;
