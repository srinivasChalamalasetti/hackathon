import React from 'react';
import image from '../assets/ab.jpg';

const Body = () => {
  return (
    <div className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 opacity-75">To each their home.</h1>
      <p className="text-gray-100 text-lg md:text-xl mb-8 opacity-75">Let's find a home that's perfect for you.</p>

      <div className="w-full max-w-4xl px-4">
        <div className="bg-white bg-opacity-60 p-4 rounded-lg shadow-md">
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Location"
              className="flex-1 p-3 border border-gray-200 rounded-md placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input type='text' placeholder='Enter the price'
              className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Type of Land</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="agricultural">Agricultural</option>
            </select>
            <button
              type="submit"
              className="p-3 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-500"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
