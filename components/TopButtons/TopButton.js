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
      className="text-center bg-black text-white px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800"
    >
      {name}
    </button>
  ) : name != 'none' ? (
    <button
      onClick={clickHandler}
      className="text-center bg-black text-rose-400 px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800 ml-auto"
    >
      {name}
    </button>
  ) : (
    <button></button>
  );
}
