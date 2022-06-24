import React, { useContext, useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import Navbar from './Navbar';
import getAllCountries from '../Services/getAllCountries';
import GlobalContext from '../Context/GlobalContext';
import IContext from '../Interfaces/IContext';

function Main() {
  const {countries, setCountries} = useContext(GlobalContext) as IContext;

  useEffect(() => {
    getAllCountries().then((country) => setCountries(country));
  }, [setCountries]);

  return (
    <div className="mt-10">
      <Navbar />
      <main
        className="container grid grid-cols-6 gap-16 mx-auto"
      >
        {
          countries.map((country: any, index: number) => (
            <CountryCard
              key={index}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))
        }
      </main>
    </div>
  );
}

export default Main;
