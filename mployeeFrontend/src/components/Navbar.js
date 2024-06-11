import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/login');
  };

  return (
    <nav className="flex bg-white shadow p-4">
        <div className="flex space-x-2">
          <span className="text-2xl font-bold text-gray-800">Mployeeme</span>
        </div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center space-x-6">
          <a href="#resume-scan" className="text-orange-600 font-medium hover:underline">Resume Scan</a>
          <a href="#job-recommendation" className="text-gray-700 hover:text-orange-600">Job Recommendation</a>
          <a href="#resume-keywords" className="text-gray-700 hover:text-orange-600">Resume Keywords</a>
          <a href="#resume-services" className="text-gray-700 hover:text-orange-600">Resume Services</a>
          <a href="#career-blogs" className="text-gray-700 hover:text-orange-600">Career Blogs</a>
        </div>
      </div>

        {/* Right Section: User Info or Login and Signup Buttons */}
        <div className="flex items-center space-x-2">
          {user ? (
            <span className="text-gray-800 font-medium">{user.name}</span>
          ) : (
            <>
              <button onClick={handleLoginClick} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
              <button onClick={handleSignupClick} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Signup</button>
            </>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
