import React, { useMemo, useState } from 'react';
import GlobalContext from './GlobalContext';
import IProps from '../Interfaces/IProps';

const defaultStates = {
  filterValue: '',
  countries: [],
  details: [],
  countryName: '',
};

function GlobalProvider({ children }: IProps) {
  const [filterValue, setFilterValue] = useState(defaultStates.filterValue);
  const [countries, setCountries] = useState(defaultStates.countries);
  const [details, setDetails] = useState(defaultStates.details);
  const [countryName, setCoutryName] = useState(defaultStates.countryName)

  const contextValues = useMemo(() => ({
    filterValue,
    setFilterValue,
    countries,
    setCountries,
    details,
    setDetails,
    countryName,
    setCoutryName,
  }), [filterValue, countries, details,countryName]);

  return (
    <GlobalContext.Provider value={contextValues}>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
