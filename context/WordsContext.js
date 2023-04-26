import { createContext } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const api = async () => {
    let value = await fetch('/api');
  };

  let item = api();
  console.log(item);
  return <WordsContext.Provider value={{}}>{children}</WordsContext.Provider>;
};

export default WordsContext;
