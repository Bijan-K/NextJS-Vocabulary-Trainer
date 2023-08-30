import { createContext, useEffect, useState } from 'react';
import { DefaultData } from './Default';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [data, setData] = useState({ Default: DefaultData, Mistakes: [] });
  const [index, setIndex] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [word, setWord] = useState('NaN');
  const [currentListName, setCurrentListName] = useState('Default');

  const setWords = (data) => {
    console.log(data);
    data.sort(() => Math.random() - 0.5);
    setWord(data[index]);
  };

  useEffect(() => {
    setWords(data.Default);
    setIndex(0);
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
