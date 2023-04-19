import { FaRegQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function InfoButton() {
  const [hovered, setHovered] = useState(false);

  const HoverHandler = (value) => {
    setHovered(value);
  };

  return (
    <>
      <div
        className={`${
          hovered ? '' : 'hidden'
        } absolute right-4 bottom-20 w-52 h-36 bg-slate-700 rounded-md`}
      >
        <p className="mx-2 my-2">
          Hello bijan
          <br />
          this is a personal project why did you make this?
        </p>
      </div>
      <div className="absolute bottom-4 right-4 hover:cursor-pointer">
        <FaRegQuestionCircle
          size={56}
          color={'#334155'}
          onMouseEnter={() => HoverHandler(true)}
          onMouseLeave={() => HoverHandler(false)}
        />
      </div>
    </>
  );
}
