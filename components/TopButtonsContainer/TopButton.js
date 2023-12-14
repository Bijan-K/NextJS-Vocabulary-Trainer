import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function TopButton({ name, index }) {
  const { setCurrentListName } = useContext(WordsContext);

  const clickHandler = (e) => {
    setCurrentListName(e.target.innerText);
  };

  return name != 'Mistakes' && name != 'none' ? (
    <button
      onClick={clickHandler}
      className="text-center bg-black text-white  rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800 text-lg px-3 py-2 landscape:text-base  landscape:px-2 landscape:py-1"
    >
      {name}
    </button>
  ) : name != 'none' ? (
    <button
      onClick={clickHandler}
      className="text-center bg-black text-rose-400 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800 ml-auto text-lg px-3 py-2 landscape:text-base  landscape:px-2 landscape:py-1"
    >
      {name}
    </button>
  ) : (
    <button></button>
  );
}
