import { AiOutlineMenuUnfold } from 'react-icons/ai';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function MenuButton() {
  const { setShowList, showList } = useContext(WordsContext);

  const clickHandler = () => {
    setShowList(true);
  };

  return (
    <button
      onClick={clickHandler}
      className="fixed top-3 left-3 p-1 active:border active:border-black rounded-md"
    >
      <AiOutlineMenuUnfold size={32} color="black" />
    </button>
  );
}
