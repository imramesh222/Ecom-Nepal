// import React, { useState, useEffect } from "react";
// import Card from "../Card"; // Import Card component
// import axios from "axios";

// function ProductPage() {
//   const [products, setProducts] = useState([]);
//   const [limit, setLimit] = useState(6);

//   // Fetch products from API
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data); // Update products with API response
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   // Handle "Show More" functionality
//   const handleShowMore = () => {
//     setLimit((prevLimit) => Math.min(prevLimit + 6, products.length)); // Ensure limit does not exceed products.length
//   };

//   // Handle "Show Less" functionality
//   const handleShowLess = () => {
//     setLimit((prevLimit) => Math.max(prevLimit - 6, 6)); // Ensure limit doesn't drop below initial limit
//   };

//   return (
//     <div className="p-4">
//       {/* Products Grid */}
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products.slice(0, limit).map((product) => (
//           <Card key={product.id} item={product} />
//         ))}
//       </div>

//       {/* Show More & Show Less Buttons */}
//       <div className="text-center mt-8">
//         {limit < products.length && (
//           <button
//             onClick={handleShowMore}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-4"
//           >
//             Show More
//           </button>
//         )}
//         {limit > 6 && (
//           <button
//             onClick={handleShowLess}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Show Less
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductPage;

import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [showMoreClicked, setClicked] = useState(false);

  // Fetch products from API
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data)) // Set the fetched products
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err))
  })

  // Handle "Show More"
  const showMore = () => {
    setLimit((prevLimit) => prevLimit + 6);
    setClicked(true);
  };

  // Handle "Show Less"
  const showLess = () => {
    setLimit(12); // Reset the limit to default value
    setClicked(false);
  };

  return (
    <div className="p-4">
      {/* Products Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, limit).map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>

      {/* Show More & Show Less Buttons */}
      <div className="text-center mt-8">
        {limit < products.length && (
          <button
            onClick={showMore}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Show More
          </button>
        )}
        {showMoreClicked && (
          <button
            onClick={showLess}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
