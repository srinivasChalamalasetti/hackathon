import React from 'react';
const RightSidebar = () => {
  return (
    <div className="bg-gray-100 p-4 w-full lg:w-3/4">
      <h2 className="text-xl font-bold mb-4">Real Estate Details</h2>
      <p>
        Welcome to our real estate website! We offer a variety of properties for sale and rent.
        Browse through our listings to find your dream home or next investment property.
      </p>
      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <h3 className="text-lg font-bold">Beautiful Family Home</h3>
        <p className="mt-2">4 beds | 3 baths | 2,500 sqft</p>
        <p className="mt-2">Price: $450,000</p>
      </div>
    </div>
  );
};

export default RightSidebar;
