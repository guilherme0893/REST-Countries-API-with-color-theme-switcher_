import React from 'react';
import Search from './Search';
import Filter from './Filter';

function Navbar() {
  return (
    <nav
      className="bg-white border-gray-200 rounded dark:bg-gray-800
        flex flex-row justify-around mb-10"
    >
      <Search />
      <Filter />
    </nav>
  );
}

export default Navbar;
