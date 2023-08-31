import { createContext, useEffect, useState } from 'react';
import { DefaultData } from './Default';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [data, setData] = useState({
    Default: DefaultData,
    Mistakes: [],
    none: ['no words'],
  });

  const [index, setIndex] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [word, setWord] = useState('NaN');
  const [currentListName, setCurrentListName] = useState('Default');
  const [showMenu, setShowMenu] = useState(false);
  const [lists, setLists] = useState([]);

  const setWords = (wordsIndata) => {
    wordsIndata.sort(() => Math.random() - 0.5);
    setWord(wordsIndata[index]);
    setIndex(0);
    setLists(Object.keys(data));
  };

  useEffect(() => {
    setWords(data.Default);
  }, []);

  useEffect(() => {
    console.log(currentListName);
    setWords(data[currentListName]);
  }, [currentListName]);

  return (
    <WordsContext.Provider
      value={{
        showMenu,
        lists,
        currentListName,
        data,
        word,
        index,
        wrongList,
        setWrongList,
        setIndex,
        setWord,
        setShowMenu,
        setData,
        setCurrentListName,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
