import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function ListComponentAll({ word, itemIndex }) {
  const { index } = useContext(WordsContext);

  const clickHandler = () => {
    window
      .open(`https://www.google.com/search?q=define+${word}`, '_blank')
      .focus();
  };

  return (
    <button
      onClick={clickHandler}
      className={`${
        itemIndex >= index ? 'text-white' : 'text-gray-400'
      }   p-3 text-center border-b-2 mx-5 landscape:text-base text-xl `}
    >
      {word}
    </button>
  );
}
