import { BsXLg } from 'react-icons/bs';

export default function WrongButton() {
  return (
    <button
      title=""
      className=" bg-rose-800 px-10 py-6 rounded-2xl active:bg-rose-900"
    >
      <BsXLg size={20} />
    </button>
  );
}
