'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Import Heroicons

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
              value={email}
              placeholder="Enter the name of the School"
              onChange={handleEmailChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} 
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" /> 
                ) : (
                  <EyeIcon className="h-5 w-5" /> 
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#154473] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#123961] focus:outline-none focus:ring focus:ring-[#5A7EA6]"
          >
            Sign In
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
