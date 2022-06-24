import React, { useMemo, useState } from 'react';
import GlobalContext from './GlobalContext';
import IProps from '../Interfaces/IProps';

const defaultStates = {
  filterValue: '',
};

function GlobalProvider({ children }: IProps) {
  const [filterValue, setFilterValue] = useState(defaultStates.filterValue);

  const contextValues = useMemo(() => ({
    filterValue,
    setFilterValue,
  }), [filterValue]);

  return (
    <GlobalContext.Provider value={contextValues}>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
