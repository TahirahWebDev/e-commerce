import React from 'react';

// Define the interface for the product
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

// Define the interface for ProductGrid props
interface ProductGridProps {
  products: Product[];
}

// Correctly type the ProductGrid component
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
        Grab the best deals on  <span className="text-blue-500">Smartphones</span>
        </h2>
        <a href="#" className="text-blue-500 font-medium hover:underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
            {/* Dynamically use the image for each product */}
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-green-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
