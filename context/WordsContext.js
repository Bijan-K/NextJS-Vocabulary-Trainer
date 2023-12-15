import { createContext, useEffect, useState } from 'react';
import { DefaultENData } from './DefaultEN';
import { DefaultDUData } from './DefaultDU';

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [Data, setData] = useState({
    English: {
      Default: DefaultENData,
      Mistakes: [],
      none: ['empty list'],
    },
    Dutch: {
      Default: DefaultDUData,
      Mistakes: [],
      none: ['empty list'],
    },
  });

  const [index, setIndex] = useState(0);
  const [word, setWord] = useState('NaN');
  const [currentListName, setCurrentListName] = useState('Default');
  const [showMenu, setShowMenu] = useState(false);
  const [lists, setLists] = useState([]);
  const [saveWords, setSaveWords] = useState({});

  const setWords = (wordsIndata) => {
    wordsIndata.sort(() => Math.random() - 0.5);
    setWord(wordsIndata[index]);
    setIndex(0);
  };

  useEffect(() => {
    if (localStorage.getItem('SavedWords')) {
      // localStorage.setItem('SavedWords', '{}');
      let save = JSON.parse(localStorage.getItem('SavedWords'));
      setData({ ...data, ...save });
      setSaveWords(save);
    } else {
      localStorage.setItem('SavedWords', '{}');
    }
  }, []);

  useEffect(() => {
    setWords(data[currentListName]);
    setLists(Object.keys(data));
  }, [currentListName, data]);

  return (
    <WordsContext.Provider
      value={{
        showMenu,
        lists,
        currentListName,
        data,
        word,
        index,
        saveWords,
        setSaveWords,
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
