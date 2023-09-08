import { useContext } from 'react';
import WordsContext from '@/context/WordsContext';
import { ImFileEmpty } from 'react-icons/im';
import { GiFinishLine } from 'react-icons/gi';

export default function MainDisplay() {
  const { data, word, index } = useContext(WordsContext);

  const clickHandler = () => {
    window
      .open(`https://www.google.com/search?q=define+${word}`, '_blank')
      .focus();
  };

  return (
    <div className="w-full h-full bg-slate-600 flex items-center justify-center">
      <div
        onClick={clickHandler}
        className=" translate-y-[-100px] shadow shadow-orange-100 rounded-xl bg-slate-700 px-24 py-[20px] cursor-pointer"
      >
        <span className="text-white text-8xl">
          {word !== 'NaN' && word != undefined ? (
            word
          ) : (
            <ImFileEmpty size={80} />
          )}
          {index > data.length ? <GiFinishLine size={24} color="green" /> : ''}
        </span>
      </div>
    </div>
  );
}
