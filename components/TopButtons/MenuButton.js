import { AiOutlineMenuUnfold } from 'react-icons/ai';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function MenuButton() {
  const { setShowMenu, ShowMenu } = useContext(WordsContext);

  const clickHandler = () => {
    setShowMenu(true);
  };

  return (
    <button
      onClick={clickHandler}
      className="p-1 active:border active:border-black rounded-md"
    >
      <AiOutlineMenuUnfold size={36} color="black" />
    </button>
  );
}
