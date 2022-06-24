import React, { useEffect, useContext, useState } from 'react';
import CountryCard from './CountryCard';
import Navbar from '../Components/Navbar';
import getAllCountries from '../Services/getAllCountries';
import countries from '../Types/countries';

function Main() {
  const [countries, setCountries] = useState<countries[]>([]);
  
  useEffect(() => {
    getAllCountries().then((country) => setCountries(country));
  }, [setCountries]);

  return (
    <div className="mt-10">
      <Navbar />
      <main
        className='container grid grid-cols-6 gap-16 mx-auto'
      >
        {
          countries.map((country, index: number) => (
            <CountryCard
              key={ index }
              flag={ country.flags.svg }
              name={ country.name.common }
              population={ country.population }
              region={ country.region }
              capital={ country.capital }
            />          
          ))
        }           
      </main>      
    </div>
  )
};

export default Main;