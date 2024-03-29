import { BsXLg } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function WrongButton() {
  const { index, setIndex, setWord, data, setData, currentListName } =
    useContext(WordsContext);

  const clickHandler = () => {
    let temp = data.Mistakes;
    temp.push(data[currentListName][index]);
    setData({ ...data, Mistakes: temp });
    setWord(data[currentListName][index + 1]);
    setIndex(index + 1);
  };

  return (
    <button
      title=""
      className=" bg-rose-800 pl-10 pr-10 landscape:px-10 py-6 rounded-2xl active:bg-rose-900"
      onClick={clickHandler}
    >
      <BsXLg size={20} />
    </button>
  );
}
