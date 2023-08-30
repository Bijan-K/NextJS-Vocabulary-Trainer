import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';

export default function AddListButton() {
  const [buttonSize, setButtonSize] = useState(40);

  const hoverEffect = () => {
    buttonSize == 40 ? setButtonSize(48) : setButtonSize(40);
  };

  return (
    <div className="fixed bottom-4 right-5 w-32 h-32 rounded-md bg-slate-800 grid grid-cols-1 place-items-center">
      <button
        onMouseLeave={hoverEffect}
        onMouseEnter={hoverEffect}
        className="w-5/6 h-5/6 border-4 border-white border-dashed rounded-md grid grid-cols-1 place-items-center"
      >
        <HiPlus size={buttonSize} />
      </button>
    </div>
  );
}
