// components/DailyEssentials.tsx
import React from 'react';

const essentials = [
  { name: 'Daily Essentials', image: '/essential1.png', discount: 'UP TO 50% OFF' },
  { name: 'Vegetables', image: '/essential2.png', discount: 'UP TO 50% OFF' },
  { name: 'Fruits', image: '/essential3.png', discount: 'UP TO 50% OFF' },
  { name: 'Strawberry', image: '/essential4.png', discount: 'UP TO 50% OFF' },
  { name: 'Mango', image: '/essential5.png', discount: 'UP TO 50% OFF' },
  { name: 'Cherry', image: '/essential6.png', discount: 'UP TO 50% OFF' },
];

const DailyEssentials = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Daily <span className="text-blue-500">Essentials</span></h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {essentials.map((item) => (
          <div key={item.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-48">
            <img src={item.image} alt={item.name} className="w-32 h-32 mb-2" />
            <p className="text-sm text-gray-700 font-semibold">{item.name}</p>
            <p className="text-green-600 text-sm">{item.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyEssentials;
