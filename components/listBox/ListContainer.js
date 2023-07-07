import { BsXLg } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';
import ListComponentAll from './ListComponentAll';
import ListComponentMistake from './ListComponentMistake';

export default function ListContainer() {
  const { index, setShowList, data, wrongList } = useContext(WordsContext);

  const clickHandler = () => {
    setShowList(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-1/5 h-screen bg-slate-900 z-10 opacity-90 p-1">
      {/* header */}
      <div className="flex border-b">
        <div className="flex gap-2 m-1">
          <button className=" border-r pr-2">All the Words</button>
          <button className=" border-r pr-2 ">Mistakes List</button>
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
      <div className="w-full h-full border-white">
        <div id="all" className="flex gap-2 flex-col overflow-y-scroll">
          {data.map((item, key) => {
            return <ListComponentAll word={item} key={key} />;
          })}
        </div>
        <div id="mistakes" className="collapse flex gap-2 flex-col">
          {wrongList.map((item, key) => {
            return <ListComponentMistake word={item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}
