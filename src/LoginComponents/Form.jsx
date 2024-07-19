import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (onFormClick) => {
  // const [isFormVisible, setFormVisible] = useState(false);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Request has been send")
    // setFormVisible(true);
    navigate('/');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex justify-center items-center">


      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Fill the Details</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-gray-700">Email</label>
            <input type='email' placeholder='Enter the email' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">Property ID</label>
            <input type='text' placeholder='Enter the property id' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">Property Type</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-1">
              <option>Communities</option>
              <option>Land</option>
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">State</label>
            <input type='text' placeholder='Enter the State' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input type='text' placeholder='Enter the City' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">Pin Code</label>
            <input type='number' placeholder='Enter the pin code' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div>
            <label className="block text-gray-700">Landmark</label>
            <input type='text' placeholder='Enter the address' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Price of Land</label>
            <input type='number' placeholder='Enter the price of land' className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="col-span-2">

            <button
              onSubmit={onFormClick}
              className="text-blue-700 hover:underline hover:text-red-700 dark:text-blue-500 bg-green-500 p-3 rounded"
            >
              Submit            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
