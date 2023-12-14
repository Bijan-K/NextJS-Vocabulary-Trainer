import Layout from '@/components/Layout';
import MainDisplay from '@/components/MainButtons/MainDisplay';
import ListContainer from '@/components/MenuContainer/MenuContainer';
import MainButtonsContainer from '@/components/MainButtons/MainButtonsContainer';
import WordsContext from '@/context/WordsContext';
import TopButtonsContainer from '@/components/TopButtonsContainer/TopButtonsContainer';
import { useContext } from 'react';

export default function Home() {
  const { showMenu } = useContext(WordsContext);

  return (
    <Layout>
      {showMenu ? <ListContainer /> : null}
      <TopButtonsContainer />
      <MainDisplay />
      <MainButtonsContainer />
    </Layout>
  );
}
