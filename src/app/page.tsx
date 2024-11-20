'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', location: '' });




  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Home!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sign up to begin your management journey.
        </p>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter the name of the School"
              value={formData.name}
   
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter the school&apos;s location"
              value={formData.location}
        
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#154473] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#123961] focus:outline-none focus:ring focus:ring-[#5A7EA6]"
          >
            Save & Continue
          </button>

        </form>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
      <div className="w-full h-full relative">
        <Image
          src="/img/signup.png"
          alt="High School"
          layout="fill"
          objectFit="cover"
        />
      </div>
</div>

    </div>
  );
}
