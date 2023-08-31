import { BsXLg } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';
import ListComponentAll from './ListComponentAll';
import ListComponentsMistake from './ListComponentsMistake';

export default function ListContainer() {
  const { index, setShowMenu, data, wrongList, currentListName } =
    useContext(WordsContext);

  let Data = data.currentListName;

  const clickHandler = () => {
    setShowMenu(false);
  };

  const changeTabs = () => {
    const Alltab = document.querySelector('#all');
    const MisTab = document.getElementById('mistakes');

    MisTab.classList.toggle('hidden');
    Alltab.classList.toggle('hidden');
  };

  return (
    <div className="fixed bottom-0 left-0 w-1/5 h-screen bg-slate-900 z-10 opacity-90 p-1">
      {/* header */}
      <div className="flex border-b">
        <div className="flex gap-2 m-1">
          <button
            onClick={changeTabs}
            className=" border-r pr-2 active:text-gray-500"
          >
            All the Words
          </button>
          <button
            onClick={changeTabs}
            className=" border-r pr-2 active:text-gray-500"
          >
            Mistakes List
          </button>
          <h5 className=" mr-2">{index}</h5>

          <button
            onClick={clickHandler}
            className=" absolute right-2 top-3 order-last"
          >
            <BsXLg />
          </button>
        </div>
      </div>
      {/* Components */}
      <div className="w-full h-full border-white overflow-scroll pb-10">
        <div id="all" className="flex gap-2 flex-col ">
          {data.map((item, index, key) => {
            return (
              <ListComponentAll word={item} itemIndex={index} key={index} />
            );
          })}
        </div>
        <div id="mistakes" className="hidden flex gap-2 flex-col">
          {wrongList.map((item, index, key) => {
            return (
              <ListComponentsMistake
                word={item}
                itemIndex={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
