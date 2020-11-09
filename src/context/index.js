import {createContext, useContext} from 'react';

const AppContext = createContext(null);

const ApplicationProvider = AppContext.Provider;

const useAppContext = () => useContext(AppContext);

export {ApplicationProvider, useAppContext};
