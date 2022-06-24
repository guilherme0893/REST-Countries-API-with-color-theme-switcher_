import React, { useMemo, useState } from 'react';
import GlobalContext from './GlobalContext';
import IProps from '../Interfaces/IProps';

const defaultStates = {
  filterValue: '',
  countries: [],
};

function GlobalProvider({ children }: IProps) {
  const [filterValue, setFilterValue] = useState(defaultStates.filterValue);
  const [countries, setCountries] = useState(defaultStates.countries);

  const contextValues = useMemo(() => ({
    filterValue,
    setFilterValue,
    countries,
    setCountries,
  }), [filterValue, countries]);

  return (
    <GlobalContext.Provider value={contextValues}>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
