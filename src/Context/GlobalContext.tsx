import { createContext } from 'react';
import IContext from '../Interfaces/IContext';

const defaultStates = {
  filterValue: '',
};

const GlobalContext = createContext<IContext>(defaultStates);

export default GlobalContext;
