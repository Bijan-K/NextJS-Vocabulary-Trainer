import { createContext } from 'react';

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  return (
    <DisplayContext.Provider value={{}}>{children}</DisplayContext.Provider>
  );
};

export default DisplayContext;
