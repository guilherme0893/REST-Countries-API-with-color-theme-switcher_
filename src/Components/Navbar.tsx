import React, { useState } from 'react';
import Search from './Search';
import Filter from './Filter';

interface navbarProps {
  filteredRegion: string;
};

function Navbar() {
  const [filteredRegion, setFilteredRegion] = useState('');
 
  return (
    <nav
      className="bg-white border-gray-200 rounded dark:bg-gray-800
        flex flex-row justify-around mb-10">
      <Search />
      <Filter filteredRegion={filteredRegion}/>
    </nav>
  );
}

export default Navbar;
