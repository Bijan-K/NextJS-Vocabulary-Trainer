import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function TopButton({ name, index }) {
  const { setIndex, setWord, data, setWrongList } = useContext(WordsContext);

  const clickHandler = () => {
    setIndex(0);
    setWord(data[0]);
    setWrongList([]);
  };

  return name != 'Mistakes' ? (
    <button className="text-center bg-black text-white px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800">
      {name}
    </button>
  ) : (
    <button className="text-center bg-black text-rose-400 px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800">
      {name}
    </button>
  );
}
