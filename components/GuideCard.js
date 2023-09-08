import { BsXSquare } from 'react-icons/bs';
import { useState } from 'react';
export default function GuideCard() {
  const [showGuide, setShowGuide] = useState(true);
  const clickHandler = () => {
    setShowGuide(false);
  };

  return (
    showGuide && (
      <div
        id=""
        className="fixed bottom-40 text-black right-5 bg-slate-400 p-4 rounded border border-black  w-48"
      >
        <button onClick={clickHandler} className="absolute top-1 right-1">
          <BsXSquare />
        </button>
        In order to add your custom wordsets, first make sure it is a .txt file
        and the wordset is formated like this:
        <br />
        word1
        <br />
        word2
        <br />
        word3
      </div>
    )
  );
}
