import React, { useEffect, useContext, useState } from 'react';
import CountryCard from './CountryCard';
import getAllCountries from '../Services/getAllCountries';

type countries = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function Main() {
  const [countries, setCountries] = useState<countries[]>([]);

  useEffect(() => {
    getAllCountries().then((country) => setCountries(country)); 
  }, [setCountries]);

  return (
    <div className="mt-10">
      <main
        className='container grid grid-cols-6 gap-16 mx-auto'
      >
        {
          countries.map((country: any, index: number) => (
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