import QuestionButton from './MainButtons/QuestionButton';
import CorrectButton from './MainButtons/CorrectButton';
import WrongButton from './MainButtons/WrongButton';

export default function MainButtonsContainer() {
  return (
    <div className="fixed shadow-lg shadow-top rounded-2xl shadow-slate-800 bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-12 w-5/6 landscape:w-auto landscape:mb-0 px-4 py-4 landscape:p-8 flex gap-2 bg-slate-900 overflow-ellipsis items-center justify-center">
      <WrongButton />
      <QuestionButton />
      <CorrectButton />
    </div>
  );
}
