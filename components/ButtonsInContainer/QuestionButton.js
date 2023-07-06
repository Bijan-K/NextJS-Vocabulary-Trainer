import { BsQuestionDiamondFill } from 'react-icons/bs';

export default function QuestionButton() {
  return (
    <button
      title=""
      className=" bg-slate-900 py-5 px-6 rounded-md border-b-2 border-slate-900 active:border-b-2 active:border-white"
    >
      <BsQuestionDiamondFill size={28} color="white" />
    </button>
  );
}
