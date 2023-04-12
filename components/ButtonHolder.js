import LogButton from './mainButtons/LogButton';
import ResetButton from './mainButtons/ResetButton';

export default function ButtonHolder() {
  return (
    <div className="absolute top-4 left-4 flex flex-col gap-1">
      <ResetButton />
      <LogButton />
    </div>
  );
}
