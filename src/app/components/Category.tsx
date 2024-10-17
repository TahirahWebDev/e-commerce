const categories = [
    { name: 'Mobile', icon: '📱' },
    { name: 'Camera', icon: '📷' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Furniture', icon: '🛋️' },
    { name: 'Watches', icon: '⌚' },
    { name: 'Accessories', icon: '🎧' }
  ];
  
  const Category = () => {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Shop From <span className="text-blue-500">Top Categories</span></h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="text-center border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Category;
  