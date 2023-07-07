import { BsQuestionDiamondFill } from 'react-icons/bs';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function QuestionButton() {
  const { word } = useContext(WordsContext);

  const clickHandler = () => {
    window
      .open(`https://www.google.com/search?q=define+${word}`, '_blank')
      .focus();
  };

  return (
    <button
      title=""
      onClick={clickHandler}
      className=" bg-slate-900 py-5 px-6 rounded-md border-b-2 border-slate-900 active:border-b-2 active:border-white"
    >
      <BsQuestionDiamondFill size={28} color="white" />
    </button>
  );
}
