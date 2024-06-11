import React, { useState } from 'react';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white w-64 p-6 shadow-md flex flex-col justify-between h-[94vh]">
      {/* Top Section */}
      <div>
        <button className="bg-blue-900 text-white py-2 px-4 rounded w-full mb-4">RESUME SCAN</button>
        <div className="relative">
          <button 
            className="bg-white border border-orange-500 text-orange-500 py-2 px-4 rounded w-full flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Scan my resume</span>
            <svg className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="mt-2 border border-gray-200 rounded shadow-lg bg-white">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Recent Scans</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Previous Scans</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Get Credits</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="mb-4 text-gray-800">
          <div className="text-gray-400  mb-2">Help & Support</div>
          <div className="mb-2 cursor-pointer hover:underline">Contact Us</div>
          <div className="mb-2 cursor-pointer hover:underline">About Us</div>
          <div className="mb-2 cursor-pointer hover:underline">Terms of Service</div>
          <div className="mb-2 cursor-pointer hover:underline">Privacy Policy</div>
        </div>
        <div className="mb-4 text-gray-800 border border-gray-400">
          Credits Available: <span className="text-orange-500 font-semibold">8510</span>
        </div>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded w-full">BUY MORE CREDITS</button>
      </div>
    </div>
  );
};

export default Sidebar;
