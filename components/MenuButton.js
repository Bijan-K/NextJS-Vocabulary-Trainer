import { AiOutlineMenuUnfold } from 'react-icons/ai';

export default function MenuButton() {
  return (
    <button className="fixed top-3 left-3 p-1 active:border active:border-black rounded-md">
      <AiOutlineMenuUnfold size={32} color="black" />
    </button>
  );
}
