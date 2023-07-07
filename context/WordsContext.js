import { createContext, useEffect, useState } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [word, setWord] = useState('NaN');

  const fetchData = async () => {
    const response = await fetch('/api/');
    const data = await response.json();
    data.sort(() => Math.random() - 0.5);
    setData(data);
    setWord(data[index]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WordsContext.Provider
      value={{
        showList,
        data,
        word,
        index,
        wrongList,
        setWrongList,
        setIndex,
        setWord,
        setShowList,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
