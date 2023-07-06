import { createContext, useEffect, useState } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/api/');
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WordsContext.Provider value={{ data }}>{children}</WordsContext.Provider>
  );
};

export default WordsContext;
