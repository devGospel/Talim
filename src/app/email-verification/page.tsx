'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePageIndicator } from '../context/PageIndicatorContext';
import {useRouter} from 'next/navigation'

export default function EmailVerification() {
  const { currentPage, setCurrentPage } = usePageIndicator();
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUniqueIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUniqueId(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(2); 
    router.push('/signup')
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <div className="w-[70%] bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome Back!
          </h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter your details to continue.
          </p>
          <form className="flex flex-col space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 w-[100%] px-3 py-2 rounded-lg shadow-sm text-gray-800 transition-all duration-200 hover:ring-2 hover:ring-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                Unique Id
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="Enter your unique Id"
                value={uniqueId}
                onChange={handleUniqueIdChange}
                className="mt-1 w-[100%] px-3 py-2 rounded-lg shadow-sm text-gray-800 transition-all duration-200 hover:ring-2 hover:ring-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-[60%] bg-[#154473] text-white py-2 px-3 rounded-lg shadow-lg hover:bg-[#123961] focus:outline-none focus:ring focus:ring-[#5A7EA6] mx-auto"
            >
              Save & Continue
            </button>
          </form>

          {/* Page Indicator */}
          <div className="flex justify-center mt-4">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentPage === index ? 'bg-indigo-500' : 'bg-gray-300'
                }`}
              ></span>
            ))}
          </div>
        </div>
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