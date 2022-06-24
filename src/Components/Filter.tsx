import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../Context/GlobalContext';
import IContext from '../Interfaces/IContext';
import getCountriesByRegion from '../Services/getCountriesByRegion';

function Filter() {
  const {setCountries} = useContext(GlobalContext) as IContext;
  const {filterValue, setFilterValue} = useContext(GlobalContext) as IContext;

  useEffect(() => {
    getCountriesByRegion(filterValue).then((country) => setCountries(country));
  }, [setCountries, setFilterValue, filterValue]);

  const onHandleChange = (value: string) => {
    setFilterValue(value);
  };

  return (
    <div>
      <select
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm font-medium
          rounded-md p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
        onChange={(event) => onHandleChange(event.target.value)}
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
