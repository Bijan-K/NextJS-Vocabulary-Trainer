import { BsCheckAll } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function CorrectButton() {
  const { index, setIndex, setWord, data } = useContext(WordsContext);

  const clickHandler = () => {
    setWord(data[index + 1]);
    setIndex(index + 1);
  };

  return (
    <button
      title=""
      onClick={clickHandler}
      className="bg-emerald-800 px-10 py-3 rounded-2xl active:bg-emerald-900"
    >
      <BsCheckAll size={24} />
    </button>
  );
}
