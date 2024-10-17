import React from 'react';

const brands = [
  { image: '/brand1.png' },
  { image: '/brand2.png' },
  { image: '/brand3.png' },
];

const TopBrands = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Top <span className="text-blue-500">Electronics Brands</span>
        </h2>
        <a href="#" className="text-blue-500 font-medium hover:underline">
          View All
        </a>
      </div>

      {/* Brands Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={brand.image}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              alt={`Brand ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
