import GlobalContext from './GlobalContext';
import { ReactNode, useState } from 'react';

type GlobalContextProps = {
  children: ReactNode;
};

const GlobalProvider = ({ children }: GlobalContextProps) => {
  const [fetchApi, setFetchApi] = useState();

  const values = {
    fetchApi,
    setFetchApi
  };

  return (
    <GlobalContext.Provider value={ values } >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
