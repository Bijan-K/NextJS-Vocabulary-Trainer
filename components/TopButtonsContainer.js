import { list } from 'postcss';
import MenuButton from './TopButtons/MenuButton';
import TopButton from './TopButtons/TopButton';
import WordsContext from '@/context/WordsContext';
import { useContext } from 'react';

export default function TopButtonsContainer() {
  const { lists } = useContext(WordsContext);
  return (
    <div className="fixed gap-2 flex top-3 left-3 p-1">
      <MenuButton />
      {lists.map((name, index) => {
        return <TopButton name={name} key={index} />;
      })}
    </div>
  );
}
