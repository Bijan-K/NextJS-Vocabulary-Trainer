import Layout from '@/components/Layout';
import MainDisplay from '@/components/MainDisplay';
import ResetButton from '@/components/ResetButton';
import MenuButton from '@/components/MenuButton';
import ListContainer from '@/components/MenuContainer/ListContainer';
import MainButtonsContainer from '@/components/MainButtonsContainer';
import WordsContext from '@/context/WordsContext';
import TopButtonsContainer from '@/components/TopButtonsContainer';
import { useContext } from 'react';

export default function Home() {
  const { showList } = useContext(WordsContext);

  return (
    <Layout>
      {showList ? <ListContainer /> : null}
      <TopButtonsContainer />
      <MainDisplay />
      <MainButtonsContainer />
    </Layout>
  );
}
