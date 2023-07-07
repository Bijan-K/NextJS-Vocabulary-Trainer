import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function ListComponentAll({ word, key }) {
  const { index } = useContext(WordsContext);

  return (
    <div
      className={`${
        key > index ? 'text-white' : 'text-gray-600'
      }   p-3 text-center border-b-2 mx-5`}
    >
      {word}
    </div>
  );
}
