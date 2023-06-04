import React from "react";

const Navbar: React.FC = () => {
  const handleDropdownClick = () => {
    // Add your logic to handle the dropdown click event here
    console.log("Dropdown clicked!");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div>
        <a href="/" className="text-white font-bold text-xl">Logo</a>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-400">About</a>
          </li>
          <li className="relative">
            <button onClick={handleDropdownClick} className="text-white hover:text-gray-400">
              Dropdown
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md hidden">
              <ul className="py-2 px-3">
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-500">Option 1</a>
                </li>
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-500">Option 2</a>
                </li>
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-500">Option 3</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
