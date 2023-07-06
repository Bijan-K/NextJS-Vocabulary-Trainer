import QuestionButton from './ButtonsInContainer/QuestionButton';
import CorrectButton from './ButtonsInContainer/CorrectButton';
import WrongButton from './ButtonsInContainer/WrongButton';

export default function MainButtonsContainer() {
  return (
    <div className="fixed shadow-lg shadow-top rounded-2xl shadow-slate-800 bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex gap-2 bg-slate-900">
      <WrongButton />
      <QuestionButton />
      <CorrectButton />
    </div>
  );
}
