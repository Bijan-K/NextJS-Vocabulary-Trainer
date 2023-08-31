import { createContext, useEffect, useState } from 'react';
import { DefaultData } from './Default';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [data, setData] = useState({ Default: DefaultData, Mistakes: [] });
  const [index, setIndex] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [word, setWord] = useState('NaN');
  const [currentListName, setCurrentListName] = useState('Default');
  const [showMenu, setShowMenu] = useState(false);
  const [lists, setLists] = useState([]);

  const setWords = (data) => {
    data.sort(() => Math.random() - 0.5);
    setWord(data[index]);
  };

  useEffect(() => {
    setWords(data.Default);
    setIndex(0);
    setLists(Object.keys(data));
  }, []);

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
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
