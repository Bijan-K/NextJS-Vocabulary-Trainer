import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function ResetButton() {
  const { setIndex, setWord, data, setWrongList } = useContext(WordsContext);

  const clickHandler = () => {
    setIndex(0);
    setWord(data[0]);
    setWrongList([]);
  };

  return (
    <button
      onClick={clickHandler}
      className=" fixed top-4 right-5 text-center bg-black text-white px-2 py-1 rounded-lg font-semibold shadow-slate-800 shadow active:bg-slate-800"
    >
      Reset
    </button>
  );
}
