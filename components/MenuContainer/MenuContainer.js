import { BsXLg, BsDownload } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { TfiSaveAlt } from 'react-icons/tfi';
import { PiDotFill } from 'react-icons/pi';

import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';
import ListComponentAll from './MenuComponentAll';
import * as FileSaver from 'file-saver';

export default function ListContainer() {
  const {
    setShowMenu,
    data,
    setData,
    currentListName,
    setCurrentListName,
    saveWords,
    setSaveWords,
  } = useContext(WordsContext);

  const removeList = () => {
    if (currentListName != 'none') {
      const { [currentListName]: deletedKey, ...rest } = data;
      setData(rest);

      const { [currentListName]: deletedKey2, ...rest2 } = saveWords;
      setSaveWords(rest2);

      localStorage.setItem('SavedWords', JSON.stringify(rest2));
      setCurrentListName('none');
    }
  };

  const downloadList = () => {
    const blob = new Blob([JSON.stringify(data[currentListName])], {
      type: 'application/json',
    });
    FileSaver.saveAs(blob, `${currentListName}.json`);
  };

  const saveList = () => {
    let object = {};
    object = { [currentListName]: data[currentListName] };
    setSaveWords({ ...saveWords, ...object });
    object = { ...saveWords, ...object };
    localStorage.setItem('SavedWords', JSON.stringify(object));
  };

  const clickHandler = () => {
    setShowMenu(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-3/4 landscape:w-1/5 h-screen bg-slate-900 z-10 opacity-95 p-1">
      {/* header */}
      <div className="flex border-b">
        <div className="flex gap-2 m-1">
          <span className="text-3xl landscape:text-lg">{currentListName}</span>
          <button
            onClick={clickHandler}
            className=" absolute right-2 top-3 order-last"
          >
            <BsXLg size={20} />
          </button>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-4  py-2 px-1 h-10 border-b">
        <button>
          <BsDownload onClick={downloadList} size={'auto'} />
        </button>
        <span className="mt-1">
          <PiDotFill />
        </span>
        <button>
          <TfiSaveAlt onClick={saveList} size={'auto'} />
        </button>
        <button onClick={removeList} className="ml-auto">
          <FaTrash color="red" size={'auto'} />
        </button>
      </div>

      {/* Components */}
      <div className="w-full h-full border-white overflow-scroll pb-10 mt-2">
        <div id="all" className="flex gap-2 flex-col ">
          {data[currentListName].map((item, index, key) => {
            return (
              <ListComponentAll word={item} itemIndex={index} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
