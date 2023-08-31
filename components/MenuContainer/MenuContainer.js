import { BsXLg, BsDownload } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { TfiSaveAlt } from 'react-icons/tfi';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';
import ListComponentAll from './MenuComponentAll';

export default function ListContainer() {
  const { setShowMenu, data, setData, currentListName, setCurrentListName } =
    useContext(WordsContext);

  const removeList = () => {
    if (currentListName != 'none') {
      const { [currentListName]: deletedKey, ...rest } = data;
      setData(rest);
      setCurrentListName('none');
      console.log(data);
    }
  };

  const clickHandler = () => {
    setShowMenu(false);
  };

  const changeTabs = () => {
    const Alltab = document.querySelector('#all');
    Alltab.classList.toggle('hidden');
  };

  return (
    <div className="fixed bottom-0 left-0 w-1/5 h-screen bg-slate-900 z-10 opacity-95 p-1">
      {/* header */}
      <div className="flex border-b">
        <div className="flex gap-2 m-1">
          <span className="text-lg">{currentListName}</span>
          <button
            onClick={clickHandler}
            className=" absolute right-2 top-3 order-last"
          >
            <BsXLg size={20} />
          </button>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-4 py-2 px-1 border-b">
        <button>
          <BsDownload size={15} />
        </button>
        <button>
          <TfiSaveAlt size={15} />
        </button>
        <button onClick={removeList} className="ml-auto">
          <FaTrash color="red" size={15} />
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
