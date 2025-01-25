// import React from "react";

// const Card = () => {
//   return (
//     <>
//       <div className="container flex flex-wrap gap-4 justify-center">
   
//         <div className="flex rounded-sm shadow-2xl shadow-gray-600 w-52">
//           <div className="flex flex-col justify-center">
//             <img
//               src="./images/camera3.jpg"
//               alt="camera3.jpg"
//               className="w-full h-48  hover:transform  transition-opacity overflow-hidden"
//             />{" "}
//             {/* object-contain is used to  fit width accorrding to hight */}
//             <div className="flex flex-wrap">

//             <h1 className="font-bold text-black font-sans">Title of product</h1>
//             <div className="flex">
//               <p className="text-black font-bold ">Price :</p>
//               <p className="text-green-700">Rs.300</p>
//             </div>
//             </div>
//             <a href="/">
//               <button className="rounded-sm bg-yellow-500 hover:bg-slate-500 hover:text-white transform transition-transform duration-300 px-4 py-1">
//                 View More
//               </button>
//             </a>
//           </div>
//         </div>
    
//       </div>
//     </>
//   );
// };

// export default Card;

import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-6 justify-center py-8">
      {/* Card Start */}
      <div className="flex flex-col rounded-sm shadow-2xl shadow-gray-600 w-52 bg-white">
        <img
          src="./images/camera3.jpg"
          alt="High-quality camera"
          className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 flex flex-col items-center">
          <h1 className="font-bold text-black font-sans text-center text-lg mb-2">
            Title of Product
          </h1>
          <div className="flex justify-between w-full text-sm mb-4">
            <p className="text-black font-bold">Price:</p>
            <p className="text-green-700">Rs.300</p>
          </div>
          <a href="/">
            <button className="rounded-sm bg-yellow-500 hover:bg-slate-500 hover:text-white transition-transform duration-300 px-4 py-2">
              View More
            </button>
          </a>
        </div>
      </div>
      {/* Card End */}

      {/* Repeat the card for demonstration */}
      <div className="flex flex-col rounded-sm shadow-2xl shadow-gray-600 w-52 bg-white">
        <div className="w-full p-1">
        <img
          src="./images/p1.jpg"
          alt="High-quality camera"
          className="w-full h-48 object-fit  hover:scale-105 transition-transform duration-300"
          />
          </div>
        <div className="p-4 flex flex-col items-center">
          <h1 className="font-bold text-black font-sans text-center text-lg mb-2">
            Title of Product
          </h1>
          <div className="flex justify-between w-full text-sm mb-4">
            <p className="text-black font-bold">Price:</p>
            <p className="text-green-700">Rs.300</p>
          </div>
          <a href="/">
            <button className="rounded-sm bg-yellow-500 hover:bg-slate-500 hover:text-white transition-transform duration-300 px-4 py-2">
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
