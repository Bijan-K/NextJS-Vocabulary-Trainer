import { BsCheckAll } from 'react-icons/bs';

export default function CorrectButton() {
  return (
    <button
      title=""
      className="bg-emerald-800 px-10 py-3 rounded-2xl active:bg-emerald-900"
    >
      <BsCheckAll size={24} />
    </button>
  );
}
