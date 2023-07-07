import { BsXLg } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function WrongButton() {
  const { index, setIndex, setWord, data, setWrongList, wrongList } =
    useContext(WordsContext);

  const clickHandler = () => {
    let temp = wrongList;
    temp.push(data[index]);
    setWrongList(temp);
    setWord(data[index + 1]);
    setIndex(index + 1);
  };

  return (
    <button
      title=""
      className=" bg-rose-800 px-10 py-6 rounded-2xl active:bg-rose-900"
      onClick={clickHandler}
    >
      <BsXLg size={20} />
    </button>
  );
}
