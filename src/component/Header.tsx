// Header.tsx

import React from "react";


const Header = () => {
  return (
    <header className="bg-red-200 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">My App</h1>
        <button className="bg-blue-900 text-white px-4 py-2 rounded">INI Button</button>
      </div>
    </header>
  );
};

export default Header;
