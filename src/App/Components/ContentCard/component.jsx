// import React from "react";

// const ProductCard = ({ content, addToCart }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
//       <h3 className="text-lg font-bold text-gray-800">{content?.name}</h3>
//       <p className="text-sm text-gray-600 mt-1">{content?.description}</p>
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-xl font-semibold text-gray-900">₹{content?.price}</span>
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
//         //   onClick={() => addToCart(product)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from "react";

const ProductCard = ({ content, addToCart }) => {
  return (
    <div className="bg-[#1C1C24] shadow-md rounded-lg p-4 border border-[#333C] w-64">
      {/* Product Image */}
      <img
        src={content?.image}
        alt={content?.name}
        className="w-full h-40 object-cover rounded-t-md"
      />
      
      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-white truncate">{content?.name}</h3>

        {/* Product Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < content?.rating ? "text-yellow-400" : "text-yellow-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-sm text-yellow-600 ml-2">({content?.rating}{'5'})</span>
        </div>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{content?.description}</p>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl text-[#4ACD8D]">${content?.price}</span>
          <button
            onClick={() => addToCart(content)}
            className="bg-[#8C6DFD] hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
          >
            Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
