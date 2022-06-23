import React, { ReactNode, useState } from 'react';
import GlobalContext from './GlobalContext';

type GlobalContextProps = {
  children: ReactNode;
};

function GlobalProvider({ children }: GlobalContextProps) {
  const [fetchApi, setFetchApi] = useState();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    fetchApi,
    setFetchApi,
  };

  return (
    <GlobalContext.Provider value={values}>
      { children }
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
