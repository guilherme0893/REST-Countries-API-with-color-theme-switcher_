import React, { useEffect, useContext, useState } from 'react';
import getCountriesByRegion from '../Services/getCountriesByRegion';

type countries = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface filterProps {
  filteredRegion: string;
};

function Filter({filteredRegion}: filterProps) {
  const [countries, setCountries] = useState<countries[]>([]);
  const [selectRegion, setSelectRegion] = useState('');

  // https://stackoverflow.com/questions/70043668/react-typescript-input-onchange-event-type
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   setSelectRegion(event.target.value.toLowerCase());
  //   console.log(event.target.value);
  // };

  useEffect(() => {
    getCountriesByRegion(selectRegion).then((country) => setCountries(country));
  }, [setCountries, setSelectRegion, selectRegion]);

  const onHandleChange = (value: string) => {
    // console.log(selectRegion);
    setSelectRegion(value)
  }

  return (
    <div>
      <select
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm font-medium
          rounded-md p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
        onChange={ (event) => onHandleChange(event.target.value) }
      >
        <option className="bg-white text-black" value="">Regions</option>
        <option className="bg-white text-black" value="africa">Africa</option>
        <option className="bg-white text-black" value="america">America</option>
        <option className="bg-white text-black" value="asia">Asia</option>
        <option className="bg-white text-black" value="europe">Europe</option>
        <option className="bg-white text-black" value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
