import React from 'react';

function Header() {
  return (
    <div>
      <header
        className="border-2 mb-8 p-4"
        style={{ backgroundColor: '#202C37' }}
        data-testid="main-header"
      >
        <div className="flex justify-between">
          <h1 className="text-3xl text-white">Where in the world?</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
      </header>
    </div>
  );
}

export default Header;
