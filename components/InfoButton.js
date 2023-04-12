import { FaRegQuestionCircle } from 'react-icons/fa';

export default function InfoButton() {
  return (
    <div className="absolute bottom-4 right-4 hover:cursor-pointer">
      <FaRegQuestionCircle size={56} color={'#334155'} />
    </div>
  );
}
