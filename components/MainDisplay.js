import { useContext } from 'react';
import WordsContext from '@/context/WordsContext';

export default function MainDisplay() {
  const { data } = useContext(WordsContext);

  console.log(data);

  return (
    <div className="w-full h-full bg-slate-600 flex items-center justify-center">
      <div className=" translate-y-[-100px] shadow shadow-orange-100 rounded-xl bg-slate-700 px-24 py-[20px] cursor-pointer">
        <span className="text-white text-8xl">infrignable</span>
      </div>
    </div>
  );
}
