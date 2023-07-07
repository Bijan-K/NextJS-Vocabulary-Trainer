import { useContext } from 'react';
import WordsContext from '@/context/WordsContext';
import { MdOutlineDownloading } from 'react-icons/md';
import { GiFinishLine } from 'react-icons/gi';

export default function MainDisplay() {
  const { data, word, index } = useContext(WordsContext);

  console.log(data);

  return (
    <div className="w-full h-full bg-slate-600 flex items-center justify-center">
      <div className=" translate-y-[-100px] shadow shadow-orange-100 rounded-xl bg-slate-700 px-24 py-[20px] cursor-pointer">
        <span className="text-white text-8xl">
          {word !== 'NaN' ? word : <MdOutlineDownloading size={24} />}
          {index > data.length ? <GiFinishLine size={24} color="green" /> : ''}
        </span>
      </div>
    </div>
  );
}
