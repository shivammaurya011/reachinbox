import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

function Header() {
  const [dark, setDark] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Fetch login state from localStorage on component mount
    const isUserLoggedIn = localStorage.getItem("login");
    setLogin(isUserLoggedIn === "true"); // Convert string to boolean
  }, []);

  const handleLogin = () => {
    if (!login) {
      window.location.href = '/login'; 
    }
  };

  const handleLogout = () => {
    localStorage.setItem("login", false);
    setLogin(false); // Update state after logout
  };

  return (
    <div className='bg-gray-800 px-6 py-3 text-white flex justify-between items-center'>
      <div onClick={handleLogout} className='text-2xl font-bold cursor-pointer'>
        Onebox
      </div>
      <div className='flex gap-6'>
        <button onClick={() => setDark(!dark)} className='rounded-full px-2 py-1 border border-gray-500'>
          {dark ? (
            <div className='flex gap-4 p-1'>
              <FiMoon />
              <FaCircle />
            </div>
          ) : (
            <div className='flex gap-4 p-1'>
              <FaCircle />
              <FiSun className='text-yellow-300'/>
            </div>
          )}
        </button>
        <div className='flex gap-1 justify-center cursor-pointer text-lg font-semibold items-center'>
          <p onClick={handleLogin}>{login ? 'Shivams Workspace' : 'Login'}</p> <FiChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
