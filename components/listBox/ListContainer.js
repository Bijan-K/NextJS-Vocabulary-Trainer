import { BsXLg } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function ListContainer() {
  const { index, setShowList, showList } = useContext(WordsContext);

  const clickHandler = () => {
    setShowList(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-1/5 h-screen bg-slate-900 z-10 opacity-90">
      <div className="flex border-b">
        <div className="flex gap-2 m-1">
          <button className=" border-r pr-2">All the Words</button>
          <button className=" border-r pr-2 ">Mistakes List</button>
          <h5 className=" mr-2">{index}</h5>

          <button
            onClick={clickHandler}
            className=" absolute right-2 top-2 ml-2 order-last"
          >
            <BsXLg />
          </button>
        </div>
      </div>
    </div>
  );
}
