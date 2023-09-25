import { BsXSquare } from 'react-icons/bs';
import { useState } from 'react';
export default function GuideCard() {
  const [showGuide, setShowGuide] = useState(true);
  const clickHandler = () => {
    setShowGuide(false);
  };

  return (
    showGuide && (
      <div className="fixed text-black bg-slate-400 p-4 rounded border border-black landscape:bottom-40 landscape:h-fit landscape:right-5 landscape:translate-x-0 landscape:w-48 landscape:text-base landscape:translate-y-0 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 max-h-[43%] w-4/5 text-2xl overflow-scroll">
        <button onClick={clickHandler} className="absolute top-1 right-1">
          <BsXSquare />
        </button>
        In order to add your custom wordsets, first make sure your file is a
        .txt file and the wordset is formated similar to this:
        <br />
        word1
        <br />
        word2
        <br />
        word3
        <br />
        you can also save your word set in your browser's storage using the save
        function in the menu.
      </div>
    )
  );
}
