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
        className=" translate-y-[-100px] rounded-xl border-b-2 border-white landscape:px-24 py-5 pb-8 px-6 cursor-pointer mx-2 bg-slate-700 mt-24"
      >
        <span className="text-white landscape:text-8xl text-6xl min-w-min">
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
